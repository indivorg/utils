module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['@indivorg/eslint-config'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
};
