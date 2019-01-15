// Using ES6 feature without for
String.prototype.filterWords = function (words) {
    let output = this.split(' ');
    words.map(input =>
        output = output.map(word => word.replace(input, '*')));
    return output.join(' ');
};
console.log('This house is nice'.filterWords(['house', 'nice']));

// Using Promise

String.prototype.filterWords2 = function (words) {
    var output = this.split(' ');
    return new Promise((resolve, reject) => {
        words.map(input =>
            output = output.map(word => word.replace(input, '*')));
        resolve(output.join(' '));
    });
};

let word = ["house", "nice"];
String.prototype.filterWords2(word)
    .then(data => console.log(data))
    .catch(err => console.error(err));

console.log('This house is nice'.filterWords2(word));

// Async/Await

async function asyncDemo() {
    try {
        const output = await 'This house is nice'.filterWords2(word);
        console.log(output);
    } catch (err) {
        console.error(err);
    }
}
asyncDemo();