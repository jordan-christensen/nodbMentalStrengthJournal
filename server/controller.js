const journal = require("./journal.json");
let id = 6

module.exports = {
  getJournal: (req, res) => {
    console.log( `get journal request`)
    res.status(200).send(journal);
  },
  createEntry: (req, res) => {
    console.log(`HIT`)
    const { date, time, objective, plan, strengths, weakness, motiv, anx, conc, conf, dm, note } = req.body;
    if (!objective) {
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
        note,
        reviewed: false
      };
      journal.push(newEntry);
      id++;
      res.status(200).send(journal)
    }
    console.log(`HIT`)
  },
  deleteEntry: (req, res) => {
    // console.log(req.params)
    const {id} = req.params
    const index = journal.findIndex( entry => entry.id === +id);
    if(index === -1){
      res.status(404).send('Entry not found in journal')
    } else {
      journal.splice(index, 1);
      res.status(200).send(journal)
    }
  },
  entryReviewed: (req, res) => {
    const {id} = req.params
    const index = journal.findIndex( entry => entry.id === +id)
    if( index === -1) {
      res.status(404).send(`Entry item not found in journal`)
    } else {
      journal[index].reviewed = !journal[index].reviewed
      res.status(200).send(journal)

    }
  }
}