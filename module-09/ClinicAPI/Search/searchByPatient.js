const { patients } = require("../data/data");

function searchByPatient(req, res) {
  const { name, birthDate } = req.query;

  const results = patients.filter(p => {
    const nameFound = name ? p.name.toLowerCase().includes(name.toLowerCase()) : true;
    const birthDateFound = birthDate ? p.birthDate === birthDate : true;

    return nameFound && birthDateFound;
  });

  if (results.length === 0) {
    return res.status(404).send("No patients found!");
  }

  res.status(200).send(results);
}

module.exports = searchByPatient;
