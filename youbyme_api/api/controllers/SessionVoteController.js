/**
 * SessionVoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  allSessionVoteWhereIdPilote: async function(req, res){
    var userId = req.param('id');
    if (userId != 1) {
     return res.badRequest('No user ID specified!');   // message d'erreur
   }
      var sessionVote = await SessionVote.find({
          where: {idPilote:req.param('id')},
          select:['id','codeAnalytique', 'idPilote','dateDebut','dateFin'],
      })
      return res.send(sessionVote);
  }

};
