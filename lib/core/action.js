const inquirer = require('inquirer')

const downloadFun = require('./download')
const config = require('../../config')

const myAction = async (project, args) => {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'framwork',
      choices: config.framwork,
      message: '请选择你所使用的框架',
    },
  ])

  downloadFun(`direct:${config.foramworkUrl[answer.framwork]}`, project)
}

module.exports = myAction
