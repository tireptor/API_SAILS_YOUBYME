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
  createVoteSession: async function(req, res){
    var codeAnalytique = req.param('codeAnalytique');
	var idPersonne = req.param('idPersonne');
	var dateDebut = req.param('dateDebut');
	var dateFin = req.param('dateFin');
		
    var periodeCreate = await SessionVote.create({ codeAnalytique: codeAnalytique, idPilote: idPersonne, dateDebut: dateDebut, dateFin: dateFin}).fetch();
    var tmpLog = 'id is:' + periodeCreate.id;    // retourne un log dans le navigateur
    sails.log('id is:', periodeCreate.id);            // retourne un log dans la console
    return res.send(tmpLog);
  },
  
  
  
  
  
  
  
 

};
