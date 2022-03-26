const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
     next();
});
app.get('/area', (req, res) => {
     let area = req.body.base * req.body.height / 2
     res.send({ area })
})
app.post('/area', (req, res) => {
     let area = req.body.base * req.body.height / 2
     res.send({ area })
})
app.post('/ctitzenId', (req, res) => {
     var id = String(req.body.citizenId)
     const pattern = /^[0-9]+$/;
     var success, error_code, error_msg
     if (pattern.test(id)) {
          if (id.length != 13) {
               success = false
               error_code = "001"
               error_msg = "cititzen_id invalid"
          }
          else {
               var lastDigit = id.charAt(id.length - 1)
               var sum = 0
               for (var i = 0; i < id.length - 1; i++)
                    sum += id.charAt(i) * (13 - i)
               var checkDigit = 11 - sum % 11
               checkDigit = checkDigit % 10
               if (checkDigit == lastDigit) {
                    console.log('Success')
                    success = true
                    error_code = "200"
                    error_msg = ""
               }
               else {
                    success = false
                    error_code = "001"
                    error_msg = "cititzen_id invalid"
               }
          }
     }
     else {
          if (id.length == 0) {
               success = false
               error_code = "001"
               error_msg = "cititzen_id require"
          }
          else {
               success = false
               error_code = "001"
               error_msg = "cititzen_id invalid"
          }
     }
     //res.sendStatus(001))
     res.send({ success, error_code, error_msg })
})

app.listen(port, function () {
     console.log(`Connecting on Port ${port}`)
})