const jwt = require('jwt-simple');

const secret = '00000';
const payload = {'test':'test'}

function encodeToken(payload) {
  return jwt.encode(payload, secret);
}

function decodeToken(token) {
  return jwt.decode(token, secret);
}

const key = encodeToken(payload);
const decode = decodeToken(key);

console.log('key: ', key);
console.log(decode);
