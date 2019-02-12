/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
module.exports = {     

     login: function(req, res) {
        if (!req.param('email') || !req.param('password')) {
          return res.serverError("No field should be empty.");
        }
    
        User.findOne({
          email: req.param('email')
        }).exec(function callback(err, user) {
          if (err) return res.serverError(err);
          if (!user) return res.serverError("User not found, please sign up.");
    
          // check password
          bcrypt.compare(req.param('password'), user.password, function(error, matched) {
            if (error) return res.serverError(error);
            if (!matched) return res.serverError("Invalid password.");
    
            user.token = jwt.sign(user.toJSON(), "votre clé secrète ici", {
              expiresIn: '7d'
            });
    
            res.ok(user);
          });
    
        });
      },
      token: function(req, res) {
        User.findOne(req.user.id).exec(function callback(error, user) {
          if (error) return res.serverError(error);
          if (!user) return res.serverError("User not found");
    
          user.token = jwt.sign(user.toJSON(), "secretKey", {
            expiresIn: '7d'
          });
          res.ok(user);
        });
      },

      ///******************************************************* */
      // retourne la session en cours
      currentSession: async function(req, res) {
        return res.json(req.session.userId);
      },
	
      addUser: async function(req, res){
        var userCreated = await User.create({ groupe: 1, nom: 'yolo6', prenom: 'swag6', email: 'yolo6swag6@gmail.com' }).fetch();
        var tmpLog =  'yolo6\'s id is:' + userCreated.id;   // retourne un log dans le navigateur
        sails.log('yolo6\'s id is:', userCreated.id);       // retourne un log dans la console
        
        return res.send(tmpLog);
    },
    
    addUser: async function(req, res){
        var parameterNom        = req.param('nom');
        var parameterPrenom     = req.param('prenom');
        var parameterEmail      = req.param('email');
        var parameterGroupe     = req.param('groupe');
        var parameterPassword   = req.param('password')

        if (parameterPassword == null )
        {
            parameterPassword = '1234';
        }
        var userCreated = await User.create({ groupe: parameterGroupe, nom: parameterNom, prenom: parameterPrenom, email: parameterEmail, password: parameterPassword }).fetch();
        var tmpLog      =  parameterNom + 'id is:' + userCreated.id;    // retourne un log dans le navigateur
        sails.log(parameterNom + ' id is:', userCreated.id);            // retourne un log dans la console
        
        return res.send(tmpLog);
    },
    updateUser: async function(req, res)
    {
        var paramIdUser     = req.param('idUser');
        var paramNom        = req.param('nom');
        var paramPrenom     = req.param('prenom');
        var paramEmail      = req.param('email');
        var paramGroupe     = req.param('groupe');
        var paramPassword   = req.param('password');

        
        await User.update({id:paramIdUser }).set({
            groupe: paramGroupe, 
            nom: paramNom, 
            prenom: paramPrenom, 
            email: paramEmail, 
            password: paramPassword
          });
        return res.send("UPDATE !");
    }
}
