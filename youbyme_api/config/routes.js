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
  'get /user/test': 'UserController.login', // sans passage de paramètre dans l'url
  'get /vote/getAllVoteByID:id': 'VoteController.tracaVoteWhereIdPeriode', //:id passage de paramètre dans l'URL
  'get /session/vote/:id': 'SessionVoteController.allSessionVoteWhereIdPilote',//id d'un pilote en paramètre
  'get /user/create': 'UserController.addUser',
  'get /categorie/getAllCategorie': 'CategorieController.getAllCategories',
  'get /promo/getAllPromos': 'PromoController.getAllPromos',
  'get /user/createWithParameters/:nom/:prenom/:email/:groupe/:password?': 'UserController.addUserWithParameters',  // le mot de passe est facultatif pour la création d'un utilisateur voir si pertinent ?
  'get /promo/getAllPersonnesInPromo/:id': 'PromoController.getAllPersonnesInPromo',    // Récupère toutes les personnes dans une promo
  'get /groupe/viewAllGroup': 'GroupeController.getAllGroupes',                         // Récupère tous les groupes existants en base de données
  'get /groupe/usersInGroupe/:id': 'GroupeController.getAllPersonnesInGroupe',          // récupère toutes les personnes associés à l'id du groupe passé en paramètre
  //get /user/createWithParameters/:nom:prenom?': 'UserController.addUserWithParameters' Paramètre optionnel
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
