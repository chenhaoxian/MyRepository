db.mydb.insert({"name":"hyman","age":100});
db.mydb.find();

db.mydb.update({"name":"hyman"},{"name":"hyman2"});

db.mydb.update()

db.mydb.insert({"name":"hyman1","age":1});
db.mydb.insert({"name":"hyman2","age":2});
db.mydb.insert({"name":"hyman3","age":3});
db.mydb.insert({"name":"hyman4","age":4});
db.mydb.insert({"name":"hyman5","age":5});
db.mydb.insert({"name":"hyman6","age":6});

//skip

//全文检索
db.stores.insert(
   [
     { _id: 1, name: "Java Hut", description: "Coffee and cakes" },
     { _id: 2, name: "Burger Buns", description: "Gourmet hamburgers" },
     { _id: 3, name: "Coffee Shop", description: "Just coffee" },
     { _id: 4, name: "Clothes Clothes Clothes", description: "Discount clothing" },
     { _id: 5, name: "Java Shopping", description: "Indonesian goods" }
   ]
);

db.stores.createIndex( { name: "text", description: "text" } );//建索引 为排序
db.stores.find( { $text: { $search: "java coffee shop" } } );







