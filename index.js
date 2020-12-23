"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTokens = exports.tokenize = void 0;
const fs = require("fs");
function tokenize(file, options) {
    const { parser } = options;
    return parser.parse(fs.readFileSync(file, 'utf8')).tokens;
}
exports.tokenize = tokenize;
function printTokens(tokens, options) {
    const { output } = options;
    switch (output) {
        case 'json':
            {
                const json = JSON.stringify(tokens.map((token) => ({
                    type: token.type,
                    text: token.text,
                    params: token.params
                })), (key, value) => (value === undefined ? '' : value));
                process.stdout.write(`{"tokens":${json}}`);
            }
            break;
        case 'ltsv':
            {
                for (const token of tokens) {
                    console.log('type:%s\ttext:%s\tparams:%s', token.type, JSON.stringify(token.text).slice(1, -1), token.params || '');
                }
            }
            break;
        default: {
            const _ = output;
            console.error(`${_} is unknown output type`);
        }
    }
}
exports.printTokens = printTokens;
//# sourceMappingURL=index.js.map