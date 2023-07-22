const express = require('express');
const router = require('express').Router()
const ratingController= require('../controller/rating')

router.post('/newcars/newCarId/rate', ratingController.createNewCarRating);

router.get('/newcars/:newCarId/ratings', ratingController.getNewCarRatings);

router.get('/clients/:clientId/ratings', ratingController.getClientRatings);

module.exports = router;
