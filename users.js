const users = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    email: "johndoe@example.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    email: "janesmith@example.com"
  },
  {
    id: 3,
    name: "Mark Johnson",
    age: 35,
    email: "markjohnson@example.com"
  },
  {
    id: 4,
    name: "Sarah Williams",
    age: 28,
    email: "sarahwilliams@example.com"
  },
  {
    id: 5,
    name: "Michael Brown",
    age: 32,
    email: "michaelbrown@example.com"
  },
  {
    id: 6,
    name: "Emily Davis",
    age: 27,
    email: "emilydavis@example.com"
  },
  {
    id: 7,
    name: "David Wilson",
    age: 40,
    email: "davidwilson@example.com"
  },
  {
    id: 8,
    name: "Olivia Martin",
    age: 29,
    email: "oliviamartin@example.com"
  },
  {
    id: 9,
    name: "Daniel Taylor",
    age: 33,
    email: "danieltaylor@example.com"
  },
  {
    id: 10,
    name: "Sophia Anderson",
    age: 31,
    email: "sophiaanderson@example.com"
  }
];

// console.log(users.filter(users=>users.age>30));

// console.log(users.slice(1,3));

// console.log(users.splice(1, 2));

// const pos = users.findIndex(user => user.id === 2)
// console.log(pos);
// if(pos != -1){
//     users.splice(pos,1)
// }

// console.log(users);

// const newUsers = users.map(user => {
//     return {
//       ...user,
//       age: user.age + 2
//     };
//   });
  
//   console.log(newUsers);


// const newUsers =  users.forEach((user, index) => {
//     users[index] = {
//       ...user,
//       age: user.age + 2
//     };
//   });
  
// console.log(newUsers);

// const newUsers= users.sort((a,b) => a.age - b.age)
// console.log(newUsers);

// const newUsers= users.reduce((acc,user) => acc+ user.age ,0)

// const newUsers = users.reduce((acc, user) => {
//     return [...acc, user.name.split(' ')[0]];
//   }, []);
  
// console.log(newUsers);

console.log(users);

const sliced = users.reduce((acc, user, index) => {
    if (index >= 0 && index < 1) {
      return [...acc, user];
    }
    return acc;
  }, []);
  
console.log(sliced);




const spliced = users.reduce