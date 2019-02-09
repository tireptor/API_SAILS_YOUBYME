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
  }
};
