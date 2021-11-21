const UserService = require('../service/User');

class UserController{
    async createUser(req,res){
        try {
            const id = await UserService.createUser(req.body);
            res.status(201).json(ID);
          } catch (err) {
            console.error(err);
          }
    }
}

module.exports=new UserController();
