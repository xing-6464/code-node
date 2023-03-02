const download = require('download-git-repo')
// 命令行等待提示交互
const ora = require('ora')
// 命令行代颜色输出
const chalk = require('chalk')

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
        console.info(chalk.blue.bold('Done! you run:'))
        console.info(chalk.green.bold('cd ' + project))
        console.info(chalk.red.bold('npm i'))
        console.info(chalk.yellow.bold('npm run dev'))
      } else {
        spinner.fail('代码下载失败')
      }
    }
  )
}

module.exports = downloadFun
