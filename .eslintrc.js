module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "extends": [
      "prettier",
      "prettier/react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaVersion": 9,
      "ecmaFeatures": {
          "impliedStrict": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "arrow-body-style": [
          "error",
          "as-needed"
      ],
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "jsx-quotes": [
          "error",
          "prefer-single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-console": 0,
      "prettier/prettier": [
          "error",
          {
              "trailingComma": "es5",
              "singleQuote": true,
              "printWidth": 120,
          }
      ]
  },
  "plugins": [
      // "html",
      "prettier"
  ]
};