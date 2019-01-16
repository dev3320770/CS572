const dns = require("dns");
const util = require('util');

const dnsResolve = util.promisify(dns.resolve4);
dnsResolve('www.mum.edu')
    .then(ip => console.log(ip))
    .catch(err => console.log(err));