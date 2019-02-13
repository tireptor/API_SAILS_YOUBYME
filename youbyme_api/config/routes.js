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
   
  'put /promo/UpdateNbVote': 'PromoController.updateNbVote',
  'get /promo/getAll': 'PromoController.getAll',						  														// Récupère toutes les personnes
  //'get /promo/pilot/:idPromo' : 'PromoController.getAllPilot',																------- non actif
  'get /promo/pilot/bycodeAnalytique/:codeAnalytique' : 'PromoController.getPilotByCodeAnalytique',								// Récupere tous les pilote d'une promo par son code analytique
  
  'get /user/count/softskill/:idSoftSkill/:idUser': 'VoteController.countVoteByIdSoftSkill',									// Compte les votes d'une personne pour un SoftSkill
  'get /user/count/topSoftSkill/:idUser/:numberTop': 'VoteController.TopSkillByIdUser',											// Récupère les X soft skill ou la personne à reçu le plus de vote
  //'get /vote/getAllVoteByIdSession/:id': 'VoteController.tracaVoteWhereIdPeriode',											-------- a confirmer duplicata ?
  'get /vote/checkIfUserVoted/:idUserVoting/:idUserVoted/:idSessionVote': 'VoteController.checkIfUserVoted',					// Récupère le nombre de vote d'un utilisateur pour une session
  'get /vote/gatherAllVoteFromSession/:idSession': 'VoteController.gatherAllVoteFromSession',									// Récupère tous les votes d'une session
  'get /vote/gatherAllUserVoteFromSession/:idSession/:idUser': 'VoteController.gatherAllUserVoteFromSession',   				// Récupère tous les votes d'un utilisateur pour une session
  
  'get /vote/voteUser/:idPeriode/:idPersVotant/:idPersVote/:idSoftSkill': 'SoftskillController.addVoteSoftSkill',				//Ajoute un vote (badge)
  'get /softskill/create/:idCategorie/:nomSoftSkill/:nomBadge/:cheminBadge': 'SoftskillController.createSoftSkill',				//Ajoute un soft Skill
  
  'post /validation/addValidationSoftSkill': 'ValidationController.addValidationSoftSkill',										//Permet de valider l'attribution d'un badge
  
  'get /vote/getAllSessionVoteWhereIdPilote/:id': 'SessionVoteController.allSessionVoteWhereIdPilote',							//Récupere toutes les session initialisé par un pilote X
  'get /vote/createVoteSession/:codeAnalytique/:idPersonne/:dateDebut/:dateFin': 'SessionVoteController.createVoteSession',		//Ajoute une session de vote
   
  'get /groupe/all': 'GroupeController.getAllGroupes',                         													// Récupère tous les groupes existants en base de données
  
  '/import': 'ImportController.ImportCSV',																						//Créer des utilisateur et effectue l'association pour les promotions grâce à un fichier CSV
};
