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
                nama: req.body.namaAwal + ' ' + req.body.namaAkhir
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
                res.send('berhasil')
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
    }
};
