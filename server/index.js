const express = require('express');
const ctrl = require("./controller");
const app = express();
const port = 5150;

app.use(express.json());

app.get("/api/journal", ctrl.getJournal)
app.post("/api/journal", ctrl.createEntry)
app.delete("/api/journal/:id", ctrl.deleteEntry)
// app.put("/api/journal/edit/:id")

app.listen(port, () => console.log(`Synapses firing on port ${port}`))