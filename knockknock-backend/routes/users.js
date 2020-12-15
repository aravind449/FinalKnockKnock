var express = require('express');
var router = express.Router();
var controllers = require("../controllers/users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/technician-registration", controllers.technicianRegistration);
router.post("/customer-registration", controllers.customerRegistration);
router.post("/customer-login", controllers.customerLogin);
router.post("/technician-login", controllers.technicianLogin);
router.post("/otp", controllers.userOtp);
router.post("/fotp", controllers.userOtp);
router.post("/forgot-password", controllers.forgotPassword);
router.post("/change-password", controllers.changePassword);
router.post("/acceptBooking", controllers.acceptBooking);
router.post("/decline", controllers.declineBooking);
router.get("/list-book", controllers.bookCustomers);
router.get("/list-user", controllers.allUserList);

module.exports = router;
