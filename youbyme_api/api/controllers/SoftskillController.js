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
				
        var tracaVoteCreated = await TracaVote.create({ periode: idPeriode, personneVotante: idUserVoting, personneRecevante: idUserVoted, softskill: idSoftSkill, dateVote: dateToday }).fetch();
        var tmpLog = 'id is:' + tracaVoteCreated.id;   // retourne un log dans le navigateur
        sails.log('id is:', tracaVoteCreated.id);       // retourne un log dans la console
        
        return res.send(tmpLog);
    },
	
	addValidateSoftSkill: async function(req, res){
		var dateToday = getDateToday();
		
		var idSoftSkill = req.param('idSoftSkill');
		var idEleve = req.param('idEleve');
		var idValidePar = req.param('idValidePar');
		var dateValidation = getDateToday();
				
        var tracaVoteCreated = await TracaVote.create({ periode: idPeriode, personneVotante: idUserVoting, personneRecevante: idUserVoted, softskill: idSoftSkill, dateVote: '12-02-2019' }).fetch();
        var tmpLog = 'id is:' + tracaVoteCreated.id;   // retourne un log dans le navigateur
        sails.log('id is:', tracaVoteCreated.id);       // retourne un log dans la console
        
        return res.send(tmpLog);
    }
};

function getDateToday() {
	var myDate = new Date();
	var dateValid = (myDate.getFullYear()) + '-' + (myDate.getMonth() + 1) + '-' + (myDate.getDate());
  return dateValid;
}

