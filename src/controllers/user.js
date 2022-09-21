const user = require ('../models/user')
const db = require ('../../config/database')

userController.create = async (req,res) => {
    try {
      let result = {}
      let body = {
        idUser: req.body.idUser,
        nama: req.body.nama,
        role: req.body.role,
        isDeleted: req.body.isDeleted,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    }
      result = await user.create(body)
      if (!result) return res.send(400, { success: false, message: "User Gagal Disimpan!" });
      res.json(201, { success: true, message: "User Berhasil Disimpan!", mahasiswa: result });
    }catch(err){
      res.send(500, { success: false, message: "INTERNAL SERVER ERROR", error: err });
    }
} 

module.exports = userController;