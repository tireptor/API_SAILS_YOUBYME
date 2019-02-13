/**
 * UserPromoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getAllPilotInPromo: async function(req, res)
    {
        var userPromo = await UserPromo.find({promo:req.param('idPromo')}).populate('user',{
             select:['nom'],
             where: {'groupe':'2'},
        });
        return res.send(userPromo);
    },

}