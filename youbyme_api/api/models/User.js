/**
 * User.js
 * test
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 't_personne',
  attributes: {
    updatedAt: false,
    createdAt: false,
    id: {
      type:'number',
      autoIncrement: true,
      columnName:'id_t_personne'
    },
    groupe: {
      columnName:'id_t_groupe',
      model:'groupe'
    },
    nom: {
      type:'string',
      columnName:'nom_t_personne'
    },
    prenom: {
      type:'string',
      columnName:'prenom_t_personne'
    },
    password: {
      type:'string',
      columnName:'password_t_personne'
    },
    email: {
      type:'string',
      columnName:'email_t_personne',
      unique: true,
      required: true,
    },
    promos:{
      collection:'promo',
      via:'user',
      through:'userpromo',
    },
  },
};
