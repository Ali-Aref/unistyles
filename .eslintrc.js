module.exports = {
  root: true,
  extends: [
    "expo",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-native", "@typescript-eslint", "import"],
  rules: {
    // Custom rules
    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "warn",
    "react-native/no-single-element-style-arrays": "warn",
    "react-native/no-raw-text": "off",
     "react-native/no-inline-styles": "off",
    "react/react-in-jsx-scope": "off",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "linebreak-style": ["error", "unix"],
    "react/jsx-curly-brace-presence": [ "error", { props: "never", children: "never" }, ],
    "react/prop-types": "off",
    "react-native/no-color-literals": "off",
    "import/order": [
      "error",
      {
        groups: [ "builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
  settings: {
    react: { version: "detect" },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
        alwaysTryTypes: true
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './'],
      },
    },
  },
  env: {
    "react-native/react-native": true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: "./tsconfig.json",
  },
};
