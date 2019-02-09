/**
 * TracaVote.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 't_tracabilite_vote',
  attributes: {

    id: {
      type:'number',
      autoIncrement: true,
      columnName:'id_vote'
    },
    periode: {
      type:'number',
      columnName:'id_periode',
    }, 
    personneVotante: {
      type:'number',
      columnName:'id_personne_votante'
    },
    personneRecevante: {
      type:'number',
      columnName:'id_personne_recevante'
    },
    softskill: {
      type:'number',
      columnName:'id_t_soft_skill'
    },
    dateVote: {
      type:'string',
      columnName:'date_vote'
    },

  },

};

