const express = require('express');
const controller = require('../controllers/jnsReview');
const router = express.Router();
const controllerJenisReview = require('../controllers/jnsReview')

router.post('/', controllerJenisReview.createJenisReview);
router.get('/list', controllerJenisReview.getListJenisRev);
router.post('/validate', controllerJenisReview.validateJson);

module.exports = router;