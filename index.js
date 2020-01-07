module.exports = {
  "extends": [
    "airbnb-typescript/base",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "prettier",
    "jest",
    "react", 
    "react-hooks"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
    "sourceType": "module" // Allows for the use of imports
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "overrides": [
    {
      "files": ["*.test.*"],
      "rules": {
        "no-undefined": "off"
      }
    }
  ],
  "rules": {
    "no-underscore-dangle": "off",
    "prettier/prettier": "error",
    "object-curly-newline": "off",
    // "no-unused-vars": "off",
    "no-continue": "off",
    "max-len": [
      2,
      {
        "code": 600
      }
    ],
    "comma-dangle": ["error", "always-multiline"],
    // "no-param-reassign": 0,
    "import/prefer-default-export": "off",
    // "prefer-destructuring": 0,
    "camelcase": 0,
    // "array-callback-return": 0,
    "quotes": ["error", "single"],
    "semi": "off",
    "@typescript-eslint/semi": [2, "never"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "jsx-quotes": [ "error", "prefer-single" ],
  },
  "globals": {
    "Web3": false
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
}
