module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    // 'prettier/@typescript-eslint',
    // 'prettier/babel',
    // 'prettier/flowtype',
    // 'prettier/prettier',
    //  'prettier/react',
    // 'prettier/standard',
    // 'prettier/unicorn',
    // 'prettier/vue',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
  },
};
