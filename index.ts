import * as fs from 'fs';

import { Parser } from 'freemarker-parser';

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
        process.stdout.write('{"tokens":[');

        for (const token of tokens) {
          process.stdout.write(
            JSON.stringify({
              type: token.type,
              text: token.text,
              params: token.params
            })
          );
        }

        process.stdout.write(']}');
      }
      break;
    case 'ltsv':
      {
        for (const token of tokens) {
          console.log(
            'type:%s\ttext:%s\tparams:%s',
            token.type,
            token.text,
            token.params
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
