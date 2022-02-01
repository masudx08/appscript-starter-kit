const fs = require('fs')
const path = require('path')

const clientSrc = path.resolve('dist','web.html')
const clientDest = path.resolve('appscript','web.html')
const serverSrc = path.resolve('server','index.ts')
const serverDest = path.resolve('appscript','index.ts')
const distPath = path.resolve('dist')

fs.copyFileSync(clientSrc, clientDest)
fs.copyFileSync(serverSrc, serverDest)
 
fs.rmdirSync(distPath, {recursive: true})