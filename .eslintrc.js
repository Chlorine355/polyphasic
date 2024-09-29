module.exports = { 
    plugins: ['react', 'react-native'], 
    env: { 'react-native/react-native': true, 
        "es6": true }, 
    extensions: ["prettier", "prettier/react"],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-native/all'], 
"parserOptions": {
        "sourceType": "module"
    }};

    