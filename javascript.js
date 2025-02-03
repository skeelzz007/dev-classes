




//console.log(person.name); // Output: "Alice" (access value by key)

//let fruits = ["apple", "banana", "cherry"];
//console.log(fruits[1]); // Output: "banana"

//let fruits = ["apple", "banana", "cherry"];
//console.log(fruits[1]); // Output: "banana"


//let person = { 
  //name: "Alice", age: 25, hobby: "painting" };

//console.log(person.name); // Output: "Alice"


//person.country = "USA";
//console.log(person); 
// Output: 
// { name: "Alice", age: 25, hobby: "painting", country: "USA" }

//console.log(Object.keys(person));
 // Output: ["name", "age", "hobby", "country"]
//console.log(Object.values(person)); 
// Output: ["Alice", 25, "painting", "USA"]

//

// const myArray = [
 // "sandra",
 // "john",
  //"paul",
  //"winifred",
  //"seun",
  //"Ada",
  //"Zainab"
// ]

 //for( let x=0; x < myArray.length; x++){
    //let outcome = myArray [x]
    //console.log (outcome)

 //}






// 1. Create a variable to store your name and log it to the console.
let name = "Babalola Hussein";
console.log(name);

// 2. Declare a variable to store your age and another for your favorite color. Print a sentence using both variables.
let age = 29;
let favoriteColor = "blue";
console.log(`I am ${age} years old, and my favorite color is ${favoriteColor}.`);

// 3. Write a program to check if a number is even or odd.
let number = 7;
console.log(number % 2 === 0 ? "Even" : "Odd");

// 4. Convert a string to uppercase and lowercase and log both results.
let str = "Hello World";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 5. Use typeof to determine the type of 5 different variables and print the results.
console.log(typeof name, typeof age, typeof true, typeof {}, typeof []);

// 6. Write a function to calculate the square of a number.
const square = (num) => num * num;
console.log(square(4));

// 7. Create a function that takes two numbers and returns their sum.
const add = (a, b) => a + b;
console.log(add(3, 7));

// 8. Write a function that greets a user with "Hello, [Name of user]!" where the name is passed as a parameter.
const greet = (userName) => `Hello, ${userName}!`;
console.log(greet("Hussein"));

// 9. Create a function that takes a number and returns true if it is divisible by 5.
const isDivisibleBy5 = (num) => num % 5 === 0;
console.log(isDivisibleBy5(15));

// 10. Write a function that converts Celsius to Fahrenheit.
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
console.log(celsiusToFahrenheit(30));

// 11. Create an object to represent a book with properties like title, author, and year.
let book = { title: "1984", author: "George Orwell", year: 1949 };
console.log(book);

// 12. Write a function that takes a car object with make and model properties and logs "The car is a [make] [model]."
const describeCar = (car) => console.log(`The car is a ${car.make} ${car.model}.`);
describeCar({ make: "Toyota", model: "Camry" });

// 13. Add a method to an object that prints all its properties and values.
let person = {
  name: "Kenny",
  age: 29,
  printProperties() {
    for (let key in this) {
      if (typeof this[key] !== "function") console.log(`${key}: ${this[key]}`);
    }
  },
};
person.printProperties();

// 14. Update a property in an object and log the updated object.
person.age = 31;
console.log(person);

// 15. Create an array of your five favorite foods and log the second item.
let favoriteFoods = ["Pizza", "Burger", "Jollof", "Pasta", "Ice Cream"];
console.log(favoriteFoods[1]);

// 16. Add a new item to the end of an array and log the updated array.
favoriteFoods.push("Tacos");
console.log(favoriteFoods);

// 17. Remove the first item from an array and log the updated array.
favoriteFoods.shift();
console.log(favoriteFoods);

// 18. Use indexOf to find the position of an item in an array and log the result.
console.log(favoriteFoods.indexOf("Pasta"));

// 19. Combine two arrays into one using the spread operator.
let drinks = ["Coffee", "Tea"];
let combined = [...favoriteFoods, ...drinks];
console.log(combined);

// 20. Write a for loop to print numbers from 1 to 10.
for (let x = 1; x <= 10; x++) {
  console.log(x);
}

// 21. Use a for-of loop to iterate through an array of colors and log each one.
let colors = ["Red", "Blue", "Green"];
for (let color of colors) {
  console.log(color);
}

// 22. Write a program to print the sum of numbers from 1 to 50 using a loop.
let sum = 0;
for (let x = 1; x <= 50; x++) {
  sum += x;
}
console.log(sum);

// 23. Create a loop that prints every second item in an array.
for (let x = 0; x < colors.length; x += 2) {
  console.log(colors[x]);
}

