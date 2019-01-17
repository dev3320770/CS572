const EventEmitter = require('events')
class Gym extends EventEmitter {
    constructor() {
        super();
    }
    work() {
        setInterval(() => {
            this.emit('boom');
        }, 1000);
    }
}
const gym = new Gym();
gym.on('boom', () => console.log('Athlete is working out'));
gym.work();