const mongoose = require('mongoose')

const dataAlumniSchema = new mongoose.Schema({
    nisn: {
        type: Number,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model('dataAlumni', dataAlumniSchema, 'dataAlumni')