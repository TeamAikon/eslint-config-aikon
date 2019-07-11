module.exports = {
  "extends": ["standard", "eslint:recommended", "plugin:react/recommended"],
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "rules": {
    "indent": 2,
    "arrow-body-style": 1,
    "prefer-destructuring": 1,
    "no-await-in-loop": 1,
    "consistent-return": 1,
    "arrow-parens": [2,"always"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "semi": [2,"always"],
    "no-console": 0,
    "no-new": [0],
    "no-new-func": 1,
    "no-new-object": 1,
    "class-methods-use-this": 0,
    "generator-star-spacing": 0,
    "allowTemplateLiterals": 0,
    "no-unused-vars": 0,
    "no-var": "error",
    "object-curly-newline": 0,
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "operator-linebreak": 0,
    "max-len": 0,
    "no-param-reassign": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "quote-props": ["error", "as-needed"],
    "object-shorthand": ["error", "always"],
    "no-array-constructor": "error",
    "quotes": ["error", "single"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "prefer-arrow-callback": "error",
    "arrow-spacing": "error",
    "implicit-arrow-linebreak": ["error", "beside"],
    "import/no-webpack-loader-syntax":1,
    "no-iterator": "error",
    "no-undef": "error",
    "no-multi-assign": "error",
    "one-var": ["error", "never"],
    "no-nested-ternary": "error",
    "nonblock-statement-body-position": ["error", "beside"],
    "spaced-comment": ["error", "always"],
    "padded-blocks": ["error", "never"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-trailing-spaces": "error",
    "comma-dangle": ["error", "never"],
    "no-new-wrappers": "error",
    "keyword-spacing": ["error", { "before": true }],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "no-multi-spaces": "error"
  },
  "plugins": ["react", "react-hooks"],
  "globals": {
    "Web3": false
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
