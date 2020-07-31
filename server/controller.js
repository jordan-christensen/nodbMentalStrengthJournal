const journal = require("./journal.json")
let id = 6

module.exports = {
  getJournal: (req, res) => {
    console.log( `get journal request`)
    res.status(200).send(journal);
  },
  createEntry: (req, res) => {
    const { date, time, objective, plan, strengths, weakness, motiv, anx, conc, conf, dm, note } = req.body;
    if (!objective || !plan || !strengths || !weakness || !motiv || !anx || !conc || !conf || !dm ) {
      res.status(405).send(`Missing required information`)
    } else {
      const newEntry = {
        id,
        date,
        time,
        objective,
        plan,
        strengths,
        weakness,
        motiv,
        anx,
        conc,
        conf,
        dm,
        note
      };
      journal.push(newEntry);
      id++;
      res.status(200).send(journal)
    }
  }
}