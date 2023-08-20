const mongoose = require('mongoose')

const dataAlumniSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    nama: {
        type: String,
        required: false
    },
    nisn: {
        type: String,
        required: false
    },
    jenisKelamin: {
        type: String,
        required: false
    },
    tahunLulus: {
        type: String,
        required: false
    },
    noIjazah: {
        type: String,
        required: false
    },
    noSkhun: {
        type: String,
        required: false
    },
    details: [{
        ttl: {
            type: String,
            required: false
        },
        alamat: {
            type: String,
            required: false
        },
        noTelp: {
            type: String,
            required: false
        },
        tahunMasuk: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: false
        },
        detailStatus: {
            type: String,
            required: false
        },

        namaAyah: {
            type: String,
            required: false
        },
        pekerjaanAyah: {
            type: String,
            required: false
        },
        namaIbu: {
            type: String,
            required: false
        },
        pekerjaanIbu: {
            type: String,
            required: false
        }
    }]
})

module.exports = mongoose.model('dataAlumni', dataAlumniSchema, 'dataAlumni')