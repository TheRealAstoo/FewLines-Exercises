const articles = require("./data/products");

module.exports = function initShop() {
  return {
    articles,
    checkQuantity: function (article, wantedQuantity) {
      return article.quantity >= wantedQuantity;
    },
    getArticles: function () {
      return this.articles;
    },
    buyArticle: function (index) {
      return this.articles[index];
    },
    searchArticles: function () {
      // 👉 code here
    },
  };
};
