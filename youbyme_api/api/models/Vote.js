/**
* Vote.js
 */

 /**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

module.exports = {

  tableName: 't_tracabilite_vote',
  attributes: {
    updatedAt: false,
    createdAt: false,
    id: {
      type:'number',
      autoIncrement: true,
      columnName:'id_vote'
    },
    periode: {
      type:'number',
      columnName:'id_periode'
    },
    personne_votante: {
      model:'user',
      columnName:'id_personne_votante'
    },
    personne_recevante: {
      model:'user',
      columnName:'id_personne_recevante'
    },
    softskill: {
      model:'softskill',
      columnName:'id_t_soft_skill'
    },
    date: {
      type:'string',
      columnName:'date_vote'
    },
  },
};
