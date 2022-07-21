module.exports = {
  root: true,
  env: {
    // browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    // 'plugin:vue/vue3-essential',
    // 'airbnb-base',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'vue/multi-word-component-names': 0,
  },
};
