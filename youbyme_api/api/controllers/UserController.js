/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login: async function(req, res){
        var user = await User.find({nom:'Leboucq'});
        return res.send(user);
    },
	
	addUser: async function(req, res){
        var userCreated = await User.create({ groupe: 1, nom: 'yolo6', prenom: 'swag6', email: 'yolo6swag6@gmail.com' }).fetch();
        var tmpLog =  'yolo6\'s id is:' + userCreated.id;   // retourne un log dans le navigateur
        sails.log('yolo6\'s id is:', userCreated.id);       // retourne un log dans la console
        
        return res.send(tmpLog);
    },
    
    addUserWithParameters: async function(req, res){
        var parameterNom = req.param('nom');
        var parameterPrenom = req.param('prenom');
        var parameterEmail = req.param('email');
        var parameterGroupe = req.param('groupe');
        var parameterPassword = req.param('password')

        if (parameterPassword == null )
        {
            parameterPassword = '1234';
        }

        var userCreated = await User.create({ groupe: parameterGroupe, nom: parameterNom, prenom: parameterPrenom, email: parameterEmail, password: parameterPassword }).fetch();
        var tmpLog =  parameterNom + 'id is:' + userCreated.id;   // retourne un log dans le navigateur
        sails.log(parameterNom + ' id is:', userCreated.id);       // retourne un log dans la console
        
        return res.send(tmpLog);
	},
}