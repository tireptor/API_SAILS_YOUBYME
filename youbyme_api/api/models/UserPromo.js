/**
 * UserPromo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'t_assoc_promo_personne',
  attributes: {

    user:{
      columnName:'id_t_personne',
      model:'user',
    },
    createdAt:false,
    updatedAt:false,
    promo:{
      columnName:'code_analytique',
      model:'promo',
    },
  },

};

