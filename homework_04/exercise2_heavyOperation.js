const fs = require("fs");
const path = require("path");

const readFile = ()=>{
    const data = fs.readFileSync(path.join(__dirname, "./file.txt"), 'utf8');
    return data;
}

process.on("message", ()=>{
    const data = readFile();
    process.send(data);
})
