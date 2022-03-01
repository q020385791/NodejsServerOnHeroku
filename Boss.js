
const Bossinfo=require("./Bossinfo.js");
class Boss
{
      constructor()
      {
        this.boss_id="";//店家ID
        this.boss_name="";//店家名稱
        this.boss_password="";//店家密碼
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