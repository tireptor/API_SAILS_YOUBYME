/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,
  // Policies appliqué pour les fonctions de UserController
  UserController:{
    deleteUser : 'isLoggedIn',
    addUserWithParameters : 'isAdmin',
    update : 'isLoggedIn',
    token:'isLoggedIn'
  }, 
  CategorieController:{
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  GroupeController:{
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  PromoController:{
    updateNbVote: 'isLoggedIn',
    destroy : 'isAdmin',
  },
  SessionController:{
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  SessionVoteController:
  {
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  SoftskillController:{
    create : 'isAdmin',
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  TracaVoteController:{
    create : 'isLoggedIn',
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  UserController:{
    create : 'isAdmin',
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  VoteController:{
    create : 'isLoggedIn',
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  ValidationController:{
    create : 'isLoggedIn',
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  }
};
