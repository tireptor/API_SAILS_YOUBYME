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
      /**
      var softSkillName = await SoftSkill.find({
        where: {id:vote.idSoft},
        select:['id','nom'],
      })
       
      var nbVote = vote.length; 

      for(var i= 0; i < nbVote; i++)
        {
            return res.json(vote[i].idSoft);
        }   

      var mesValeurs = vote[0].idSoft+''+vote[1].idSoft+vote[2].idSoft;
      return res.json(mesValeurs)
      */
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
  
	checkIfUserVoted: async function(req, res){
	  var idUserVoting = req.param('idUserVoting');
	  var idUserVotedFor = req.param('idUserVoted');
	  var idSessionVote = req.param('idSessionVote');
      var voted = await Vote.count({personne_votante:idUserVoting, personne_recevante:idUserVotedFor, periode:idSessionVote});
	  var tmpLog = 'There is:' + voted + ' vote';   // retourne un log dans le navigateur
        sails.log('There is:' + voted + ' vote');     // retourne un log dans la console
        
        return res.send(tmpLog);
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