// 24. Use a nested loop to create a multiplication table for numbers 1–5.
for (let x = 1; x <= 5; x++) {
  for (let y = 1; y <= 5; y++) {
    console.log(`${x} x ${y} = ${x * y}`);
  }
}

// 25. Use forEach to log each item in an array of numbers.
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));

// 26. Write a program that uses map to create a new array with all numbers doubled.
let doubled = numbers.map((num) => num * 2);
console.log(doubled);

// 27. Use filter to create a new array of numbers greater than 10 from an original array.
let filtered = doubled.filter((num) => num > 10);
console.log(filtered);

// 28. Write a program that sorts an array of strings alphabetically.
console.log(colors.sort());

// 29. Use reduce to find the total of all numbers in an array.
let total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total);

// 30. Create a new array by joining two arrays and removing duplicates using filter.
let joined = [...new Set([...favoriteFoods, ...drinks])];
console.log(joined);

// 31. Use join to create a string from an array of words.
console.log(colors.join(", "));

// 32. Write a program that uses map to create an array of object names from an array of objects.
let students = [
  { name: "Alice", score: 45 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 65 },
];
console.log(students.map((student) => student.name));

// 33. Use filter to get all even numbers from an array of numbers.
console.log(numbers.filter((num) => num % 2 === 0));

// 34. Sort an array of objects by a numeric property (e.g., age).
let sortedStudents = students.sort((a, b) => a.score - b.score);
console.log(sortedStudents);

// 35. Write a function that takes a number and returns its factorial.
const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1));
console.log(factorial(5));

// 36. Create a function that reverses a string.
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello"));

// 37. Write a function that takes a sentence and counts the number of vowels.
const countVowels = (sentence) =>
  sentence.match(/[aeiou]/gi)?.length || 0;
console.log(countVowels("hello world"));

// 38. Create a function that checks if a string is a palindrome.
const isPalindrome = (str) => str === reverseString(str);
console.log(isPalindrome("racecar"));

// 39. Write a function to calculate the greatest common divisor (GCD) of two numbers.
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
console.log(gcd(15, 20));

// 40. Create an array of objects representing students with names and scores. Filter out students with scores less than 50.
const student = [

]
console.log(students.filter((student) => student.score >= 50));

// 41. Write a function that takes an array of numbers and returns the largest number.
const findLargest = (nums) => Math.max(...nums);
console.log(findLargest(numbers));

// 42. Use a loop and an array method to find all prime numbers in an array.
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(numbers.filter(isPrime));

// 43. Create a program that takes a sentence and returns the word with the most letters.
const longestWord = (sentence) =>
  sentence.split(" ").reduce((longest, word) => (word.length > longest.length ? word : longest), "");
console.log(longestWord("I love programming"));

// 44. Write a program that counts the frequency of each character in a string.
const charFrequency = (str) => {
  return str.split("").reduce((freq, char) => {
    freq[char] = (freq[char] || 0) + 1;
    return freq;
  }, {});
};
console.log(charFrequency("hello"));

// 45. Create an object representing a shopping cart. Add methods to calculate total cost and add/remove items.
let shoppingCart = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(itemName) {
    this.items = this.items.filter((item) => item.name !== itemName);
  },
  getTotalCost() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
};
shoppingCart.addItem({ name: "Apple", price: 2 });
shoppingCart.addItem({ name: "Banana", price: 1 });
shoppingCart.removeItem("Apple");
console.log(shoppingCart.getTotalCost());

// 46. Write a function that takes an array of numbers and returns the second largest number.
const secondLargest = (nums) => {
  let sorted = [...new Set(nums)].sort((a, b) => b - a);
  return sorted[1];
};
console.log(secondLargest(numbers));

// 47. Create a function that generates a random password with specified length and characters.
const generatePassword = (length) => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};
console.log(generatePassword(8));

// 48. Write a program that groups an array of strings by their first letter.
const groupByFirstLetter = (words) =>
  words.reduce((groups, word) => {
    let firstLetter = word[0].toLowerCase();
    groups[firstLetter] = groups[firstLetter] || [];
    groups[firstLetter].push(word);
    return groups;
  }, {});
console.log(groupByFirstLetter(["Apple", "Banana", "Cherry", "Avocado"]));

// 49. Console.log your experience at the Dev and Design Bootcamp
 let experience = "The Dev and Design Bootcamp has been an amazing learning experience!"
console.log(experience);

// 50. Write a function that returns only the pupils who scored 50 or above.

const pupils = [
  { name: "Alice", score: 45 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 65 },
  { name: "Diana", score: 30 }
];

const passedStudents = (pupils) => pupils.filter((pupil) => pupil.score >= 50);
console.log(passedStudents(pupils));


