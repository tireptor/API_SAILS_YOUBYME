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

  tableName: 't_validation_softskill',
  attributes: {
    updatedAt: false,
    createdAt: false,
    id_t_soft_skill: {
      model:'softskill',
      columnName:'id_t_soft_skill'
    },
    id_eleve: {
      model:'user',
      columnName:'id_eleve'
    },
    id_valide_par: {
      model:'user',
      columnName:'id_valide_par'
    },
	dateValidation: {
      type:'string',
      columnName:'date_validation'
    },
	id: {
      type:'number',
      autoIncrement: true,
      columnName:'id_validation_soft_skill'
    },
  },
};
