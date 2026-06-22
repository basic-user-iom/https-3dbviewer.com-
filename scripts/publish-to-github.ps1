# Run after: gh auth login
# Creates GitHub repos, pushes source, uploads Windows release assets, connects Vercel to GitHub.

$ErrorActionPreference = 'Stop'
$Owner = 'mirjan'
$WebsitePath = 'C:\Users\Mirjan\Desktop\webpage-3dviewer'
$ViewerPath = 'F:\3d-viever-backup\v3.18'
$ReleaseTag = 'v3.18'
$SetupExe = 'F:\3d-viever-backup\v3.18\dist\desktop-build\3D-Viewer-Setup-3.7.0-x64.exe'
$PortableExe = 'F:\3d-viever-backup\v3.18\dist\desktop-build\3D-Viewer-Portable-3.7.0-x64.exe'

gh auth status

# Website repository
Set-Location $WebsitePath
if (-not (git remote get-url origin 2>$null)) {
  gh repo create "$Owner/3d-viewer-website" --public --source=. --remote=origin --push
} else {
  git push -u origin master
}

# Viewer repository (source only; binaries go to Releases)
Set-Location $ViewerPath
if (-not (git remote get-url origin 2>$null)) {
  gh repo create "$Owner/3d-viewer" --public --source=. --remote=origin --push
} else {
  git push -u origin master
}

# Windows release assets (~590 MB each)
gh release create $ReleaseTag `
  --repo "$Owner/3d-viewer" `
  --title "3D Viewer $ReleaseTag" `
  --notes "Windows standalone builds for 3D Viewer $ReleaseTag. Install with Setup or run the Portable exe." `
  $SetupExe $PortableExe

# Optional: connect Vercel auto-deploy from GitHub
Set-Location $WebsitePath
npx vercel git connect

Write-Host "Done. Website: https://github.com/$Owner/3d-viewer-website"
Write-Host "Viewer: https://github.com/$Owner/3d-viewer/releases/tag/$ReleaseTag"
