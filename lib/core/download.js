const download = require('download-git-repo')
const config = require('../../config')

const downloadFun = (url, project) => {
  download(
    url,
    project,
    {
      clone: true,
    },
    (err) => {
      if (err) return
      console.info(err)
    }
  )
}

module.exports = downloadFun
