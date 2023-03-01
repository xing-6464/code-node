#! /usr/bin/env node

const { program } = require('commander')

program.option('-f --framwork <framwork>', '设置框架')
program
  .command('create <project> [other...]')
  .alias('crt')
  .description('创建项目')
  .action((project, args) => {
    // 命令行执行代码
    console.info(project)
    console.info(args)
  })

program.parse(process.argv)
