
var name_s;
var cost;
var sp;
require(['mysql'],function(mysql){

var con = createConnection({
  host: "localhost",
  user: "root",
  password: "Ray_mysql1",
  database: "shopping_ecart"
});

con.connect(function(err) {
  if (err) throw err;
  sql='SELECT name,cost FROM shop_ecart where upc12="11111065925"';
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    sp=Object.entries(result[0])
    name_s=sp[0][1];   
    cost=sp[1][1]; 
    console.log(name_s,cost)
    /*Products.push({
        id: (idc++).toString(),
      name: name_s.toString(),
      price: cost.toString(),
      quantity: '1'
    })*/ 
  });
});
});