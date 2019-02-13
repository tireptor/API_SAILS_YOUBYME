/**
 * SoftskillController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	addVoteSoftSkill: async function(req, res){
		
		var dateToday = getDateToday();
		
		
		var idPeriode = req.param('idPeriode');
		var idUserVoting = req.param('idPersVotant');
		var idUserVoted = req.param('idPersVote');
		var idSoftSkill = req.param('idSoftSkill');
				
        var tracaVoteCreated = await Vote.create({ periode: idPeriode, personneVotante: idUserVoting, personneRecevante: idUserVoted, softskill: idSoftSkill, date: dateToday }).fetch();
        var tmpLog = 'id is:' + tracaVoteCreated.id;   // retourne un log dans le navigateur
        sails.log('id is:', tracaVoteCreated.id);       // retourne un log dans la console
        
        return res.send(tmpLog);
    },
	
	createSoftSkill: async function(req, res){
		
		var idCategorie = req.param('idCategorie');
		var nomSoftSkill = req.param('nomSoftSkill');
		var nomBadge = req.param('nomBadge');
		var cheminBadge = req.param('cheminBadge');
				
        var skillCreate = await Softskill.create({ idCategorie: idCategorie, nom: nomSoftSkill, nomBadge: nomBadge, cheminBadge: cheminBadge}).fetch();
        var tmpLog = 'id is:' + skillCreate.id;   // retourne un log dans le navigateur
        sails.log('id is:', skillCreate.id);       // retourne un log dans la console
        
        return res.send(tmpLog);
    },
};

function getDateToday() {
	var myDate = new Date();
	var dateValid = (myDate.getFullYear()) + '-' + (myDate.getMonth() + 1) + '-' + (myDate.getDate());
  return dateValid;
}

