// middleware/requestTimeMiddleware.js
const requestTimeMiddleware = (req, res, next) => {
    req.requestTime = new Date();
    next();
  };
  
  module.exports = requestTimeMiddleware;