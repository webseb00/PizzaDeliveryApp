const cookie = require('cookie');

const handleAuth = (req, res, next) => {

  const cookies = cookie.parse(req.headers.cookie || '');
  
  if(cookies.token) { 
    if(cookies.token === process.env.TOKEN) {
      next();
    } else {
      res.status(401).json('Token is invalid!');
    }
  }

  if(!cookies.token) {
    res.status(401).json('Authorization denied! No token provided!');
  }
}

module.exports = handleAuth;