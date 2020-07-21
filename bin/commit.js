#! /usr/bin/env node
var shell = require("shelljs")
shell.exec("git init && git add -A . && git commit -a -m 'gh-pages update'")
// console.log("console.log output")