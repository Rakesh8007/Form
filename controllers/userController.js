const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.submission = async (req, res) => {
  const { fullName, email, password } = req.body;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      const user = await User.create({
        fullName,
        email,
        password: hash,
      });
    });
  });

  res.send("<h1>Your Details have been submitted</h1>");
};
