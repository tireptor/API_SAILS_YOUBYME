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
        if (user.groupe == 2){
            next();
        }
        else
        {
            return res.forbidden("Error");
        }
        
      });

    });

  } else {
    sails.log("Log 2 : erreur"); 
    return res.forbidden("No token provided");
  }
};