/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login: async function(req, res){
        var user = await User.find({nom:'Leboucq'});
        return res.send(user);
    },

};
