var mysqlConnectionObject = require("../mysqlconnection");

exports.getServiceCategory = (req, res) => {

    console.log("inside router")
    let SQLQuery =`SELECT * FROM knockknock.techniciancategory;`;
    mysqlConnectionObject.query(SQLQuery, (err, result) => {
        if (err) {console.log(err);}
        else {
            res.status(200).json(result);
        }
    });
};
exports.getTechnicians = (req, res) => {

    console.log("inside router")
    let SQLQuery =`SELECT * FROM knockknock.technician;`;
    mysqlConnectionObject.query(SQLQuery, (err, result) => {
        if (err) {console.log(err);}
        else {
            res.status(200).json(result);
        }
    });
};
exports.getTechniciansById = (req, res) => {

    console.log("inside router2")
    if (req.body) {
        console.log('hhhh'+req.body.id);
        let SQLQuery =`SELECT * FROM knockknock.technician WHERE TechnicianCategoryId LIKE '%${req.body.id}%';`;
        mysqlConnectionObject.query(SQLQuery, (err, result) => {
            if (err) {console.log(err);}
            else {
                res.status(200).json(result);
            }
        });
    } else {
        res.status(400).json({msg: "search not found"});
    }
};
exports.getServiceCategoryRegex = (req, res) => {

    console.log("inside router3")
    if (req.body) {
        let SQLQuery =`SELECT * FROM knockknock.techniciancategory WHERE CategoryName LIKE '%${req.body.searchValue}%';`;
        mysqlConnectionObject.query(SQLQuery, (err, result) => {
            if (err) {console.log(err);}
            else {
                res.status(200).json(result);
            }
        });
    } else {
        res.status(400).json({msg: "search not found"});
    }
};



exports.addBooking = (req, res) => {
    if (req.body) {
       
       
        let SQLQuery = `INSERT INTO booking (CustomerId,TechnicianId,Dateofbook,Stat) VALUES (?,?,?,?)`;
        let fillSQL = [req.body.customerId,req.body.technicianId,req.body.dateofbook,req.body.stat]
        mysqlConnectionObject.query(SQLQuery, fillSQL, (err, result) => {
            if (err) {console.log(err);}
            else {
                res.status(200).json({msg: "Booking Successfull"});
               
            }
        });
    } else {
        res.status(404).json({msg: "Form data not found."});
    }
};


exports.getComments = (req, res) => {

    
    let SQLQuery =`SELECT * FROM knockknock.comments;`;
    mysqlConnectionObject.query(SQLQuery, (err, result) => {
        if (err) {console.log(err);}
        else {
            res.status(200).json(result);
        }
    });
};
exports.getCommentsByTechId = (req, res) => {

    
    if (req.body) {
       
        let SQLQuery =`SELECT * FROM knockknock.comments WHERE TechnicianId LIKE '%${req.body.id}%';`;
        mysqlConnectionObject.query(SQLQuery, (err, result) => {
            if (err) {console.log(err);}
            else {
                res.status(200).json(result);
            }
        });
    } else {
        res.status(400).json({msg: "search not found"});
    }
};

exports.getBookingDetails = (req, res) => {
    
    console.log("inside router booking" + req.body.searchValue);
    if (req.body) {
        let SQLQuery = `SELECT * FROM knockknock.Booking WHERE TechnicianID LIKE '%${req.body.searchValue}%';`;
        // 
        mysqlConnectionObject.query(SQLQuery, (err, result) => {
            if (err) { console.log(err); }
            else {
                res.status(200).json(result);
            }
        });


    } else {
        console("99999");
        res.status(400).json({ msg: "search not found" });
    }
};
exports.getBookingCDetails = (req, res) => {
    
    console.log("inside router booking" + req.body.searchValue);
    if (req.body) {
        let SQLQuery = `SELECT * FROM knockknock.Booking WHERE CustomerID LIKE '%${req.body.searchValue}%';`;
        // 
        mysqlConnectionObject.query(SQLQuery, (err, result) => {
            if (err) { console.log(err); }
            else {
                res.status(200).json(result);
            }
        });


    } else {
        console("99999");
        res.status(400).json({ msg: "search not found" });
    }
};


exports.allTechList = (req, res) => {

    console.log("inside router all tech list")
    let SQLQuery = `SELECT * FROM knockknock.technician;`;
    mysqlConnectionObject.query(SQLQuery, (err, result) => {
        if (err) { console.log(err); }
        else {
            res.status(200).json(result);
        }
    });
};

exports.techNameById = (req, res) => {

    console.log("inside router all tech id byname")
    let SQLQuery = `SELECT * FROM knockknock.technician where FirstName LIKE '%${req.body.searchValue}%';`;
    mysqlConnectionObject.query(SQLQuery, (err, result) => {
        if (err) { console.log(err); }
        else {
            res.status(200).json(result);
        }
    });
};

exports.custNameById = (req, res) => {

    console.log("inside router all tech id byname")
    let SQLQuery = `SELECT * FROM knockknock.customer where FirstName LIKE '%${req.body.searchValue}%';`;
    mysqlConnectionObject.query(SQLQuery, (err, result) => {
        if (err) { console.log(err); }
        else {
            res.status(200).json(result);
        }
    });
};
