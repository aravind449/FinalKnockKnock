var express = require("express");
var router = express.Router();
var controller = require("../controllers/services");

router.get("/list-service-category", controller.getServiceCategory);
router.post("/list-techniciansbyid", controller.getTechniciansById);
router.get("/list-technicians", controller.getTechnicians);
router.post("/add-booking", controller.addBooking);
router.get("/list-comments", controller.getComments);
router.post("/list-commentsbytechid", controller.getCommentsByTechId);

router.post("/list-service-category-regex", controller.getServiceCategoryRegex);

//added below varlock	
router.post("/list-booking-details", controller.getBookingDetails);
router.post("/list-bookingc-details", controller.getBookingCDetails);


router.get("/list-tech", controller.allTechList);

router.post("/techidbyname", controller.techNameById);
router.post("/custbyname", controller.custNameById);

module.exports = router;

