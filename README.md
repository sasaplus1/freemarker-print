# freemarker-print

[![Actions Status: test](https://github.com/sasaplus1/freemarker-print/workflows/test/badge.svg)](https://github.com/sasaplus1/freemarker-print/actions?query=workflow%3A"test")

print FreeMarker template tokens

## Install

Install command to global:

```console
$ npm install -g sasaplus1/freemarker-print
$ freemarker-print --help # or ftlp --help
```

or execute directly with npx:

```console
$ npx github:sasaplus1/freemarker-print --help
```

## How to use

Filter with `jq`:

```console
$ freemarker-print -f json index.ftl | jq '.tokens[] | select(.type != "Text")'
```

## License

The MIT license.
