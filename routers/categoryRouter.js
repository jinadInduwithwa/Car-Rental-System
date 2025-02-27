const express = require('express');

const categoryController = require('../controllers/categoryController');
const { identifierUser, identifierAdmin } = require('../middlewares/identification');

const router = express.Router();

router.get('/all-category', categoryController.getCategory);
// router.get('/single-vehicle', vehicleController.getSingleVehicles);
// router.post('/create-vehicle', identifierAdmin, vehicleController.createVehicle);

// router.put('/update-vehicle',identifierAdmin, vehicleController.updateVehicle);
// router.delete('/delete-vehicle',identifierAdmin, vehicleController.deleteVehicle);


module.exports = router;