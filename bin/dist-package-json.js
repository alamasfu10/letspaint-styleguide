#!/usr/bin/env node
/* eslint-disable no-console */

// This script syncs the version in the package.json found in the dist folder
// with the package.json in the root of this project.

const childProcess = require('child_process');
const path = require('path');
const minimist = require('minimist');

const exec = childProcess.exec;

const argv = minimist(process.argv);
const distDirectory = argv._.pop();
const npmPackageDirectory = argv._.pop();

const cdPath = path.resolve(process.cwd(), distDirectory);
const packageJsonPath = path.resolve(process.cwd(), npmPackageDirectory, 'package.json');

const packageJson = require(packageJsonPath);

const cmd = [
  '',
  'cd ' + cdPath + ' &&',
  'npm --no-git-tag-version version ' + packageJson.version
].join('\n');

console.log('Write version ' + packageJson.version + ' to package.json in ' + cdPath);

const child = exec(cmd, {maxBuffer: 1024 * 1000}, (error) => {
  if (error) {
    throw error;
  }
});

child.stderr.pipe(process.stderr);
child.stdout.pipe(process.stdout);
