const mongoose =require('mongoose')
module.exports={
    connect:()=>{
        const MongoUri ="mongodb+srv://kuwarp:ashu7017@bookstore.mt4fni0.mongodb.net/?retryWrites=true&w=majority"

        mongoose.connect(MongoUri,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }).then(()=>{
            console.log('Connected to DB');
        }).catch((error)=>{
            console.log(`cought an ${error}`);
        })
    }
}