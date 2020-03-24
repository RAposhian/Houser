module.exports = {
   getHouses: (req, res) => {
      const db = req.app.get('db');
      db.select_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => res.status(500).send(err))
   },

   addHouse: (req, res) => {
      const db = req.app.get('db');
      // const {id} = req.params;
      const house = {...req.body};
      db.add_house(house)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err))
   }
}