/**
 * Badge.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 't_validation_badge',
  attributes: {
    updatedAt: false,
    createdAt: false,

    id_t_badge: {
      columnName:'id_t_validation_badge',
      model : 'categorie'
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
      columnName:'id_validation_badge'
    },
  },
};

