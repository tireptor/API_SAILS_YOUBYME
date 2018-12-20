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
          select:['id','periode', 'personne_votante','personne_recevante','soft','date'],
      })
      return res.send(vote);
  }
};
