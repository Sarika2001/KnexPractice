const db=require('../db/db');

class UserDAO{
    async createUser(Name,Address)
    {
        const [ID]=db('User').insert({
            Name:Name,
            Address:Address
        }).returning('ID');

        return ID;
    }
}
console.log(db);
module.exports= new UserDAO();