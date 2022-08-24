const cookie = require('cookie');

const loginAdmin = (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  if((login === process.env.ADMIN_LOGIN) && (password === process.env.ADMIN_PASSWORD)) {

    res.setHeader('Set-Cookie', cookie.serialize('token', process.env.TOKEN, {
      maxAge: 60*60,
      path: '/'
    }))

    res.status(200).json('Login successful!');
  } else {
    res.status(400).json("Invalid login or password");
  }
}

const logoutAdmin = (req, res) => {
  res.status(200).clearCookie('token', {
    path: '/'
  })
  res.end();
}

module.exports = {
  loginAdmin,
  logoutAdmin
}