const express = require('express');
const app = express();

const mysql = require('mysql2');

app.use(express.static("sf"));



app.get('/balance', (req, resp) => {
    console.log("ajax function called");
   

    let dbparams = {
        host: 'localhost',
        user: 'manoj',
        password: 'welcome123',
        database: 'dhar',
        port: 3306
    };
    const con = mysql.createConnection(dbparams);

    let output = { status: false, detail:{ cacno: 0,cname:"",cbalence: 0.0 } }
    let acno = req.query.acno;
    console.log(acno);
    //select cbalence from account where caccno=980211111111111;
    con.query('select cbalence from account where caccno = ?', [acno],
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
                    console.log("No account with this Account No.");
                }
            }
            console.log(output);
            resp.send(output);
        });

});

app.listen(900, function () {
    console.log("server listening at port 900...");
  });