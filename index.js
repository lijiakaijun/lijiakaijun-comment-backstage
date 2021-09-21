const Application = require('@waline/vercel');

module.exports = Application({
  forbiddenWords: ['网站每日ip 1千，', '台湾独立', '香港独立', '退党', '三退', '九评', 'falun', '法轮', '明慧', 'minghui', '新唐人', 'ntdtv', 'ndtv', '真善忍', '六四', '六 四'. '八九', '坦克人', '开户籍', '快递空包', '环酱'],
  async postSave(comment) {
    // do what ever you want after save comment
  },
});
