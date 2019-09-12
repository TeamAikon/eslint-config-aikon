module.exports = {
  "extends": ["airbnb", "eslint:recommended"],
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "rules": {
    "indent": ["error", 2],
    "import/prefer-default-export": 0,
    "prefer-destructuring": 1,
    "no-await-in-loop": 0,
    "consistent-return": 1,
    "arrow-parens": [2, "always"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "semi": [2, "always"],
    "no-console": 0,
    "class-methods-use-this": 0,
    "generator-star-spacing": 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "max-len": [
      "error",
      120
    ],
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "quotes": [
      "error",
      "single"
    ],
    "implicit-arrow-linebreak": ["error", "beside"],
    "nonblock-statement-body-position": ["error", "beside"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "no-multi-spaces": "error",
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "react/destructuring-assignment": 0,
  },
  "plugins": ["react", "react-hooks"],
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
