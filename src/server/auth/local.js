const jwt = require('jwt-simple');
const moment = require('moment');

const secret = '00000';

function encodeToken() {
  const payload = {
    exp: moment().add(1, 'month'),
    iat: moment().format(),
    sub: 'Adam'
  };
  return jwt.encode(payload, secret);
}

function decodeToken(token) {
  return jwt.decode(token, secret);
}

var test = encodeToken({id:1})
console.log('encode: ', encodeToken());
console.log('decode: ', decodeToken(test));

/*
1. pull in moment
2. create the iat
3. create the exp
4. use a dummy user id
5. test!
*/
