// eslint.config.mjs
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // ESLint 標準の推奨設定
  js.configs.recommended,

  // TypeScript ESLint プラグインの推奨設定（スプレッド不要）
  tsPlugin.configs.recommended,

  // あなた独自の上書きルール
  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/dist/**', '**/out/**'],
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'prettier/prettier': 'warn',
    },
  },
];
