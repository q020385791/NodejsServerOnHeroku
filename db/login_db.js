let Boss = require('../models/boss')

let LoginVerify = (info) => {
  var Boss_id=info.id;
  var Boss_password=info.pw;
    return Boss.find({ boss_id: Boss_id, boss_password: Boss_password })
}



  module.exports = {
    LoginVerify:LoginVerify,
  }

