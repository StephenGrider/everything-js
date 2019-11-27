#!/usr/bin/env node

const Runner = require('./runner');
const runner = new Runner();

const run = async () => {
  await runner.collectFiles(process.cwd());
  runner.runTests();
};

run();
