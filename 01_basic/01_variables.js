const accountId = 144553;
let accountEmail = "raghav@google.com";
var accountPassword = "12345";
accountCity = "Patiala";
let accountState;

// accountId = 2;   //in const we cannot change variable's value
console.log(accountId);

accountEmail = "rn@rn.com";
accountPassword = "54321";
accountCity = "Chandigarh";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);