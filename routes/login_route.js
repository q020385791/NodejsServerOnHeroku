let LoginUsecase = require('../usecase/login_usecase')
let Login = module.exports = {}
let response =require('../response/response')
Login.LoginVerify = (req, res, next) => {
  LoginUsecase.LoginVerify(req.body)
      .then(data => {
        if (data.length==1){
          res.send(new response(true,"登入成功"))
        }else{
          res.send(new response(false,"登入失敗"))
        }
      })
  }

