const About = require("../models/About");

exports.getAbout = async (req, res) => {
  const data = await About.findOne();
  res.json(data);
};

exports.updateAbout = async (req, res) => {
  const data = await About.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(data);
};

exports.create = async (req, res) => {
  const newAbout = new About(req.body);
  await newAbout.save();
  res.json(newAbout);
};