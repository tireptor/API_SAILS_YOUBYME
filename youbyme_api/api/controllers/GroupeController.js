/**
 * GroupeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAllPersonnesInGroupe: async function(req, res){
        var groupe = await Groupe.find({
            where: {id:req.param('id')},
            select:[],
        }).populate('users');
        return res.send(groupe);
    },
    getAllGroupes: async function(req, res){
        var groupe = await Groupe.find({
            select:['nom'],
        });
        return res.send(groupe);
    }

};

