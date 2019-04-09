/**
 * ImportController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
  
    ImportCSV: async function(req, res){
        const csvFilePath=req.param('path');
        const csv=require('csvtojson')
        let importReq;
        let assocReq;
        csv()
        .fromFile(csvFilePath)
        .then(async function(jsonArrayObj){
            for (var index in jsonArrayObj){
                importReq = await User.findOrCreate({email: jsonArrayObj[index].EmailStagiaire},
                {
                    groupe: 1,
                    nom: jsonArrayObj[index].NomPersonne, 
                    prenom: jsonArrayObj[index].PrenomPersonne, 
                    email: jsonArrayObj[index].EmailStagiaire, 
                    password: '1234',
                    promos : [jsonArrayObj[index].CodeAnalytique]
                });
            }
        })
        return res.ok();
    }
};

