module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
