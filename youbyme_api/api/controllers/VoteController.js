/**
 * VoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	tracaVoteWhereIdPeriode: async function(req, res){
      var vote = await Vote.find({
          where: {periode:req.param('id')},
          select:['id','periode','date'],
      }).populate('softskill').populate('personne_votante').populate('personne_recevante');
      return res.send(vote);
  },
  
	countVoteByIdSoftSkill: async function(req, res){
		
		var idSoftSkill = req.param('idSoftSkill');
		var idUser = req.param('idUser');
				
        var getVoteSoftSkill = await Vote.count({ softskill: idSoftSkill, personne_recevante: idUser});
        var tmpLog = 'There is:' + getVoteSoftSkill + ' vote';   // retourne un log dans le navigateur
        sails.log('There is:' + getVoteSoftSkill + ' vote');     // retourne un log dans la console
        
        return res.send(tmpLog);
    },
	
	TopSkillByIdUser: async function(req, res){
		
		var idUser = req.param('idUser');
		var topNumber = req.param('numberTop');
				
				
        var getVoteSoftSkill = await sails.sendNativeQuery(
									'SELECT t_tracabilite_vote.id_t_soft_skill, t_soft_skill.nom_soft_skill, t_soft_skill.nom_badge, t_soft_skill.chemin_badge, count(*) ' + 
									'FROM t_tracabilite_vote, t_soft_skill ' +
									'WHERE id_personne_recevante = '+ idUser + ' AND t_tracabilite_vote.id_t_soft_skill = t_soft_skill.id_t_soft_skill '+
									'GROUP BY t_tracabilite_vote.id_t_soft_skill, t_soft_skill.nom_soft_skill, t_soft_skill.nom_badge, t_soft_skill.chemin_badge ' +
									'ORDER BY count(*) DESC ' +
									'LIMIT ' + topNumber);
									
        //var tmpLog = getVoteSoftSkill   // retourne un log dans le navigateur
        sails.log(getVoteSoftSkill);     // retourne un log dans la console
        
        return res.ok(getVoteSoftSkill.rows);
	},
	softskillByIdUserIdSoft: async function(req, res){
		
		var idUser = req.param('idUser');
		var idSoftskill = req.param('idSoftskill');
				
				
        var getVoteSoftSkill = await sails.sendNativeQuery(
									'SELECT t_tracabilite_vote.id_t_soft_skill, t_soft_skill.nom_soft_skill, t_soft_skill.nom_badge, t_soft_skill.chemin_badge, count(*) ' + 
									'FROM t_tracabilite_vote, t_soft_skill ' +
									'WHERE id_personne_recevante = '+ idUser + ' AND t_tracabilite_vote.id_t_soft_skill = t_soft_skill.id_t_soft_skill AND '+ 
									't_soft_skill.id_t_soft_skill = '+ idSoftskill+' '+
									'GROUP BY t_tracabilite_vote.id_t_soft_skill, t_soft_skill.nom_soft_skill, t_soft_skill.nom_badge, t_soft_skill.chemin_badge ' +
									'ORDER BY count(*) DESC ');
									
        //var tmpLog = getVoteSoftSkill   // retourne un log dans le navigateur
        sails.log(getVoteSoftSkill);     // retourne un log dans la console
        
        return res.ok(getVoteSoftSkill.rows);
	},
  
	checkIfUserVoted: async function(req, res){
	  var idUserVoting = req.param('idUserVoting');
	  var idUserVotedFor = req.param('idUserVoted');
	  var idSessionVote = req.param('idSessionVote');
      var voted = await Vote.count({personne_votante:idUserVoting, personne_recevante:idUserVotedFor, periode:idSessionVote});
	  var tmpLog = 'There is:' + voted + ' vote';   // retourne un log dans le navigateur
        sails.log('There is:' + voted + ' vote');     // retourne un log dans la console
        
        return res.send(voted+'');
	},
	
	checkIfUserVotedForSession: async function(req, res){
		var idUserVoting = req.param('idUserVoting');
		var idUserVotedFor = req.param('idUserVoted');
		var idSessionVote = req.param('idSessionVote');
		var voted = await Vote.count({personne_votante:idUserVoting, personne_recevante:idUserVotedFor, periode:idSessionVote});
		var tmpLog = 'There is:' + voted + ' vote';   // retourne un log dans le navigateur
		  sails.log('There is:' + voted + ' vote');     // retourne un log dans la console
		  
		  return res.send(voted+'');
	  },

	allVoteObtained: async function(req, res){

      var voted = await Vote.find({
			where: {personne_recevante:req.param('idUser')},
			select:['personne_votante','softskill', 'date','periode']
	  }).populate('personne_votante');
	  return res.send(voted);
	},
	
	gatherAllVoteFromSession: async function(req, res){
		var idSession = req.param('idSession');
  
		var voted = await Vote.find({
			  where: {periode:req.param('id')},
			  select:['personne_votante','personne_recevante','softskill', 'date']
		});
		
		  
		return res.send(voted);
	  },
	gatherAllUserVoteFromSession: async function(req, res){

      var voted = await Vote.find({
			where: {periode:req.param('idSession'), personne_recevante:req.param('idUser')},
			select:['personne_votante','personne_recevante','softskill', 'date']
	  });
	         
	  return res.send(voted);
	}
};
