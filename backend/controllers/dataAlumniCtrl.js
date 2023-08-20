const dataalumni = require("../models/dataalumni");
const bcrypt = require('bcrypt');

const hashPassword = async (inputPassword) => {
    const saltRounds = 10
    try {
        const hash = await bcrypt.hash(inputPassword, saltRounds)
        return hash
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllData: async (req, res) => {
        try {
            const data = await dataalumni.find();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
            console.error(error);
        }
    },
    postData: async (req, res) => {
        try {
            const hashedPassword = await hashPassword(req.body.password);
            const dataToSave = new dataalumni({
                email: req.body.email,
                password: hashedPassword,
                nama: req.body.namaAwal + ' ' + req.body.namaAkhir,
                jenisKelamin: req.body.jenisKelamin,
                nisn: 'null',
                noIjazah: 'null',
                noSkhun: 'null',
                tahunLulus: 'null',
                details: [{
                    ttl: 'null',
                    alamat: 'null',
                    noTelp: 'null',
                    tahunMasuk: 'null',
                    status: 'null',
                    detailStatus: 'null',
                    namaAyah: 'null',
                    pekerjaanAyah: 'null',
                    namaIbu: 'null',
                    pekerjaanIbu: 'null'
                }]
            });
            await dataToSave.save();
            res.status(201).json({
                message: 'Data has been saved',
                data: dataToSave,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
            console.error(error);
        }
    },
    login: async (req, res) => {
        try {
            const findPass = await dataalumni.find({ email: req.body.email })
            const hashPassword = findPass[0].password
            const result = await bcrypt.compare(req.body.password, hashPassword)
            if (result) {
                res.json({
                    message: 'berhasil',
                    data: findPass
                })
            } else {
                res.send('gagal')
            }
        } catch (error) {
            res.send(error)
        }
    },
    changePass: async (req, res) => {
        try {
            const hashedPassword = await hashPassword(req.body.password)
            const update = await dataalumni.updateOne({ email: req.params.email }, {
                $set: {
                    password: hashedPassword
                }
            })

            if (update.modifiedCount === 1) {
                res.send('berhasil!')
            } else {
                res.send('gagal')
            }

        } catch (error) {
            console.log(error)
        }
    },
    findEmail: async (req, res) => {
        try {
            const data = await dataalumni.find({ email: req.body.email })
            if (data.length === 1) {
                res.send('berhasil')
            } else {
                res.send('gagal')
            }
        } catch (error) {
            console.log(error)
        }
    },
    searchData: async (req, res) => {
        try {
            const result = await dataalumni.find({ $text: { $search: req.query.query } })
            res.send(result)
        } catch (error) {
            res.send(error)
        }
    },
    editData: async (req, res) => {
        try {
            const resp = await dataalumni.updateOne({ _id: req.params._id }, {
                $set: {
                    nama: req.body.nama,
                    nisn: req.body.nisn,
                    noIjazah: req.body.noIjazah,
                    noSkhun: req.body.noSkhun,
                    tahunLulus: req.body.tahunLulus,
                    details: [{
                        ttl: req.body.ttl,
                        alamat: req.body.alamat,
                        noTelp: req.body.noTelp,
                        tahunMasuk: req.body.tahunMasuk,
                        status: req.body.status,
                        detailStatus: req.body.detailStatus,
                        namaAyah: req.body.namaAyah,
                        pekerjaanAyah: req.body.pekerjaanAyah,
                        namaIbu: req.body.namaIbu,
                        pekerjaanIbu: req.body.pekerjaanIbu
                    }]
                }
            })
            const find = await dataalumni.find({ _id: req.params._id })
            if (resp.modifiedCount === 1) {
                res.json({
                    message: 'berhasil',
                    data: find
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
};
