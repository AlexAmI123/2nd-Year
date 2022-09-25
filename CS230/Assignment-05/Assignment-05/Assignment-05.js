/* 
Windows 10
Author : Alex Majka 20429324
Written up on the most recent version of Brackets.
tested using nodejs with MongoDB Atlas

Some of this code is based on John Keating's test_crud_docs.js
Alot of this code was also made with the help of w3 schools:
https://www.w3schools.com/nodejs/nodejs_mongodb.asp


This code runs occasionally due to the fact that for some weird reasons my async functions run not in order as they should. For example the delete function might run first and return an error istead of the insert function. Similarly the joins might run first before the inserts(this does not return errors). The main cause of this error is the delete statements, they are commented out for marking reasons, during testing they can be uncommented to check how this error occurs
*/


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// const connect = require("./connect");       // url from connect module
const connect = require("./connect_atlas_dummy"); // url from connect module
const client = new MongoClient(connect.database.url, { useUnifiedTopology: true } );

// database name
const dbName = 'assignment-05';
// Use connect method to connect to the server
client.connect(function(err) {
  // using the assert module for testing
  assert.equal(null, err);
  console.log("Connected successfully to server");

  // use this database
  const db = client.db(dbName);
});
////////////////////////////////////////////////////////////////////////////////////////
    //Calling all the functions using async functions.
    run();
    async function run(){ 
    await insertCustomer();
    await findCustomer();
    await updateCustomer();
    await deleteCustomer();
    await showDB();
    await dropAll();
    }
////////////////////////////////////////////////////////////////////////////////////////
    //Create functionality of the CRUD
    //creating entities in the customers Collection
    async function	insertCustomer(){
    var url = "mongodb+srv://admin:admin@cluster0.l4jeb.mongodb.net/cluster0?retryWrites=true&w=majority";
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myobj = [
    {"custid":"1","title":"Ms","firstname":"Alondra","lastname":"Dunne","mobile":"0849937354","email":"Alondra@gmail.com"},
    {"custid":"2","title":"Ms","firstname":"Iarlaith","lastname":"Kelly","mobile":"0843977120","email":"iarlaith.kelly@fuchsiamail.ie"},

    {"custid":"3","title":"Ms","firstname":"Brigid","lastname":"Flynn","mobile":"0844020733","email":"brigid.flynn@silvermail.ie"},
      
    {"custid":"4","title":"Ms","firstname":"Jessica","lastname":"Sloane","mobile":"789456123","email":"Jessica.s@gmail.com"},
      
    {"custid":"5","title":"Ms","firstname":"Jane","lastname":"Doe","mobile":"456789123","email":"Jane.d@gmail.com"},
  
    {"custid":"6","title":"Mr","firstname":"Davin","lastname":"O'Toole","mobile":"321654987","email":"Davin@gmail.com"},
  
    {"custid":"7","title":"Mr","firstname":"Derek","lastname":"Kaines","mobile":"124578963","email":"Derek.K@gmail,com"},
 
    {"custid":"8","title":"Mr","firstname":"Tom","lastname":"Cruise","mobile":"635241789","email":"Tom.C@gmail.com"},

    {"custid":"9","title":"Mr","firstname":"Samuel","lastname":"Jackson","mobile":"741859632","email":"Samuel.J@gmail.com"},

    {"custid":"10","title":"Mr","firstname":"Michael","lastname":"Jackson","mobile":"748965123","email":"Michael.J@gmail,com"},
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted to Customers: " + res.insertedCount);
    db.close();
    });
});        
        

    //creating entities in the Addresses collection
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myobj = [
    {"addid":"1", "add1":"25 Ringhaddy Rd.", "add2":"", "town":"Callan", "countycity":"Kilkenny", "eircode":""},
    
    {"addid":"2", "add1":"6 Blach Archwood", "add2":"", "town":"Kells", "countycity":"Meath", "eircode":""},
    
    {"addid":"3", "add1":"62-65 Scarlet St.", "add2":"", "town":"Drogheda", "countycity":"Louth", "eircode":""},
    
    {"addid":"4", "add1":"28 James Everett Park", "add2":"", "town":"Bray", "countycity":"Wicklow", "eircode":""},
      
    {"addid":"5", "add1":"25-27 Bridge St.", "add2":"", "town":"Portadown", "countycity":"Armagh", "eircode":""},
      
    {"addid":"6", "add1":"Unit 3, Knock House Business Park", "add2":"", "town":"Waterford", "countycity":"Waterford", "eircode":""},
      
    {"addid":"7", "add1":"12 Noun Lane", "add2":"", "town":"Dublin", "countycity":"Dublin", "eircode":""},
      
    {"addid":"8", "add1":"10 Maynooth Rd.", "add2":"", "town":"Kilcock", "countycity":"Kildare", "eircode":"w23 de89"},
      
    {"addid":"9", "add1":"25 Brick Road", "add2":"", "town":"Maynooth", "countycity":"Kildare", "eircode":""},
      
    {"addid":"10", "add1":"36 Avenue Rd.", "add2":"", "town":"Celbridge", "countycity":"Leinster", "eircode":""},
    ];
    dbo.collection("addresses").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted to Addresses: " + res.insertedCount);
    db.close();
    });
});    
        
    //creating entities in the Phones collection
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myobj = [
    {"pid":"1", "manunfacturer":"Xiaomi", "model":"Mi Mix 3 5g", "price":"300"},
        
    {"pid":"2","manunfacturer":"Samsung", "model":"S21", "price":"500"},
        
    {"pid":"3","manunfacturer":"Huawei", "model":"P30", "price":"300"},
        
    {"pid":"4","manunfacturer":"Huawei", "model":"P30 Pro", "price":"350"},
        
    {"pid":"5","manunfacturer":"LG", "model":"K61", "price":"220"},
        
    {"pid":"6","manunfacturer":"LG", "model":"Velvet 5g", "price":"450"},
        
    {"pid":"7","manunfacturer":"Iphone", "model":"8", "price":"220"},
        
    {"pid":"8","manunfacturer":"Iphone", "model":"X", "price":"290"},
        
    {"pid":"9","manunfacturer":"Iphone", "model":"11", "price":"370"},
        
    {"pid":"10","manunfacturer":"Iphone", "model":"12", "price":"600"},
    ];
    dbo.collection("phones").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted to Phones: " + res.insertedCount);
    db.close();
  });
});
    //creating entities in the orders collection
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myobj = [
    {"pid":"1", "custid":"1,2"},
        
    {"pid":"2", "custid":"2"},
        
    {"pid":"3", "custid":"3"},
        
    {"pid":"4", "custid":"5"},
        
    {"pid":"5", "custid":"4"},
        
    {"pid":"6", "custid":"3"},
        
    {"pid":"7", "custid":"6,7"},
        
    {"pid":"8", "custid":"8"},
        
    {"pid":"9", "custid":"9"},
        
    {"pid":"10", "custid":"10"},
    ];
    dbo.collection("orders").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted to orders: " + res.insertedCount);
    db.close();
  });
});
    //joining the different fields relevant.
        
    //joining customers and addresses
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    dbo.collection('addresses').aggregate([
    { $lookup:
       {
         from: 'customers',
         localField: 'addid',
         foreignField: 'custid',
         as: 'Address'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log("Addresses and customers joined.");
    db.close();
  });
});
    //joining phones and orders
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    dbo.collection('phones').aggregate([
    { $lookup:
       {
         from: 'orders',
         localField: 'pid',
         foreignField: 'pid',
         as: 'Phones'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log("Phones and Orders joined.");
    db.close();
  });
});
    // joining orders and customers
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'customers',
         localField: 'pid',
         foreignField: 'custid',
         as: 'Orders'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log("Orders and customers joined.");
    db.close();
  });
});
    return 1;
}
////////////////////////////////////////////////////////////////////////////////////////
    //Retrieve/Search element of CRUD
    async function findCustomer(){
    var url = "mongodb+srv://admin:admin@cluster0.l4jeb.mongodb.net/cluster0?retryWrites=true&w=majority";
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    dbo.collection("customers").find({}).toArray(function(err, result) {
    //get the random id value of customers
    var randUser = result[Math.floor((Math.random()*result.length))];
    dbo.collection("customers").find({custid:randUser.custid}).toArray(function(err, result) {
      if (err) throw err;
    //log the selected random customer
    var query = { custid: result.toString()};
    dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
    });
  });
});
});  
    return 1;
}
    
