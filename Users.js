
const Bossinfo=require("./Bossinfo.js");
class Boss
{
      constructor()
      {
        this._bossinfo=new Bossinfo;//詳細資訊
      }

        GetUserinfo()
        {   
        return this._bossinfo;
        };

        SetUserinfo(bossinfo)
        {
            this._bossinfo=bossinfo;

        }

}
module.exports=Boss;