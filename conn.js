const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/DSI", {
   useNewUrlParser:true
 
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
});

