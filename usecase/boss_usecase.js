let {
    FindBossByID,
    InsertBoss,
      // CreateBoss
    
    } = require('../db/boss_db')
  
    let BossDb = {
       FindBossByID,
       InsertBoss,
      // CreateBoss,
    }


    let BossUsecase = module.exports = {}


    BossUsecase.FindBossByID=(info)=>{
      return BossDb.FindBossByID(info)
    }

    BossUsecase.InsertBoss=(info)=>{
      return BossDb.InsertBoss(info)
    }
    module.exports = BossUsecase