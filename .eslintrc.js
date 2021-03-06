module.exports = {
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "plugins": ["react"],
    "env": {
        "node": true,
        "es6": true,
    },
    "globals": {
        "describe": false,
        "it": false,
        "require": false,
        "expect": false 
    },
    "rules": {
        "array-bracket-spacing": "error",
        "arrow-body-style": "error",
        "camelcase": "warn",
        "curly": "error",
        "eol-last": "error",
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "max-len": ["error", {"code": 140, "tabWidth": 1, "ignoreUrls": false}],
        "no-console": "warn",
        "no-multi-spaces": "warn",
        "no-trailing-spaces": "error",
        "no-undef": "warn",
        "no-undefined": "warn",
        "no-unreachable": "error",
        "no-unused-vars": "warn",
        "no-useless-concat": "warn",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "quotes": ["error", "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
        "space-before-function-paren": ["error", "never"],
        "space-infix-ops": "error",
        "spaced-comment": "error",
        "strict": "warn",
        "semi": ["error", "always", { "omitLastInOneLineBlock": true}],
        "experimentalDecorators": true
    }
};
