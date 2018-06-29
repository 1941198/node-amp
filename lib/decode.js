
/**
 * Decode the given `buf`.
 *
 * @param {Buffer} buf
 * @return {Object}
 * @api public
 */

module.exports = function(buf){
  var off = 0;

  // unpack meta
  var version = buf[off++];
  var argv = buf[off++];
  var args = new Array(argv);

  // unpack args
  for (var i = 0; i < argv; i++) {
    var len = buf.readUInt32BE(off);
    off += 4;

    var arg = buf.slice(off, off += len);
    args[i] = arg;
  }

  return args;
};