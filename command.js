// npm install simple-git

const FOLDER_NAME = 'pwa-starter-qrcode'

const gitClone = async () => {
  const simpleGit = require('simple-git')

  const git = simpleGit()
  await git.clone(
    'https://github.com/hamam99/pwa-starter-qrcode.git',
    FOLDER_NAME
  )
}

const copyAndReplaceConfig = async () => {
  const fs = require('fs')

  const sourcePath = './config.json'
  const destinationPath = `./${FOLDER_NAME}/config.json`

  fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) throw err
  })
}

const main = async () => {
  await gitClone()
  copyAndReplaceConfig()
}

main()
