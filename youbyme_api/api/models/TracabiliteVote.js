/**
 * Session.js
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
        type: 'number',
        columnName: 'id_periode',
    },
    votant: {
        type: 'number',
        columnName: 'id_personne_votante',
    },
    recevant: {
        type: 'number',
        columnName: 'id_personne_recevante',
    },
    softskill:{
        type:'number',
        columnName: 'id_t_soft_skill',
    },
    date:{
        type:'string',
        columnType:'date',
        columnName:'date_vote',
    },
    },
  
  };
  
  