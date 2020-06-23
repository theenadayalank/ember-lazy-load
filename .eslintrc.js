'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'camelcase': 'off',
    'func-call-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'no-console': 'off',
    'no-alert': 'error',
    'eqeqeq': ['error', 'always'],
    'no-eval': 'error',
    'no-caller': 'error',
    'no-undef': 'error',
    'no-eq-null': 'error',
    'no-useless-escape': 'off',
    'no-extra-parens': 'off',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'space-before-function-paren': ['error', 'never'],
    'semi': 'error',
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'no-restricted-imports': ['error', 'lockr'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'space-before-blocks': 'error',
    'space-in-parens': ['error', 'never'],
    'object-shorthand': ['error', 'always', { 'avoidQuotes': true }]
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      }
    }
  ]
};
