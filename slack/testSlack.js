require("must/register");
var _ = require('lodash');
var slack = require("./slack");
var User= slack.User;
describe('Easy - needs a single lodash function, with optional scalar arguments', function () {
  it('#1', function () {
    var input = new User(0,'Charles');
    var expected = 'Charles';
    var actual = input.name;   // <----- Edit this line
    actual.must.eql(expected);
  });
  });