const Readability = require('readability');
const JSDOM = require('jsdom').JSDOM;
const readline = require('readline');

const rl = readline.createInterface(process.stdin);

rl.on('line', (input) => {
    const doc = new JSDOM(input);
    const reader = new Readability(doc.window.document);
    const article = reader.parse();
    console.log(JSON.stringify(article));
});
