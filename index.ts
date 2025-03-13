console.log("Hello via Bun!");


interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return `Cześć ${user.name}, masz ${user.age} lat!`;
}

const user: User = {
  name: "Jan",
  age: 25
};

console.log(greet(user));
