/**
 * PromoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getPromo: async function(req, res){
        var promo = await Promo.find({nom:'RIL18'});
        return res.send(promo);
    },
    getAllPromos: async function(req, res){
        var promo = await Promo.find({
            select:['nom','nbvote'],
        });
        return res.send(promo);
    },
    getAllPersonnesInPromo: async function(req, res){
        var promo = await Promo.find({
            where: {id:req.param('id')},
            select:['nom'],
        }).populate('users');
        return res.send(promo);
    },
    /*
    getAllPilotInPromo: async function(req, res)
    {
        var promo = await Promo.find({
            where: {id:req.param('id'),groupe:'2'},
            select: ['nom'],
        }).populate('users');
        return res.send(promo);
    }
    */


};

