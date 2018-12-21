/**
 * Promo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
tableName:'t_promotion',
  attributes: {

    id:{
      columnName:'code_analytique',
      type:'string',
      required:true,
      unique:true,
    },
    createdAt:false,
    updatedAt:false,

    nbvote:{
      columnName:'nombre_vote',
      type:'number',
    },
    nom:{
      columnName:'nom_t_promotion',
      type:'string',
    },

    users:{
      collection:'user',
      via: 'promo',
      through:'userpromo',
    },

  },

};

