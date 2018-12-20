/**
 * Vote.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 't_tracabilite_vote',
  attributes: {
    updatedAt: false,
    createdAt: false,
    id: {
      type:'number',
      autoIncrement: true,
      columnName:'id_vote'
    },
    periode: {
      type:'number',
      columnName:'id_periode'
    },
    personne_votante: {
      type:'number',
      columnName:'id_personne_votante'
    },
    personne_recevante: {
      type:'number',
      columnName:'id_personne_recevante'
    },
    soft: {
      type:'number',
      columnName:'id_t_soft_skill'
    },
    date: {
      type:'string',
      columnType: 'date',
      columnName:'date_vote'
    },
  },
};
