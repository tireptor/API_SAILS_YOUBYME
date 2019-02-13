/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/


  '/': { view: 'pages/homepage' },
  'post /user/login' : 'UserController.login',                                    	// Authentification à l'application
  'get /user/token': 'UserController.token',									  	// Recuperation d'un nouveau token
  'get /user/currentSession': 'UserController.currentSession',       				// Session en cours									
  'post /user/addUser': 'UserController.addUser',  									
  'get /user/updateUser/:idUser/:nom/:prenom/:email/:groupe/:password?': 'UserController.updateUser',
   
  'get /promo/getAll': 'PromoController.getAll',						  		// Récupère toutes les personnes par promo
  'get /promo/pilot/:idPromo' : 'PromoController.getAllPilot',
  'get /promo/pilot/bycodeAnalytique/:codeAnalytique' : 'PromoController.getPilotByCodeAnalytique',
  
  'get /user/count/softskill/:idSoftSkill/:idUser': 'VoteController.countVoteByIdSoftSkill',
  'get /user/count/topSoftSkill/:idUser/:numberTop': 'VoteController.TopSkillByIdUser',
  'get /vote/getAllVoteByIdSession/:id': 'VoteController.tracaVoteWhereIdPeriode',
  'get /vote/checkIfUserVoted/:idUserVoting/:idUserVoted/:idSessionVote': 'VoteController.checkIfUserVoted', 
  'get /vote/gatherAllVoteFromSession/:idSession': 'VoteController.gatherAllVoteFromSession',
  
  'get /vote/voteUser/:idPeriode/:idPersVotant/:idPersVote/:idSoftSkill': 'SoftskillController.addVoteSoftSkill',
  'post /validation/addValidationSoftSkill': 'ValidationController.addValidationSoftSkill',
  
  'get /softskill/create/:idCategorie/:nomSoftSkill/:nomBadge/:cheminBadge': 'SoftskillController.createSoftSkill',
   
                  
  'get /vote/getAllSessionVoteWhereIdPilote/:id': 'SessionVoteController.allSessionVoteWhereIdPilote',//id d'un pilote en paramètre
   
  'get /groupe/all': 'GroupeController.getAllGroupes',                         // Récupère tous les groupes existants en base de données
  
  '/import': 'ImportController.ImportCSV',
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
};
