const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Cleaning Service", price: 500 },
    { id: 2, name: "Plumbing Service", price: 800 },
    { id: 3, name: "Salon Service", price: 1000 },
    { id: 4, name: "Painting Service", price: 2000 },
    { id: 5, name: "Laundry Service", price: 1000 },
    { id: 6, name: "Electrician Service", price: 500 },
    { id: 7, name: "Car Service", price: 3000 },
    { id: 8, name: "Ac Repair Service", price: 700 },
    { id: 9, name: "Gardening Service", price: 1000 },
    { id: 10, name: "Carpenter Service", price: 1500 },

  ]);
});

router.get("/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Cleaning Service", price: 500 });
});

module.exports = router;