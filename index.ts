import * as fs from 'fs';

import type { Parser } from 'freemarker-parser';
import type { IToken } from 'freemarker-parser/types/interface/Tokens';

type TokenizeOptions = {
  parser: Parser;
};

type PrintTokensOptions = {
  output: 'json' | 'ltsv';
};

export function tokenize(file: string, options: TokenizeOptions): IToken[] {
  const { parser } = options;

  return parser.parse(fs.readFileSync(file, 'utf8')).tokens;
}

export function printTokens(
  tokens: IToken[],
  options: PrintTokensOptions
): void {
  const { output } = options;

  switch (output) {
    case 'json':
      {
        const json = JSON.stringify(
          tokens.map((token) => ({
            type: token.type,
            text: token.text,
            params: token.params
          })),
          (key, value) => (value === undefined ? '' : value)
        );

        process.stdout.write(`{"tokens":${json}}`);
      }
      break;
    case 'ltsv':
      {
        for (const token of tokens) {
          console.log(
            'type:%s\ttext:%s\tparams:%s',
            token.type,
            JSON.stringify(token.text).slice(1, -1),
            token.params || ''
          );
        }
      }
      break;
    default: {
      const _: never = output;
      console.error(`${_} is unknown output type`);
    }
  }
}
