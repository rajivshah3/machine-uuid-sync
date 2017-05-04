
module.exports['id'] = function(test) {
  const getid = require("../index");
  id1 = getid();
  id2 = getid();

  if (!id1) { test.ok(false, "no id"); }
  console.log("UUID: ", id1);
  test.equals(id1, id2, 'same');
  return test.done();
};
