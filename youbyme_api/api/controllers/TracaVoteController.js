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
	
	TopSkillByIdUser: async function(req, res){
		
		var idUser = req.param('idUser');
		var topNumber = req.param('numberTop');
				
				
        var getVoteSoftSkill = await sails.sendNativeQuery(
									'SELECT id_t_soft_skill, count(*) ' + 
									'FROM t_tracabilite_vote ' +
									'WHERE id_personne_recevante = '+ idUser + ' ' +
									'GROUP BY id_t_soft_skill ' +
									'ORDER BY count(*) DESC ' +
									'LIMIT ' + topNumber);
									
        //var tmpLog = getVoteSoftSkill   // retourne un log dans le navigateur
        sails.log(getVoteSoftSkill);     // retourne un log dans la console
        
        return res.ok(getVoteSoftSkill.rows);
    },

};

