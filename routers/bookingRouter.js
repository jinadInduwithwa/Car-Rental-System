const express = require('express');

const bookingController = require('../controllers/bookingController');
const { identifierUser, identifierAdmin } = require('../middlewares/identification');

const router = express.Router();

router.get('/all-booking', bookingController.getBooking);
// router.get('/single-booking', authController.signin);
// router.post('/create-booking',identifierUser, authController.signout);

// router.put('/update-booking',identifierUser, authController.sendVerificationCode);
// router.delete('/delete-booking',identifierUser, authController.verifyVerficationCode);


module.exports = router;