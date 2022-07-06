const express = require('express')
let config = require('./config/config')
const routes = require('./routes')
const bodyParser = require('body-parser')
const app = express()
//處理middleware
app.use(bodyParser.urlencoded({ extended: false }));
//標記處理字串
app.use(bodyParser.json());
//注入route
app.use(routes)

//伺服器輸入點
app.use((err, req, res, next) => {
    if (err) {
      console.error(err.message)

      if (!err.statusCode) {
        err.statusCode = 500
      } 

      return res.status(err.statusCode).send({
        statusCode: err.statusCode,
        message: err.message
      })
    }
    next()
  })

//404
app.use(function (req, res) {
    res.status(404).json({
      status: 'Page does not exist'
    });
  });


const PORT = config.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
})
