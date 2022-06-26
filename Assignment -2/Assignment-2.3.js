const mysql = require('mysql2');

let dbparams = {
    host: 'localhost',
    user: 'manoj',
    password: 'welcome123',
    database: 'dhar',
    port: 3306
};

const con = mysql.createConnection(dbparams);



//-------------------------------(i.insert in table)-------------------------------
    let input = {resourceid: 4, resourcename: 'xyz', status: true}
    

    con.query('insert into resource(resourceid, resourcename, status) values (?,?,?)', 
            [input.resourceid, input.resourcename, input.status], 
            (error, resp) => {
                if(error){
                    console.log("error  "+error);
                }
                else{
                    if(resp.affectedRows > 0){
                        console.log(" Insertion done in table");
                    }
                    else{
                        console.log("insertion in table failed");
                    }
                }
            });


//-------------------------------(ii.update in table)---------------------------
    let status = false;
    let resourceid = 2;
    con.query('update resource set status = ? where resourceid = ?', [status, resourceid],
            (error, resp) => {
                if(error){
                    console.log(" error  "+error);
                }
                else{
                    if(resp.affectedRows > 0){
                        console.log("table Updated successfully");
                    }
                    else{
                        console.log("Update  failed");
                    }
                }
            });

// ---------------------------------(iii.multiselect select)-------------------------
let status2=true;

    con.query('select * from resource where status=?', [status2], 
    (error, rows) => {
        if(error){
            console.log(error);
        }
        else{
            if(rows.length > 0){
                console.log("resources Details found for status ="+status2);
                for(let i=0; i<rows.length; i++){
                    console.log(rows[i]);
                }
            }
            else{
                console.log("No resource found");
            }
        }
    });
// ----------------------------------(iv.single select)-------------------------
    let resourceid2 = 3;
    con.query('select * from resource where resourceid = ?', [resourceid2], 
        (error, rows) => {
            if(error){
                console.log(error);
            }
            else{
                if(rows.length > 0){
                    console.log("resource found with resourceid : "+resourceid2);
                    console.log(rows[0]);
                }
                else{
                    console.log("No resource found with resourceid : "+resourceid2);
                }
            }
        });


