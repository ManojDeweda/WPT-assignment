const mysql = require('mysql2');

let dbparams = {
    host: 'localhost',
    user: 'manoj',
    password: 'welcome123',
    database: 'dhar',
    port: 3306
};

const con = mysql.createConnection(dbparams);


//-----------------------(i. insertion in table )-----------------------------
    let input = {itemno: 4, itemname: 'beg', price: 200, category: 'stationery'}
    

    con.query('insert into item(itemno, itemname, price, category) values (?,?,?,?)',  
            [input.itemno, input.itemname, input.price, input.category], 
            (error, resp) => {
                if(error){
                    console.log("Some error occurred "+error);
                }
                else{
                    if(resp.affectedRows > 0){
                        console.log("Objects Inserted successfully");
                    }
                    else{
                        console.log("insert command failed");
                    }
                }
            });


//-----------------------------(ii.update in table)-------------------------------
    let category = 'stationery';
    let itemno = 2;
    let price = 15;
    con.query('update item set category = ?,price=? where itemno = ?', [category,price ,itemno],
            (error, resp) => {
                if(error){
                    console.log("Some error occurred "+error);
                }
                else{
                    if(resp.affectedRows > 0){
                        console.log("Object Updated successfully");
                    }
                    else{
                        console.log("Update command failed");
                    }
                }
            });
//------------------------(iii.multiselect)-----------------------------------
let category2="stationery";
    con.query('select * from item where category = ?', [category2], 
    (error, rows) => {
        if(error){
            console.log(error);
        }
        else{
            if(rows.length > 0){
                console.log("Itemdetails found for category="+category2);
                for(let i=0; i<rows.length; i++){
                    console.log(rows[i]);
                }
            }
            else{
                console.log("No Item found");
            }
        }
    });

//----------------------- (iv. single select)-----------------------------------
    let itemno2 = 3;
    con.query('select * from item where itemno = ?', [itemno2], 
        (error, rows) => {
            if(error){
                console.log(error);
            }
            else{
                if(rows.length > 0){
                    console.log("Itemdetails found for itemno : "+itemno2);
                    console.log(rows[0]);
                }
                else{
                    console.log("No Itemdetails found with itemno : "+itemno2);
                }
            }
        });


