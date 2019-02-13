/**
 * PromoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAll: async function(req, res){
        var promo = await Promo.find({
            select:['nom','nbvote'],
        });
        return res.send(promo);
    },
	getPilotByCodeAnalytique: async function(req, res){
        var codeAnalytique = req.param('codeAnalytique');
				
				
        var requestPilot = await sails.sendNativeQuery(
										'SELECT nom_t_personne ' +
										'FROM t_personne ' +
										'INNER JOIN t_assoc_promo_personne ON t_personne.id_t_personne = t_assoc_promo_personne.id_t_personne ' +
										'INNER JOIN t_groupe ON t_groupe.id_t_groupe = t_personne.id_t_groupe ' +
										'WHERE nom_t_groupe = \'pilotes\' AND code_analytique = \'' + codeAnalytique + '\'');
									
        sails.log(requestPilot);     // retourne un log dans la console
        
        return res.ok(requestPilot.rows);
    },
    /*
    getAllPilot: async function(req, res)
    {
        var promo = await Promo.find({
            where: {id:req.param('id'),groupe:'2'},
            select: ['nom'],
        }).populate('users');
        return res.send(promo);
    }
    */


};

