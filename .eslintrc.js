module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/order': ['warn', { 'newlines-between': 'always' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    'react/no-direct-mutation-state': 'off',
    'react/no-deprecated': 'off',
    'react/no-string-refs': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/require-render-return': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'newline-before-return': 'warn',
    'prefer-const': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prettier/prettier': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
