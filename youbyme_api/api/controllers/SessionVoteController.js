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
  allSessionWithUsersVoteWherePromo: async function(req, res){
    var promo = req.param('codeAnalytique');
    //
    var requestSessionVoteWherePromo = await sails.sendNativeQuery(
      'SELECT nom_t_personne, prenom_t_personne, email_t_personne, t_personne.id_t_personne, photo, t_periode_vote.date_debut, t_periode_vote.date_fin, t_periode_vote.id_periode ' +
      'FROM t_personne, t_assoc_promo_personne, t_periode_vote ' +
      'WHERE t_assoc_promo_personne.code_analytique = \'' + promo + '\'' + 
      'AND t_assoc_promo_personne.id_t_personne = t_personne.id_t_personne');
  
    sails.log(requestSessionVoteWherePromo);     // retourne un log dans la console

    return res.ok(requestSessionVoteWherePromo.rows);
    //
  },

  allSessionWithPilotVoteWherePromo: async function(req, res){
    var promo = req.param('codeAnalytique');
    //
    var requestSessionVoteWherePromo = await sails.sendNativeQuery(
      'SELECT nom_t_personne, prenom_t_personne, email_t_personne, t_personne.id_t_personne, photo, t_periode_vote.date_debut, t_periode_vote.date_fin, t_periode_vote.id_periode ' +
      'FROM t_personne, t_periode_vote ' +
      'WHERE t_periode_vote.id_t_personne = t_personne.id_t_personne AND t_periode_vote.code_analytique = \'' + promo + '\'' );
  
    sails.log(requestSessionVoteWherePromo);     // retourne un log dans la console

    return res.ok(requestSessionVoteWherePromo.rows);
    //
  },

  allSessionActiveWithPilotVoteWherePromo: async function(req, res){
    var promo = req.param('codeAnalytique');
    var dateToday = getDateToday();
    //
    var requestSessionVoteWherePromo = await sails.sendNativeQuery(
      'SELECT nom_t_personne, prenom_t_personne, email_t_personne, t_personne.id_t_personne, photo, t_periode_vote.date_debut, t_periode_vote.date_fin, t_periode_vote.id_periode ' +
      'FROM t_personne, t_periode_vote ' +
      'WHERE t_periode_vote.id_t_personne = t_personne.id_t_personne AND t_periode_vote.code_analytique = \'' + promo + '\' AND t_periode_vote.date_fin >= \''+dateToday+'\' AND t_periode_vote.date_debut <= \''+dateToday+'\'');
  
    sails.log(requestSessionVoteWherePromo);     // retourne un log dans la console

    return res.ok(requestSessionVoteWherePromo.rows);
    //
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
  }
  
};

function getDateToday() {
	var myDate = new Date();
	var dateValid = (myDate.getFullYear()) + '-' + (myDate.getMonth() + 1) + '-' + (myDate.getDate());
  return dateValid;
}