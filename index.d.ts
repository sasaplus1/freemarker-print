import type { Parser } from 'freemarker-parser';
import type { IToken } from 'freemarker-parser/types/interface/Tokens';
declare type TokenizeOptions = {
    parser: Parser;
};
declare type PrintTokensOptions = {
    output: 'json' | 'ltsv';
};
export declare function tokenize(file: string, options: TokenizeOptions): IToken[];
export declare function printTokens(tokens: IToken[], options: PrintTokensOptions): void;
export {};
