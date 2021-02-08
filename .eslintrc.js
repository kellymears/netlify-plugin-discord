module.exports = {
  parser: 'babel-eslint',
  plugins: ['node', 'promise', 'prettier'],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  extends: ['eslint:recommended'],
}
