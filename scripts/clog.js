const fs = require('fs');
const path = require('path');

const CHANGELOG = fs.readFileSync(path.join(__dirname, '..', '/CHANGELOG.md')).toString();

rs = CHANGELOG.match(/\/a>[\s\S]*.<a name/m);
console.log(rs);
