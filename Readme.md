
# amp

  copy from tj/amp, 
  Abstract Message Protocol codec and streaming parser for nodejs.
 
## Installation

```
$ npm install amp
```

## Example

```js
var bin = amp.encode([new Buffer('hello'), new Buffer('world')]);
var msg = amp.decode(bin);
console.log(msg);
```
```js
//The Buffer number of parameters 255
var buffArr = new Array(255);
for(let i =0; i<255;i++) {
    let id = i+1;
    buffArr[i] = Buffer.from( id+":abcd" )
}
var bin = amp.encode(buffArr);
var msg = amp.decode(bin);
console.log(msg.length )
console.log(msg[0] )
console.log(msg[254].toString() ) //255:abcd
```

## Protocol

  AMP is a simple versioned protocol for framed messages containing
  zero or more "arguments". Each argument is opaque binary, thus you
  may use JSON, BSON, msgpack and others on top of AMP. Multiple argument
  support is used to allow a hybrid of binary/non-binary message args without
  requiring higher level serialization libraries like msgpack or BSON.

  All multi-byte integers are big endian. The `version` integers
  are stored in the first byte, `argc` integers
  are stored in the second byte,followed by a sequence of zero or more
  `<length>` / `<data>` pairs, where `length` is a 32-bit unsigned integer.

```
    0      1        2 3 4 5<length>    ...
+-------+--------+-------------------+------------+------------+
| <ver> | <argc> | <length>          | <data>     | additional arguments
+-------+--------+-------------------+------------+------------+
```

# License

  MIT