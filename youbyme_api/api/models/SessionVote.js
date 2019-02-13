/**
 * SessionVote.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 't_periode_vote',
  attributes: {
    updatedAt: false,
    createdAt: false,
    id: {
      type:'number',
      autoIncrement: true,
      columnName:'id_periode'
    },
    codeAnalytique: {
      type:'string',
      columnName:'code_analytique'
    },
    idPilote: {
      type:'number',
      columnName:'id_t_personne'
    },
    dateDebut: {
      type:'string',
      columnName:'date_debut'
    },
    dateFin: {
      type:'string',
      columnName:'date_fin'
    },
  },

};
