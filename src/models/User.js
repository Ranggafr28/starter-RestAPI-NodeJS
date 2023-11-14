const db = require("../../db.js");

function getUser(request) {
  let query = "SELECT * FROM funding_campaign_header";
  if (Object.keys(request).length > 0) {
    query =
      "SELECT * FROM funding_campaign_header WHERE header LIKE '%" +
      request.value[0] +
      "%'";
  }
  return new Promise((resolve, reject) => {
    db.conn.execute(query, function (err, results, fields) {
      if (err) reject(err);
      resolve(results);
    });
  });
}
function createUser(request) {
  const query = `INSERT INTO funding_campaign_header (name, email, address) VALUES ('${request.name}', '${request.email}', '${request.address}')`;
  return db.conn.execute(query);
}
function updateUser(request, id) {
  const query = `UPDATE funding_campaign_header SET name='${request.name}', email='${request.email}', address='${request.address}' WHERE id=${id}`;
  return db.conn.execute(query);
}

function deleteUser(id) {
  const query = `DELETE FROM  master_user WHERE id='${id}'`;
  return db.conn.execute(query);
}

module.exports = { getUser, createUser, updateUser, deleteUser };
