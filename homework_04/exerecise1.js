const {Observable} = require("rxjs");
const os = require('os');

Observable.create(function checkSystem(){
   
        console.log("Checking your system...");
        const cpus = os.cpus().length;
        const mem = os.totalmem()/(1024/1024/1024);
    
        if(mem < 4) {
            console.log("this app needs atleast 4 gig of ram");
            return;
        }
        if(cpus <= 2) {
            console.log("Processor is not supported");
            return;
        }
       
        console.log("System is checked successfully");

}).subscribe();
