console.log('task-4.js');
//! document.getElementById("task-3/1").innerHTML = 
const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

 const getTotalBalanceByGender =(users, gender) => clients
 .filter(client=> client.gender===gender).reduce((total, user)=>{ return total + user.balance},0) 


console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863

document.getElementById("task-4/1").innerHTML = getTotalBalanceByGender(clients, "male")
document.getElementById("task-4/2").innerHTML = getTotalBalanceByGender(clients, "female")