const EventEmitter = require('events')
class Gym extends EventEmitter {
    constructor() {
        super();
        this.msg = "Athlete is working out";
    }
    workOut() {
        setInterval(() => {
            this.emit('boom', this.msg);
        }, 1000);
    }
}
const gym = new Gym();
gym.on('boom', (msg) => {
    console.log(`${msg}`)
})
gym.workOut();