module.exports = {
  '*.(js|ts)': 'eslint --cache --ext .js,.ts',
  '*.yml': ['prettier --check --parser yaml'],
  'package.json': [
    'npx fixpack',
    'git diff --exit-code --quiet',
    'prettier --check --parser json-stringify'
  ],
  'package-lock.json': 'node -e "process.exitCode = 1;"'
};
