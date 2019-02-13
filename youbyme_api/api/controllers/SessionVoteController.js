/**
 * SessionVoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  allSessionVoteWhereIdPilote: async function(req, res){
    var userId = req.param('id');
    var sessionVote = await SessionVote.find({
          where: {idPilote:req.param('id')},
          select:['id','codeAnalytique', 'idPilote','dateDebut','dateFin'],
      })
      return res.send(sessionVote);
  },

};
