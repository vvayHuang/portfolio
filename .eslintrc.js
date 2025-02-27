module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended", // 若使用 Vue，加入此規則
    "prettier" // 確保 ESLint 不會與 Prettier 衝突
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error", // 讓 Prettier 的錯誤顯示在 ESLint 中
    "no-multiple-empty-lines": ["error", { "max": 1 }], // 限制最多一行空行
    "no-trailing-spaces": "error", // 移除行尾多餘的空格
    "indent": ["error", 2], // 縮排 2 格
    "max-len": ["error", { "code": 80 }], // 每行最多 80 字元，自動換行
  }
};
