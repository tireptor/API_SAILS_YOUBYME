/**
 * UserPromo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'t_assoc_promo_personne',
  attributes: {

    updatedAt: false,
    createdAt: false,

    user:{
      columnName:'id_t_personne',
      model:'user',
    },

    promo:{
      columnName:'code_analytique',
      model:'promo',
    },
  },

};

