/*
module.exports = async function (req, res, proceed) {

    // If `req.me` is set, then we know that this request originated
    // from a logged-in user.  So we can safely proceed to the next policy--
    // or, if this is the last policy, the relevant action.
    // > For more about where `req.me` comes from, check out this app's
    // > custom hook (`api/hooks/custom/index.js`).
    if (req.session.userId != undefined) {
      return proceed();
    }
  
    //--•
    // Otherwise, this request did not come from a logged-in user.
    return res.forbidden();
  
  };
  */
 var jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  sails.log("Log 1 : "+bearerHeader);  
  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(" ");
    bearerToken = bearer[1];

    if (bearer[0] !== "Bearer") {
      return res.forbidden("bearer not understood");
    }

    // on vérifie si le token est bon
    jwt.verify(bearerToken, "secretKey", function(err, decoded) {
      if (err) {
        sails.log("verification error", err);
        if (err.name === "TokenExpiredError")
          return res.forbidden("Session timed out, please login again");
        else
          return res.forbidden("Error authenticating, please login again");
      }


      User.findOne(decoded.id).exec(function callback(error, user) {
        if (error) return res.serverError(err);
        if (!user) return res.serverError("User not found");

        req.user = user;
        sails.log("Log 3 : OK");  
        next();
      });

    });

  } else {
    sails.log("Log 2 : erreur"); 
    return res.forbidden("No token provided");
  }
};