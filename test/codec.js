
var amp = require('..');

describe('amp.encode(args...)', function(){
  it('should support no args', function(){
    var bin = amp.encode([]);
    var msg = amp.decode(bin);

    msg.should.eql([]);
  })

  it('should support multiple args', function(){
    var bin = amp.encode([new Buffer('hello'), new Buffer('world')]);
    var msg = amp.decode(bin);

    msg.should.have.length(2);
    msg[0].toString().should.equal('hello');
    msg[1].toString().should.equal('world');
  })

  it('should support multiple args length<256', function(){
    var buffArr = new Array(255);
    for(let i =0; i<255;i++) {
        let id = i+1;
        buffArr[i] = Buffer.from( id+":abcd" )
    }
    var bin = amp.encode(buffArr);
    var msg = amp.decode(bin);

    msg.should.have.length(2);
    msg[0].toString().should.equal('hello');
    msg[1].toString().should.equal('world');
    msg.length.should.equal(255)
  })
})