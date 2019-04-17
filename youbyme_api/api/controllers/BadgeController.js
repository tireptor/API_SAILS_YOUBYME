/**
 * BadgeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    addValidationCategorie: async function(req, res){
		
		var idCategorie = req.param('idCategorie');
		var idEleve = req.param('idEleve');
		var idValidePar = req.param('idValidePar');
		var dateValidation = getDateToday();
		
        var validationCreated = await ValidationSoftSkill.create({ id_t_soft_skill: idSoftSkill, id_eleve: idEleve, id_valide_par: idValidePar, dateValidation: dateValidation }).fetch();
        var tmpLog =  'id is:' + validationCreated.id;   // retourne un log dans le navigateur
        sails.log('id is:', validationCreated.id);       // retourne un log dans la console
        
        return res.send(tmpLog);
    },

};

