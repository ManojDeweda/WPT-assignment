const express = require('express');
const app = express();

const mysql = require('mysql2');

app.use(express.static("sf"));



app.get('/areaname', (req, resp) => {
    console.log("ajax function called");

    const mysql = require('mysql2');

    let dbparams = {
        host: 'localhost',
        user: 'manoj',
        password: 'welcome123',
        database: 'dhar',
        port: 3306
    };
    const con = mysql.createConnection(dbparams);
    let output = { status: false, detail: { pincode: 0, areaname: "" } }
    let pincode = req.query.pin;
    console.log("recived input ="+pincode);


    con.query('select areaname from location where pincode = ?', [pincode],
        (error, rows) => {
            if (error) {
                console.log(error);
            }
            else {
                if (rows.length > 0) {
                    output.status = true;
                    output.detail = rows[0];
                }
                else {
                    console.log("No area with this pin");
                }
            }
            console.log(output);
            resp.send(output);
        });

});

app.listen(900, function () {
    console.log("server listening at port 900...");
  });