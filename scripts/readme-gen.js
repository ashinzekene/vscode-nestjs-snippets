const fs = require('fs');
const path = require('path');

// GET THE CONTENT OF THE TEMPLATE

const README1 = fs.readFileSync(path.join(__dirname + '/README-TEMPLATE1.md')).toString();
const README2 = fs.readFileSync(path.join(__dirname + '/README-TEMPLATE2.md')).toString();

// GET SNIPPETS
const snippetsStr = fs
  .readFileSync(path.join(__dirname + '/..', '/snippets/snippets.json'))
  .toString();
const snippets = JSON.parse(snippetsStr);

// CREATE TABLE FOR SNIPPETS
let TABLE = `Snippet                       |Prefix               | Purpose                                   |`;
const snippetNameLength = 40;
const snippetPrefixLength = 30;
const snippetDescriptionLength = 62;
// CREATE FIRST LINE
const liner =
  '-'.padEnd(snippetNameLength, '-') +
  '| ' +
  '-'.padEnd(snippetPrefixLength, '-') +
  '| ' +
  '-'.padEnd(snippetDescriptionLength, '-') +
  '| ';
TABLE += '\n' + liner;

// APPEND EACH SNIPPET
Object.keys(snippets).forEach(name => {
  const snippet =
    name.padEnd(snippetNameLength) +
    '| ' +
    snippets[name].prefix.padEnd(snippetPrefixLength) +
    '| ' +
    snippets[name].description.padEnd(snippetDescriptionLength) +
    '| ';
  TABLE += '\n' + snippet;
});

TABLE += '\n\n';

// WRITE IT IN
fs.writeFileSync('README.md', README1 + TABLE + README2, 'utf-8');
console.log('>>> Generated Readme!!!');
