module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 4],
    "semi-style": ["error", "last"],
    "comma-spacing": ["error", { before: false, after: true }],
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
    "import/extensions": ["never" | "always" | "ignorePackages"],
    "enforceForClassFields": false
  },
};