
const Userinfo=require("./Userinfo.js");
class Users
{
      constructor()
      {
        this._userinfo=new Userinfo;
      }

        GetUserinfo()
        {   
        return this._userinfo;
        };

        SetUserinfo(userinfo)
        {
            this._userinfo=userinfo;

        }

}
module.exports=Users;