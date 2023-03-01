const mycommander = function (program) {
  program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建项目')
    .action((project, args) => {
      // 命令行执行代码
      console.info(project)
      console.info(args)
    })
}

module.exports = mycommander
