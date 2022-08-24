// Code your solutions in this file

let msg = [];

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        msg.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return msg;
}
writeCards(msg)

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

countDown(num);