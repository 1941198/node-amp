const amp = require('..')
var buffArr = new Array(255);
for(let i =0; i<255;i++) {
    let id = i+1;
    buffArr[i] = Buffer.from( id+":abcd" )
}
var bin = amp.encode(buffArr);
var msg = amp.decode(bin);


console.log(msg.length )
console.log(msg[0] )
console.log(msg[254].toString() )