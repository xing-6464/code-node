const download = require('download-git-repo')
const ora = require('ora')

const downloadFun = (url, project) => {
  const spinner = ora().start()

  spinner.text = '代码正在下载......'

  download(
    url,
    project,
    {
      clone: true,
    },
    (err) => {
      if (!err) {
        spinner.succeed('代码下载成功')
        console.info('Done! you run:')
        console.info('cd ' + project)
        console.info('npm i')
        console.info('npm run dev')
      } else {
        spinner.fail('代码下载失败')
      }
    }
  )
}

module.exports = downloadFun
