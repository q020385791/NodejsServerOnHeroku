let BossUsecase = require('../usecase/boss_usecase')
let Boss = module.exports = {}
let response =require('../response/response')

Boss.InsertBoss=()=>{
  BossUsecase.InsertBoss(req.body)
  .then(data => {
    res.send(data)
  })
}

Boss.FindBossByID = (req, res, next) => {
    BossUsecase.FindBossByID(req.query)
    .then(data => {
      res.send(data)
    })
}

