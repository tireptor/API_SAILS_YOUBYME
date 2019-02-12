/**
 * TracaVoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  countVoteByIdSoftSkill: async function(req, res){
		
		var idSoftSkill = req.param('idSoftSkill');
		var idUser = req.param('idUser');
				
        var getVoteSoftSkill = await TracaVote.count({ softskill: idSoftSkill, personneRecevante: idUser});
        var tmpLog = 'There is:' + getVoteSoftSkill + ' vote';   // retourne un log dans le navigateur
        sails.log('There is:' + getVoteSoftSkill + ' vote');     // retourne un log dans la console
        
        return res.send(tmpLog);
    },

};

