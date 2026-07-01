# Run after: gh auth login
# Creates GitHub repos, pushes source, uploads Windows release assets, connects Vercel to GitHub.

$ErrorActionPreference = 'Stop'

$ghCliDir = 'C:\Program Files\GitHub CLI'
if (Test-Path $ghCliDir) {
  $env:Path = "$ghCliDir;$env:Path"
}

$Owner = 'basic-user-iom'
$WebsitePath = 'C:\Users\Mirjan\Desktop\webpage-3dviewer'
$ViewerPath = 'F:\3d-viever-backup\v3.18'
$WebsiteRepo = "$Owner/https-3dbviewer.com-"
$ViewerRepo = "$Owner/3d"
$ReleaseTag = 'v3.19'
$SetupExe = 'F:\3d-viever-backup\v3.18\dist\desktop-build\3D-Viewer-Setup-3.19.0-x64.exe'
$PortableExe = 'F:\3d-viever-backup\v3.18\dist\desktop-build\3D-Viewer-Portable-3.19.0-x64.exe'

function Write-ManualRepoSteps {
  Write-Host ''
  Write-Host 'Create empty repos manually at GitHub first, then rerun this script.' -ForegroundColor Yellow
  Write-Host ''
  Write-Host 'Manual steps:'
  Write-Host '  1. Go to https://github.com/new'
  Write-Host '  2. Create public repo: https-3dbviewer.com- (no README, .gitignore, or license)'
  Write-Host '  3. Create public repo: 3d (no README, .gitignore, or license)'
  Write-Host '  4. Rerun: scripts\publish-to-github.ps1'
  Write-Host ''
  Write-Host 'Or use a classic PAT with the repo scope and run: gh auth login'
}

function Test-GitHasOrigin {
  $names = @(git remote 2>$null | ForEach-Object { $_.ToString().Trim() } | Where-Object { $_ })
  return ($names -contains 'origin')
}

function Test-GhRepoExists {
  param([string]$Repo)
  $prev = $ErrorActionPreference
  $ErrorActionPreference = 'SilentlyContinue'
  try {
    gh repo view $Repo 1>$null 2>$null
    return ($LASTEXITCODE -eq 0)
  } finally {
    $ErrorActionPreference = $prev
  }
}

function Ensure-GitHubRepo {
  param(
    [string]$LocalPath,
    [string]$Repo,
    [ref]$NeedManualCreate
  )

  Set-Location $LocalPath
  $branch = (git branch --show-current 2>$null)
  if (-not $branch) { $branch = 'master' }

  $repoExists = Test-GhRepoExists -Repo $Repo
  if (-not $repoExists) {
    Write-Host "Repository $Repo not found. Trying gh repo create..."
    $prev = $ErrorActionPreference
    $ErrorActionPreference = 'Continue'
    try {
      $null = gh repo create $Repo --public 2>&1
      if ($LASTEXITCODE -ne 0) {
        $NeedManualCreate.Value = $true
        return $false
      }
      $repoExists = $true
    } finally {
      $ErrorActionPreference = $prev
    }
  }

  if (-not (Test-GitHasOrigin)) {
    git remote add origin "https://github.com/$Repo.git"
  }

  Write-Host "Pushing $Repo ($branch) from $LocalPath..."
  git push -u origin $branch
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed for $Repo." -ForegroundColor Red
    return $false
  }

  Write-Host "OK: https://github.com/$Repo"
  return $true
}

Write-Host 'Checking GitHub CLI auth...'
gh auth status
if ($LASTEXITCODE -ne 0) {
  Write-Host 'Run: gh auth login' -ForegroundColor Red
  exit 1
}

$needManualCreate = $false
$websiteOk = Ensure-GitHubRepo -LocalPath $WebsitePath -Repo $WebsiteRepo -NeedManualCreate ([ref]$needManualCreate)
$viewerOk = Ensure-GitHubRepo -LocalPath $ViewerPath -Repo $ViewerRepo -NeedManualCreate ([ref]$needManualCreate)

if ($needManualCreate) {
  Write-ManualRepoSteps
}

if (-not $websiteOk -or -not $viewerOk) {
  Write-Host 'Skipping release upload until both repos exist and pushes succeed.' -ForegroundColor Yellow
  exit 1
}

if (-not (Test-Path $SetupExe)) {
  Write-Host "Missing setup exe: $SetupExe" -ForegroundColor Red
  exit 1
}
if (-not (Test-Path $PortableExe)) {
  Write-Host "Missing portable exe: $PortableExe" -ForegroundColor Red
  exit 1
}

Write-Host 'Creating GitHub release with Windows assets...'
gh release create $ReleaseTag `
  --repo $ViewerRepo `
  --title "3D Viewer $ReleaseTag" `
  --notes "Windows standalone builds for 3D Viewer $ReleaseTag. Install with Setup or run the Portable exe." `
  $SetupExe $PortableExe

if ($LASTEXITCODE -ne 0) {
  Write-Host 'Release create failed (tag may already exist).' -ForegroundColor Yellow
}

if ($websiteOk) {
  Set-Location $WebsitePath
  Write-Host 'Connecting Vercel to GitHub (optional)...'
  $prev = $ErrorActionPreference
  $ErrorActionPreference = 'Continue'
  try {
    npx vercel git connect 2>&1
  } finally {
    $ErrorActionPreference = $prev
  }
}

Write-Host ''
Write-Host "Done. Website: https://github.com/$WebsiteRepo"
Write-Host "Viewer: https://github.com/$ViewerRepo/releases/tag/$ReleaseTag"


