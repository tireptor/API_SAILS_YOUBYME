/**
 * SoftskillController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	addVoteSoftSkill: async function(req, res){
		var idPeriode = req.param('idPeriode');
		var idUserVoting = req.param('idPersVotant');
		var idUserVoted = req.param('idPersVote');
		var idSoftSkill = req.param('idSoftSkill');
		
		
        var tracaVoteCreated = await TracaVote.create({ periode: idPeriode, personneVotante: idUserVoting, personneRecevante: idUserVoted, softskill: idSoftSkill, dateVote: '12-02-2019' }).fetch();
        var tmpLog = 'id is:' + tracaVoteCreated.id;   // retourne un log dans le navigateur
        sails.log('id is:', tracaVoteCreated.id);       // retourne un log dans la console
        
        return res.send(tmpLog);
    }
};

