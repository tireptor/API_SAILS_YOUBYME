module.exports = async function (req, res, proceed) {

    if (req.session.userId != undefined) {

        var user = await User.find({
            where: {id:req.session.userId},
            select:['groupe'],
        })
        if (user[0].groupe == 3)
        {
            return proceed();
        }
      
    }
    //--•
    return res.forbidden();
  
  };