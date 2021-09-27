const fs = require('fs');
const path = require('path');

const SPILTER = '// -----------------------------COMMENTSAPLITER -----------------------------------';
const sourceTplPath = path.resolve(__dirname, '../src/snippets/template.js');
const targetJSONpath =  path.resolve(__dirname, '../src/snippets/snippet.json');

function main() {
  const snippetsTpl = fs.readFileSync(sourceTplPath);
  const text = snippetsTpl.toString('utf-8').trim();
  const commentArray = text.split(SPILTER);
  const snippetMap = {};
  commentArray.forEach(c => {
    const lines = c.split('\n').filter(i => !!i);
    const firstLine = lines[0];
    const searchParamObj = new URLSearchParams(firstLine.slice(3));
    const prefix = searchParamObj.get('prefix');
    const description = searchParamObj.get('description') || '';
    lines.shift();
    const body = lines;
    console.log('prefix:' + prefix, ' description: ', description);
    if (prefix) {
      snippetMap[prefix] = {
        prefix,
        description,
        body,
      }
    }
  });
  writeJSONFile(snippetMap);
}

function writeJSONFile(obj) {
  fs.unlinkSync(targetJSONpath);
  fs.writeFileSync(
    targetJSONpath,
    JSON.stringify(obj, null, '\t'),
    { encoding: 'utf-8' }
  );
}

main();
