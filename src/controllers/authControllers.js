const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { email, password } = req.body;

  if (email === "test@test.com" && password === "123456") {
    const token = jwt.sign({ email }, "SECRET_KEY");
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
};

module.exports = { login };