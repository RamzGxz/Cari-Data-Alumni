const express = require('express')
const dataAlumniRoutes = express.Router()
const dataAlumniCtrl = require('../controllers/dataAlumniCtrl')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, 'images/')
    },
    filename: (request, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const uploads = multer({storage: storage})


dataAlumniRoutes.get('/getAllData', dataAlumniCtrl.getAllData)
dataAlumniRoutes.post('/postData', dataAlumniCtrl.postData)
dataAlumniRoutes.post('/login', dataAlumniCtrl.login)
dataAlumniRoutes.put('/putPass/:email', dataAlumniCtrl.changePass)
dataAlumniRoutes.post('/findEmail', dataAlumniCtrl.findEmail)
dataAlumniRoutes.get('/findData', dataAlumniCtrl.searchData)
dataAlumniRoutes.put('/editData/:_id', dataAlumniCtrl.editData)
dataAlumniRoutes.post('/imageUploads/:_id', uploads.single('image'), dataAlumniCtrl.img)


module.exports = dataAlumniRoutes