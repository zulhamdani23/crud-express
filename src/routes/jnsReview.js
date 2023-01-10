const express = require('express');
const router = express.Router();
const controllerJenisReview = require('../controllers/jnsReview')

router.post('/create', controllerJenisReview.createJenisReview);