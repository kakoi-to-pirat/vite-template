module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    '@feature-sliced',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', '@tanstack/query'],
  rules: {
    'no-var': 'error',
    'prefer-const': 'warn',
    'no-console': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'import/order': [
      2,
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: `^react/?(*){,/**}`,
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: `@/?(*){,/**}`,
            group: 'external',
            position: 'after',
          },
          {
            pattern: `./?(*){,/**}`,
            group: 'internal',
            position: 'before',
          },
          {
            pattern: `/?(*){,/**}`,
            group: 'internal',
            position: 'after',
          },
          {
            pattern: `classnames`,
            group: 'parent',
            position: 'after',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroupsExcludedImportTypes: ['css'],
        'newlines-between': 'always',
      },
    ],
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/stable-query-client': 'error',
  },
};
