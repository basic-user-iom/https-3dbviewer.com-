# Run AFTER creating empty repo: https://github.com/new -> name: 3d (public, no README)
$ErrorActionPreference = 'Stop'
$ghCliDir = 'C:\Program Files\GitHub CLI'
if (Test-Path $ghCliDir) { $env:Path = "$ghCliDir;$env:Path" }

$ViewerPath = 'F:\3d-viever-backup\v3.18'
$WebsitePath = 'C:\Users\Mirjan\Desktop\webpage-3dviewer'
$ViewerRepo = 'basic-user-iom/3d'
$ReleaseTag = 'v3.19'
$SetupExe = "$ViewerPath\dist\desktop-build\3D-Viewer-Setup-3.19.0-x64.exe"
$PortableExe = "$ViewerPath\dist\desktop-build\3D-Viewer-Portable-3.19.0-x64.exe"

Write-Host 'Checking viewer repo exists...'
gh repo view $ViewerRepo
if ($LASTEXITCODE -ne 0) {
  Write-Host 'Create empty public repo 3d at https://github.com/new first.' -ForegroundColor Red
  exit 1
}

Set-Location $ViewerPath
Write-Host 'Pushing viewer source...'
git push -u origin master
if ($LASTEXITCODE -ne 0) { exit 1 }

Write-Host 'Creating release with Windows builds (~590 MB each, may take several minutes)...'
gh release create $ReleaseTag `
  --repo $ViewerRepo `
  --title "3D Viewer $ReleaseTag" `
  --notes "Windows standalone builds for 3D Viewer $ReleaseTag." `
  $SetupExe $PortableExe

Set-Location $WebsitePath
(Get-Content src/viewerAppMeta.ts -Raw) `
  -replace 'GITHUB_VIEWER_REPO_PUBLISHED = false', 'GITHUB_VIEWER_REPO_PUBLISHED = true' `
  -replace 'GITHUB_VIEWER_RELEASE_PUBLISHED = false', 'GITHUB_VIEWER_RELEASE_PUBLISHED = true' |
  Set-Content src/viewerAppMeta.ts -NoNewline

$env:GIT_AUTHOR_NAME = 'basic-user-iom'
$env:GIT_AUTHOR_EMAIL = 'basic-user-iom@users.noreply.github.com'
$env:GIT_COMMITTER_NAME = 'basic-user-iom'
$env:GIT_COMMITTER_EMAIL = 'basic-user-iom@users.noreply.github.com'
git add src/viewerAppMeta.ts
git commit -m "Enable viewer GitHub repo and v3.19 release links."
git push origin master:main

Write-Host 'Deploying to Vercel production...'
npx vercel deploy --prod --yes

Write-Host ''
Write-Host "Done."
Write-Host "Viewer: https://github.com/$ViewerRepo"
Write-Host "Release: https://github.com/$ViewerRepo/releases/tag/$ReleaseTag"
