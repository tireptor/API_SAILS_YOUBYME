/**
 * PromoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAll: async function(req, res){
        var promo = await Promo.find({
            select:['nom','nbVote'],
        });
        return res.send(promo);
    },
	getPilotByCodeAnalytique: async function(req, res){
        var codeAnalytique = req.param('codeAnalytique');
				
        var requestPilot = await User.getPilots(codeAnalytique);
        console.log('here');
        // var requestPilot = await sails.sendNativeQuery(
		// 								'SELECT nom_t_personne ' +
		// 								'FROM t_personne ' +
		// 							'INNER JOIN t_assoc_promo_personne ON t_personne.id_t_personne = t_assoc_promo_personne.id_t_personne ' +
		// 						'INNER JOIN t_groupe ON t_groupe.id_t_groupe = t_personne.id_t_groupe ' +
		//  								'WHERE nom_t_groupe = \'pilotes\' AND code_analytique = \'' + codeAnalytique + '\'');
									
        // sails.log(requestPilot);     // retourne un log dans la consolefdsfs
        
        return res.ok(requestPilot.rows);
    },
    
   updateNbVote: async function (req, res){
    await Promo.update({id:req.param('idPromo')}).set({
        nbVote:req.param('nbVote'),
    });
    sails.log("Log Update idPromo : " + req.param('idPromo')+ " nbVote : "+req.param('nbVote'));  
    return res.send('');
},

    getAllStudentInPromo: async function(req, res){
        var codeAnalytique = req.param('codeAnalytique');
        var idUserConnected = req.param('idUser')
        sails.log("avant d'exécuter la requête !" + idUserConnected); 
        var requestPilot = await sails.sendNativeQuery(
                                    'SELECT nom_t_personne, prenom_t_personne, email_t_personne, t_personne.id_t_personne, photo ' +
                                    'FROM t_personne ' +
                                    'INNER JOIN t_assoc_promo_personne ON t_personne.id_t_personne = t_assoc_promo_personne.id_t_personne ' +
                                    'INNER JOIN t_groupe ON t_groupe.id_t_groupe = t_personne.id_t_groupe ' +
                                    'WHERE nom_t_groupe = \'eleves\' AND code_analytique = \'' + codeAnalytique + '\' AND t_personne.id_t_personne != '+idUserConnected);
                                
        sails.log(requestPilot);     // retourne un log dans la console
    
        return res.ok(requestPilot.rows);
    },
    getAllUserInPromo: async function(req, res){
        var codeAnalytique = req.param('codeAnalytique');
            
            
        var requestPilot = await sails.sendNativeQuery(
                                    'SELECT nom_t_personne, prenom_t_personne, email_t_personne, t_personne.id_t_personne, photo, nom_t_groupe ' +
                                    'FROM t_personne ' +
                                    'INNER JOIN t_assoc_promo_personne ON t_personne.id_t_personne = t_assoc_promo_personne.id_t_personne ' +
                                    'INNER JOIN t_groupe ON t_groupe.id_t_groupe = t_personne.id_t_groupe ' +
                                    'WHERE code_analytique = \'' + codeAnalytique + '\'');
                                
        sails.log(requestPilot);     // retourne un log dans la console
    
        return res.ok(requestPilot.rows);
    },

    insertUserInPromo: async function(req, res){
        var codeAnalytique = req.param('codeAnalytique');
        var idPersonne = req.param('idPersonne');
        var userPromoCreate = await UserPromo.create({ promo: codeAnalytique, user: idPersonne}).fetch();
        var tmpLog = 'id is:' + userPromoCreate.id;    // retourne un log dans le navigateur
        tmpLog += ' idUser is : ' + userPromoCreate.user;
        tmpLog += ' promo is : ' + userPromoCreate.promo;
        sails.log('id is:', userPromoCreate.id);            // retourne un log dans la console
        return res.send(tmpLog);
      },
      updatePromoForUser: async function(req, res){
        await UserPromo.update({user:req.param('user'),promo:req.param('oldPromo')}).set({
            promo:req.param('promo'),
        });
        sails.log("Log Update l'ancienne promo : " + req.param('oldPromo')+ " de l'utilisateur "+req.param('user') + " nouvelle promo : " + req.param('promo'));  
        return res.send('Update OK');
    },
};

