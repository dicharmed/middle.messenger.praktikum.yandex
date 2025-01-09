import globals from 'globals'
import js from '@eslint/js'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import prettierConfig from './prettier.config.js'

export default [
  {
    files: ['**/*.js', '**/*.jsx']
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  js.configs.recommended,
  prettierRecommended,
  {
    rules: {
      'no-console': 'warn',
      'prettier/prettier': ['warn', prettierConfig]
    }
  }
]
