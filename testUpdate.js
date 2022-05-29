var MongoClient=require('mongodb').MongoClient;
 
MongoClient.connect("mongodb+srv://sa:sa@cluster0.0qrl0.mongodb.net/CustomSystem?retryWrites=true&w=majority", function(err,db){
   db.collection('Orders',function(err,collection){
   //collection.update
   //第一個參數是要更新的條件，第二個參數$set:更新的欄位及內容.
   //第三個參數writeConcern，第四個參數執行update後的callback函式
   collection.update({altert_date: '2022-05-25T10:00'},{ $set: { customer_id:"乾洗店店家"} },
     {w:1}, function(err, result){
         if(err) throw err;
         console.log('Document Updated Successfully');
        });
    });
    db.close(); //關閉連線
});
