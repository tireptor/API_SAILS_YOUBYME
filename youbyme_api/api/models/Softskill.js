/**
 * Softskill.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 't_soft_skill',
  attributes: {
    updatedAt: false,
    createdAt: false,
    id: {
      type:'number',
      autoIncrement: true,
      columnName:'id_t_soft_skill'
    },
    idCategorie: {
      type:'number',
      columnName:'id_t_categorie'
    },
    nom: {
      type:'string',
      columnName:'nom_soft_skill'
    },
    nomBadge: {
      type:'string',
      columnName:'nom_badge'
    },
    cheminBadge: {
      type:'string',
      columnName:'chemin_badge'
    },
    votes:{
      collection:'vote',
      //type:'number',
      via:'softskill',
    },
  },

};

