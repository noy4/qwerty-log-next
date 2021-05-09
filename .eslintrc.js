module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
