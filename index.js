module.exports = {
  "extends": [
    "airbnb-typescript/base",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "jest",
    "react", 
    "react-hooks",
    "prettier",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
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
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "import/prefer-default-export": 0,
    "prefer-destructuring": 1,
    "no-await-in-loop": 0,
    "consistent-return": 1,
    "arrow-parens": ["error", "as-needed"],
    // "arrow-parens": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "semi": "off",
    "@typescript-eslint/semi": [2, "never"],
    "no-console": 0,
    "class-methods-use-this": 0,
    "generator-star-spacing": 0,
    "object-curly-newline": "off",
    "operator-linebreak": 0,
    "no-lonely-if":0,
    "max-len": [
      2,
      {
        "code": 600
      }
    ],
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "quotes": [
      "error",
      "single",
      { "avoidEscape": true }
    ],
    "implicit-arrow-linebreak":"off",
    "nonblock-statement-body-position": ["error", "beside"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "no-multi-spaces": "error",
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "comma-dangle": ["error", "always-multiline"],
    "no-extra-semi": "off",
    "prettier/prettier": "error",
    "import/no-mutable-exports": 0,
    "import/no-cycle": 0,
    "import/no-extraneous-dependencies": 0,
    "no-unused-vars": 0,
    "no-undef": 0,
    "no-param-reassign": 0,
    "no-underscore-dangle": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-extra-semi": 0,
    "lines-between-class-members": 0,
    "jest/no-export": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-access-state-in-setstate": 0,
    "react/no-unused-state": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/sort-comp": 0,
    "react/no-array-index-key": 0,
    "react/jsx-closing-tag-location": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "sx-a11y/alt-text": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
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
