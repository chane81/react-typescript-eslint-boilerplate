# typescript + react-app + eslint - boilerplate

## 설치

- yarn add -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks

- yarn add -D prettier typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser

## eslint 관련 파일 생성 및 설정

- .eslintrc (eslint 설정들)

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react", "jest", "prettier", "react-hooks", "@typescript-eslint"],
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": ["airbnb", "plugin:react/recommended", "plugin:prettier/recommended", "prettier"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "no-console": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "json": "never"
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/control-has-associated-label": "on",
    "no-plusplus": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars-experimental": "warn",
    "react/js-no-target-blank": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-use-before-define": ["off", { "variables": false }],
    "jsx-quotes": ["error", "prefer-single"]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}
```

- .eslintignore (eslint 를 적용하지 않을 파일 및 폴더 지정)

```json
**/node_modules/*
**/public/*
**/.vscode/*
```

## prettier 관련 설정

- .prettierrc (prettier 설정들)

```json
{
  "singleQuote": true,
  "parser": "typescript",
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 120,
  "arrowParens": "always",
  "jsxSingleQuote": true,
  "overrides": [
    {
      "files": ["*.json", ".*rc"],
      "options": {
        "parser": "json5",
        "quoteProps": "preserve",
        "singleQuote": false,
        "trailingComma": "none"
      }
    }
  ]
}
```

## 에디터 관련 설정

- .vscode > settings.json

```json
{
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javscript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    // For ESLint
    "source.fixAll.eslint": true,
    // For Stylelint
    "source.fixAll.stylelint": true
  }
}
```
