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

    addUserWithParameters : 'isAdmin',
    update : 'isLoggedIn',
    destroy : 'isLoggedIn',
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
    update : 'isLoggedIn',
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
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  TracaVoteController:{
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  UserController:{
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  VoteController:{
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  }
};
