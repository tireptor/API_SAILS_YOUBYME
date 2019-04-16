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

  '/': { view: 'pages/homepage' },
  'post /user/login' : 'UserController.login',                                    												// Authentification à l'application
  'get /user/token': 'UserController.token',									  												// Recuperation d'un nouveau token
  'get /user/currentSession': 'UserController.currentSession',       															// Session en cours									
  'post /user/addUser': 'UserController.addUser',  																				// Ajout d'un utilisateur					
  'get /user/updateUser/:idUser/:nom/:prenom/:email/:groupe/:password?': 'UserController.updateUser',							// Modification utilisateur
   
  'put /promo/UpdateNbVote': 'PromoController.updateNbVote',																	//Edite le nombre de vote nécéssaire pour l'obtention d'un badge sur une promo
  'get /promo/getAll': 'PromoController.getAll',						  														// Récupère toutes les personnes
  //'get /promo/pilot/:idPromo' : 'PromoController.getAllPilot',																------- non actif
  'get /promo/pilot/bycodeAnalytique/:codeAnalytique' : 'PromoController.getPilotByCodeAnalytique',								// Récupere tous les pilote d'une promo par son code analytique
  'get /promo/getAllStudentInPromo/:codeAnalytique' : 'promoController.getAllStudentInPromo',
  'get /promo/getAllUserInPromo/:codeAnalytique' : 'promoController.getAllUserInPromo',
  'post /promo/insertUserInPromo' : 'promoController.insertUserInPromo',
  'post /promo/updatePromoForUser' : 'promoController.updatePromoForUser',
  'get /user/count/softskill/:idSoftSkill/:idUser': 'VoteController.countVoteByIdSoftSkill',									// Compte les votes d'une personne pour un SoftSkill
  'get /user/count/topSoftSkill/:idUser/:numberTop': 'VoteController.TopSkillByIdUser',											// Récupère les X soft skill ou la personne à reçu le plus de vote
  'get /user/count/softskillByIdUserIdSoftskill/:idUser/:idSoftskill': 'VoteController.softskillByIdUserIdSoft',	
  //'get /vote/getAllVoteByIdSession/:id': 'VoteController.tracaVoteWhereIdPeriode',											-------- a confirmer duplicata ?
  'get /vote/checkIfUserVoted/:idUserVoting/:idUserVoted/:idSessionVote': 'VoteController.checkIfUserVoted',					// Récupère le nombre de vote d'un utilisateur pour une session
  'get /vote/checkIfUserVotedForSession/:idUserVoting/:idSessionVote': 'VoteController.checkIfUserVotedForSession',
  'get /vote/gatherAllVoteFromSession/:idSession': 'VoteController.gatherAllVoteFromSession',									// Récupère tous les votes d'une session
  'get /vote/gatherAllUserVoteFromSession/:idSession/:idUser': 'VoteController.gatherAllUserVoteFromSession',   				// Récupère tous les votes d'un utilisateur pour une session
  'get /vote/getIfVoteDone/:idUserVoting/:idUserVoted/:idPeriode/:idSoftskill': 'VoteController.getIfVoteDone',
  'get /vote/allVoteObtained/:idUser': 'VoteController.allVoteObtained',
  'post /vote/voteUser/': 'SoftskillController.addVoteSoftSkill',				//Ajoute un vote (badge)
  'get /softskill/create/:idCategorie/:nomSoftSkill/:nomBadge/:cheminBadge': 'SoftskillController.createSoftSkill',				//Ajoute un soft Skill
  'get /softskill/categorie/:idCategorie': 'SoftskillController.softskillForCategorie',
  'get /softskill/all/': 'SoftskillController.selectAllSoftskill',
  'post /validation/addValidationSoftSkill': 'ValidationController.addValidationSoftSkill',										//Permet de valider l'attribution d'un badge
  
  'get /vote/getAllSessionVoteWhereIdPilote/:id': 'SessionVoteController.allSessionVoteWhereIdPilote',							//Récupere toutes les session initialisé par un pilote X
  'get /vote/getAllSessionVoteWithUsersWherePromo/:codeAnalytique': 'SessionVoteController.allSessionWithUsersVoteWherePromo',
  'get /vote/getAllSessionVoteWithPilotWherePromo/:codeAnalytique': 'SessionVoteController.allSessionWithPilotVoteWherePromo',
  'get /vote/getAllSessionActiveWithPilotVoteWherePromo/:codeAnalytique': 'SessionVoteController.allSessionActiveWithPilotVoteWherePromo',
  'get /vote/createVoteSession/:codeAnalytique/:idPersonne/:dateDebut/:dateFin': 'SessionVoteController.createVoteSession',		//Ajoute une session de vote
   
  'get /groupe/all': 'GroupeController.getAllGroupes',                         													// Récupère tous les groupes existants en base de données
  
  'post /import': 'ImportController.ImportCSV',																						//Créer des utilisateur et effectue l'association pour les promotions grâce à un fichier CSV
};
