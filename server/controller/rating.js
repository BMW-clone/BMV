const {sequelize,db}= require("../database");
const getClientRatings = async (req, res) => {
    try {
      const { clientId } = req.params;
  
      const client = await db.Client.findByPk(clientId);
      if (!client) {
        return res.status(404).json({ message: 'Client not found.' });
      }
  
      const ratings = await client.getRatings();
  
      return res.status(200).json(ratings);
    } catch (error) {
      console.error('Error retrieving ratings:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  };
  
const getNewCarRatings = async (req, res) => {
    try {
      const { newCarId } = req.params;
  
      const newCar = await db.NewCars.findByPk(newCarId);
      if (!newCar) {
        return res.status(404).json({ message: 'NewCar not found.' });
      }

      const ratings = await newCar.getRatings();
  
      return res.status(200).json(ratings);
    } catch (error) {
      console.error('Error retrieving ratings:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  };
  const createNewCarRating = async (req, res) => {
    try {
      const { newCarId, clientId, rating } = req.body;

      const newCar = await db.NewCars.findByPk(newCarId);
      const client = await db.Client.findByPk(clientId);
  
      if (!newCar || !client) {
        return res.status(404).json({ message: 'NewCar or Client not found.' });
      }
  
      
      const newRating = await db.Rating.create({
        rating: parseInt(rating), 
        newCarId,
        clientId,
      });
  
      return res.status(201).json(newRating);
    } catch (error) {
      console.error('Error creating rating:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  };
  module.exports = {
    createNewCarRating,
    getNewCarRatings,
    getClientRatings,
  };