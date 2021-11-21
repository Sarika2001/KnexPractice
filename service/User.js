//Importing UserDataAccessObj
const UserDAO=require('../dao/User')

class UserService{
    createUser(UserDMO){
        const{Name,Address}=UserDAO;
        UserDAO.createUser(Name,Address);
    }
}

module.exports=new UserService();