/**
 * Groupe.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'t_groupe',
  attributes: {

    updatedAt: false,
    createdAt: false,
    id:{
      columnName:'id_t_groupe',
      type:'number',
      required:true,
      unique:true,
    },

    nom:{
      columnName:'nom_t_groupe',
      type:'string',
    },
    // référence  à user:
    users:{
      collection:'user',
      //type:'number',
      via:'groupe',
    },
  },

};

