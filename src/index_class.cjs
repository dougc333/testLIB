const user = require('./user.cjs')
//console.log("user:",user.getName(), "age:", user.getAge())

const old_bob = new user("bob",100, "bob@foo.com")
console.log("old_bob:",old_bob)
