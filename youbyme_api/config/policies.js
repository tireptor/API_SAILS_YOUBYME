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
  BadgeController:{
    create : 'isLoggedIn',
    destroy : 'isAdmin',
    update : 'isAdmin'
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
    getPilotByCodeAnalytique : 'isLoggedIn',
    updateNbVote: 'isLoggedIn',
    destroy : 'isAdmin',
  },
  SessionController:{
    create: 'isPilot',
    update : 'isLoggedIn',
    destroy : 'isPilot',
  },
  SessionVoteController:
  {
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  SoftskillController:{
    create : 'isAdmin',
    update : 'isLoggedIn',
    destroy : 'isLoggedIn',
  },
  UserController:{
    create : 'isAdmin',
    update : 'isLoggedIn',
    destroy : 'isAdmin',
  },
  VoteController:{
    create : 'isLoggedIn',
    update : 'isLoggedIn',
    destroy : 'isLoggedIn',
  },

};
