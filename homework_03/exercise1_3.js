const dns = require("dns");
const util = require('util');

async function dnsResolve(){
    try {
        const siteResolve = util.promisify(dns.resolve4);
        const ip = await  siteResolve("www.mum.edu");
        
        console.log(ip);
    } catch (err) {
        console.log(err)
    }
  
}

dnsResolve();