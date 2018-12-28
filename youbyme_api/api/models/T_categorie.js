/**
 * User.js
 * test
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 't_categorie',
  attributes: {
    updatedAt: false,
    createdAt: false,
    id: {
      type:'number',
      autoIncrement: true,
      columnName:'id_t_categorie'
    },
    nom_categorie: {
      type:'string',
      columnName:'nom_t_categorie'
    },
    nom_badge: {
      type:'string',
      columnName:'nom_badge',
    unique: true,
    required: true,
    },
    chemin_badge: {
      type:'string',
      columnName:'chemin_badge', 
	  allowNull: true,
    },
  },

};
