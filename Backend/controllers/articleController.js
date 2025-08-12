const Article = require("../models/Article");

exports.getAllArticles = async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.json(articles);
};

exports.getArticleById = async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
};

exports.createArticle = async (req, res) => {
  const newArticle = new Article(req.body);
  await newArticle.save();
  res.json(newArticle);
};

exports.updateArticle = async (req, res) => {
  const updated = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteArticle = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
