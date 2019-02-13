/**
 * PromoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAll: async function(req, res){
        var promo = await Promo.find({
            select:['nom','nbvote'],
        });
        return res.send(promo);
    },
    /*
    getAllPilot: async function(req, res)
    {
        var promo = await Promo.find({
            where: {id:req.param('id'),groupe:'2'},
            select: ['nom'],
        }).populate('users');
        return res.send(promo);
    }
    */


};

