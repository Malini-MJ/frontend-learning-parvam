const users =[
    { name:"sharadha",active:false},
        {name:"sidharth",active:false},
        {name:"ajay",active:false},
    
];
users.forEach((user)=>(user.active=true));
console.log(users);


const userdetails = [
  { name: "alice", email: "bnnm@mail" },
  { name: "bob", email: "567m@mail" },
  { name: "charlie", email: "b4ghdgfnm@mail" },
  { name: "mondes", email: "bngfgeam@mail" }
];

const notifications = [];

userdetails.forEach((user) => {
  notifications.push(`Email sent to ${user.name} at ${user.email}`);
});

console.log(notifications);

