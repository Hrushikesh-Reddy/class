/* 

-> mongosh
-> show dbs
 { create B03-db1 in Compass }
-> use B03-db1
-> show collections
-> db.abc.insertOne({name:"Hrushikesh", age:'19'})
-> db.abc.find().pretty()
 { insert one document from Compass}
-> db.abc.find().pretty()
-> db.abc2.insertMany([{name:"Sara", roll:"19" }, {name:"Sara1", roll:"20"}])
-> db.abc2.remove({"name":"Sara"})
-> db.abc.drop()
-> show collections
-> db.abc2.update({"name":"Sara1"}, {$set:{"name":"Hrushikesh"}})

*/