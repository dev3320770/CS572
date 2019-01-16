const dns = require("dns");

dns.resolve4("www.mum.edu", (err, data)=>{
    console.log(data);
});