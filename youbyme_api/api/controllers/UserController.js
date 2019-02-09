/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login: async function(req, res) {

        var mesgAuthError   = "Email ou mot de passe erroné !";
        var mesgAutSuccess  = "Connexion réussie !";
        // Authentication code here
        var user = await User.find({
            where: {email:req.param('email'),password:req.param('password')},
            select:['id'],
        })
        // Si on a un select vide alors cela veut dire que l'utilisateur n'a pas saisie correctement ses informations d'authentification
        if (user == '')
        {
            return res.send(mesgAuthError);
        }
        // If successfully authenticated
        req.session.userId = user[0].id; 
        mesgAutSuccess = mesgAutSuccess + " Id de connexion : " + user[0].id;
        return res.json(mesgAutSuccess);
    
      },
      disconnect: async function(req, res) {
        req.session.userId = undefined;
        return res.json(req.session.userId);
    
      },
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
    
    addUserWithParameters: async function(req, res){
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
    updateUserWithParameters: async function(req, res)
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
