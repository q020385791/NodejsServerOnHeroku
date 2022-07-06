//控制方法開關
//不給用就關掉
let {
  LoginVerify,
  // FindBossByID,
    // CreateBoss
  
  } = require('../db/login_db')


//邏輯層
  let LoginUsecase = module.exports = {}

  LoginUsecase.LoginVerify=(info)=>{
    // var test=LoginVerify(info);
    return LoginVerify(info)

  }




  module.exports = LoginUsecase