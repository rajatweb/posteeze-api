module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript/eslint-plugin",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommend"
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {}
}