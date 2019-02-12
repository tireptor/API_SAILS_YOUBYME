/**
 * User.js
 * test
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require("bcryptjs");
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
    votants: {
      collection:'vote',
      via:'personne_votante',
    },
    recevants: {
      collection:'vote',
      via:'personne_recevante',
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
    password:{
      type:'string',
      columnName:'password_t_personne',
    },


    promos:{
      collection:'promo',
      via:'user',
      through:'userpromo',
    },

    votes:{
      collection:'vote',
      via:'personne_recevante',
    }
  },
  customToJSON: function() {
     //Retourne une copie du résultat sans le mot de passe
    return _.omit(this, ['password'])
  },

  beforeCreate: function(values, cb) {
    // Hash le password avant chaque création
    bcrypt.hash(values.password, 10, function(err, hash) {
      if (err) return cb(err);
      values.password = hash;
      cb();
    });
  }
};
