/** User-facing release for F:\3d-viever-backup\v3.18 (package.json semver is 3.7.0) */
export const VIEWER_APP_VERSION = '3.18'
export const VIEWER_APP_NAME = '3d-test-software'
export const VIEWER_APP_PATH_WIN = 'F:\\3d-viever-backup\\v3.18'
export const VIEWER_APP_PATH_UNIX = 'F:/3d-viever-backup/v3.18'

/** GitHub org/user — https://github.com/basic-user-iom */
export const GITHUB_OWNER = 'basic-user-iom'
export const GITHUB_WEBSITE_REPO = 'https-3dbviewer.com-'
export const GITHUB_VIEWER_REPO = '3d-viewer'
export const GITHUB_VIEWER_RELEASE_TAG = 'v3.18'

export const GITHUB_WEBSITE_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_WEBSITE_REPO}`
export const GITHUB_VIEWER_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_VIEWER_REPO}`
export const GITHUB_VIEWER_RELEASE_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_VIEWER_REPO}/releases/tag/${GITHUB_VIEWER_RELEASE_TAG}`

const viewerReleaseDownloadBase = `https://github.com/${GITHUB_OWNER}/${GITHUB_VIEWER_REPO}/releases/download/${GITHUB_VIEWER_RELEASE_TAG}`

/** electron-builder artifact names (package.json version 3.7.0) */
export const VIEWER_WINDOWS_SETUP_FILENAME = '3D-Viewer-Setup-3.7.0-x64.exe'
export const VIEWER_WINDOWS_PORTABLE_FILENAME = '3D-Viewer-Portable-3.7.0-x64.exe'
export const VIEWER_WINDOWS_SETUP_URL = `${viewerReleaseDownloadBase}/${VIEWER_WINDOWS_SETUP_FILENAME}`
export const VIEWER_WINDOWS_PORTABLE_URL = `${viewerReleaseDownloadBase}/${VIEWER_WINDOWS_PORTABLE_FILENAME}`