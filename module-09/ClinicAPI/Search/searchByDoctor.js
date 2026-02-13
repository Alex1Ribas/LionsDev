const { doctors } = require("../data/data");

function searchByDoctor(req, res) {
  const { name, specialty } = req.query;

  const results = doctors.filter(m => {
    const nameFound = name ? m.name.toLowerCase().includes(name.toLowerCase()) : true;
    const specialtyFound = specialty ? m.specialty.toLowerCase().includes(specialty.toLowerCase()) : true;
    return nameFound && specialtyFound;
  });

  if (results.length === 0) {
    return res.status(404).send("No doctors found!");
  }

  res.status(200).send(results);
}

module.exports = searchByDoctor;
