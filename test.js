const fs = require('fs');


const filepath = '';
const fileReader = fs.createReadStream(filepath, {encoding:'UTF-8'})
let check = false;

fileReader.on("open", function(data){
    if(data.match(/history/ !== null)){
        check= true;
    }
})

fileReader.on("end", (err) => {
    if(err) return err;
    console.log("term found");
})