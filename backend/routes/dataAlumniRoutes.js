const express = require('express')
const dataAlumniRoutes = express.Router()
const dataAlumniCtrl = require('../controllers/dataAlumniCtrl')

dataAlumniRoutes.get('/getAllData', dataAlumniCtrl.getAllData)
dataAlumniRoutes.post('/postData', dataAlumniCtrl.postData)
dataAlumniRoutes.post('/login', dataAlumniCtrl.login)
dataAlumniRoutes.put('/putPass/:email', dataAlumniCtrl.changePass)
dataAlumniRoutes.post('/findEmail', dataAlumniCtrl.findEmail)

module.exports = dataAlumniRoutes