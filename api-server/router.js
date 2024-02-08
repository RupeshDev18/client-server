const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

const getContacts = (count = 20) => {
  return new Array(count).fill(0).map((_, i) => ({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }));
};

router.route("/contacts").get((req, res) => {
  res.json(getContacts());
});

module.exports = router;
