#! /usr/bin/env node

const { program } = require('commander')

const myhelp = require('../lib/core/help')
const mycommander = require('../lib/core/mycommander')

// help option
myhelp(program)
// 命令
mycommander(program)

program.parse(process.argv)
