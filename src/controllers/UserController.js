const db = require("../../db");
const User = require("../models/User");
async function Get(req, res) {
  const data = req.query;

  if (!data.name || !data.email || !data.address)
    return res.status(400).send({
      message: "data yang anda masukan salah",
    });
  if (Object.keys(data).length === 0) {
    const result = await User.getUser({});
    return res.status(200).send(result);
  }
  const result = await User.getUser(data, {});
  return res.status(200).send(result);
}
async function Add(req, res) {
  const request = req.body;
  try {
    await User.createUser(request);
    res.status(201).send({
      message: "Berhasil menambahkan",
      data: request,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
}
async function Update(req, res) {
  const id = req.params.id;
  const request = req.body;
  try {
    await User.updateUser(request, id);
    res.status(200).send({
      message: "Berhasil diubah",
      data: {
        id: id,
        ...request,
      },
    });
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
}
async function Delete(req, res) {
  const id = req.params.id;
  try {
    await User.deleteUser(id);
    res.status(200).send({
      message: "Berhasil dihapus",
      data: id,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
}
module.exports = { Get, Add, Update, Delete };
