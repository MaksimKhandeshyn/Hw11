let adding = document.getElementById("adding");
let deducation = document.getElementById("deduction");
const bankAccount = {
  ownerName: "Maksim",
  accountNumber: 1010293,
  balance: 1000,
  deposit(firstNum) {
    // Складывается. PS в данном случае надо исп. bankAccount.balance а не this так как this недотягивается до balance в объэкте
    firstNum = 10;
    bankAccount.balance += firstNum;
    console.log(
      `You have add money your account number ${bankAccount.accountNumber} on ${firstNum}grn. Your balance now is ${bankAccount.balance}.`
    );
  },
  withdraw(secondNum) {
    secondNum = 10;
    bankAccount.balance -= secondNum;
    console.log(
      `you have take off ${secondNum} from your account ${bankAccount.accountNumber}. Now you balance is ${bankAccount.balance}`
    );
  },
};
adding.addEventListener("click", bankAccount.deposit);
deducation.addEventListener("click", bankAccount.withdraw);
//--2--
const weather = {
  temperature: 10,
  humidity: 1,
  windSpeed: 20,
};
weather.showTemp = function ourTem() {
  let temperature = prompt("Enter your temperature now");
  if (temperature > 0) {
    alert("Temperature highter than 0");
    return false;
  } else {
    alert("Temperature lower than 0");
    return true;
  }
};
weather.showTemp();
console.log(weather);
//--3--
const user = {
  mail: prompt("Enter your email"),
  password: prompt("Enter your password"),
  name: prompt("Enter your name"),
};
user.check = function rights() {
  if (!user.mail.includes("@") && !user.name.includes(".com")) {
    alert("Check your email!!!");
  } else if (user.password.length > 20) {
    alert("Check your password!!!");
  } else {
    alert("All right, you pass.");
    console.log(
      `Thats your email ${user.mail} - Your name: ${user.name} - Your password: ${user.password}`
    );
  }
};
user.check();

//--4--
const movie = {
  title: "Kanashibara",
  director: "Angelina Shen",
  year: 2024,
  rating: Number(prompt("Enter rating to this book/movie")),
};
movie.ratingComment = function ratingFeedback() {
  if (movie.rating > 8) {
    alert(
      `You have rated this movie as ${movie.rating}. The ${movie.title}, Year: ${movie.year}, director ${movie.director}`
    );
    return true;
  } else {
    alert(
      `Title: ${this.title}, year: ${this.year}, director: ${this.director}, your rating ${this.rating}`
    );
    console.log(movie);
    console.log("Fuciton return false");
    return false;
  }
};
movie.ratingComment();