////////////////////////////////////////////////////////////////////////////////////////
    //Update element of CRUD
    async function updateCustomer(){
    var url = "mongodb+srv://admin:admin@cluster0.l4jeb.mongodb.net/cluster0?retryWrites=true&w=majority";
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    dbo.collection("customers").find({}).toArray(function(err, result) {
    //get the random id value of customers    
    var randUser = result[Math.floor((Math.random()*result.length))];
    dbo.collection("customers").find({custid:randUser.custid}).toArray(function(err, result) {
    if (err) throw err;
    //query the selected random customer and update    
    var query = { custid: result.toString()};
    dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
        
    var newvalues = { $set: {title: "Mx", phone: "122222222", email:"A.Here@here.ie" } };
    dbo.collection("customers").updateOne(query, newvalues, function(err, res) {    
      
    console.log(result);
    db.close();
    });
  });
});
});      
});
    return 1;
}
    
////////////////////////////////////////////////////////////////////////////////////////
    //Delete element of CRUD
    async function deleteCustomer(){
    var url = "mongodb+srv://admin:admin@cluster0.l4jeb.mongodb.net/cluster0?retryWrites=true&w=majority";
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myquery = { email: 'Davin@gmail.com', phone: '321654987', fname: 'Davin' };
    dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 element deleted");
    db.close();
  });
});
    return 1;
}
////////////////////////////////////////////////////////////////////////////////////////
    //showcase the db
    async function showDB(){
    var url = "mongodb+srv://admin:admin@cluster0.l4jeb.mongodb.net/cluster0?retryWrites=true&w=majority";
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
    return 1;
}
////////////////////////////////////////////////////////////////////////////////////////
    //drop all collections in order to not create duplicates when programme is re-ran
    
    async function dropAll(){  
        /*
    var url = "mongodb+srv://admin:admin@cluster0.l4jeb.mongodb.net/cluster0?retryWrites=true&w=majority";
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    dbo.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    dbo.collection("addresses").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    dbo.collection("phones").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});
    await MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    dbo.collection("orders").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});
    */
    return 1;
}
/*
Database Design:
I designed this db by using 4 different collections; customers, addresses, phones and orders. I then joined these collections where appropriate(AKA joining customers and addresses, joining phones and orders, joining orders and customers)
I assigned id's to all elements in the collections so that they can be joined easily and queried with no hassle.
*/