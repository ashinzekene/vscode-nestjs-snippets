const fs = require('fs');
const path = require('path');

const CHANGELOG = fs.readFileSync(path.join(__dirname, '..', '/CHANGELOG.md')).toString();
const README = fs.readFileSync(path.join(__dirname, '..', '/README.md')).toString();

rs = CHANGELOG.match(/\#\#[\s\S]*.name/);

try {
  newRN = rs[0].split('name')[0].replace('<a', '');
  README.replace(/## [0-9.]+[\s\S]*/, newRN);
  let n = README.replace(/## [0-9.]+[\s\S]*/, newRN);
  fs.writeFileSync(path.join(__dirname, '..', '/README.md'), n)
  console.log('>>> Generated Release note!!!')
} catch (err) {
  console.log('I could not extract the last changelog... Pls work on me ;-(');
}