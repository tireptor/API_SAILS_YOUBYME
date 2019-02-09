/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getAllCategories: async function(req, res){
        var toutes_categories = await T_categorie.find({
            select:['nom_badge', 'chemin_badge', 'nom_categorie'],
        })
        //return res.json(req.session.userId);
        return res.send(toutes_categories);
    }

};

