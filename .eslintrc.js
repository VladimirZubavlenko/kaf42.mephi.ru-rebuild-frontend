module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'react-app', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'error',
    'no-shadow': 'off',
    'no-param-reassign': 'warn',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', '.ts', '.js'] }],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    "import/no-unresolved": "off"
  },
  settings: {
    'import/resolver': {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
};
