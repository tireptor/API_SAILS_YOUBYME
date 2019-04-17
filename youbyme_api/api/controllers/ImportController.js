/**
 * ImportController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
  
    uploadFile : async function(req, res){
		req.file('file').upload({
			
		},function(err, file){
			if(err) console.log(err);
		const csv=require('csvtojson');
        let importReq;
        let assocReq;
        csv()
        .fromFile(file[0].fd)
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
		});
    },
};

