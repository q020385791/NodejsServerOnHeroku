let Boss = require('../models/boss')



let FindBossByID = (info) => {
    var Boss_id=info.id;
      return Boss.find({ boss_id: Boss_id})
  }

let InsertBoss=(info)=>{
const NewBoss=new Boss({
  boss_id:info.boss_id,
  boss_name:info.boss_name,
  boss_password:info.boss_password
})

return NewBoss.save((err) => {
  if (err) {
    console.error(err);
    return false;
  }
  return true;
});

}

  module.exports = {
    FindBossByID:FindBossByID,
    InsertBoss:InsertBoss,
  }