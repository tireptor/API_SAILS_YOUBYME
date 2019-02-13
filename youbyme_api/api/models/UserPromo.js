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

    id:{
      type:'number',
      autoIncrement: true,
      columnName:'id',
    },
    user:{
      columnName:'id_t_personne',
      model:'user',
      
    },
    promo:{
      model:'promo',
      columnName:'code_analytique',
    },
  },

};

