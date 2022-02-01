const fs = require('fs')
const path = require('path')

const clientSrc = path.resolve('dist','web.html')
const clientDest = path.resolve('appscript','web.html')
const serverSrc = path.resolve('server','index.js')
const serverDest = path.resolve('appscript','index.js')
const distPath = path.resolve('dist')

fs.copyFileSync(clientSrc, clientDest)
fs.copyFileSync(serverSrc, serverDest)
 
fs.rmSync(distPath, {recursive: true})