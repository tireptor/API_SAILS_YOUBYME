/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login: async function(req, res){
        var user = await User.find({
            where: {nom:'Leboucq'},
            select:['prenom', 'nom'],
        })
        return res.send(user);
    }

};

