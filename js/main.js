document.addEventListener("DOMContentLoaded", function() {
    // Array example
    const numbers = [1, 2, 3, 4, 5];

    const numbers = [6, 7, 8, 9, 10];
  
    // Output array elements
    const arrayOutput = document.createElement("p");
    arrayOutput.textContent = "Array elements: " + numbers.join(", ");
    document.getElementById("output").appendChild(arrayOutput);
  
    // Object example
    const person = {
      name: "Charlie",
      age: 30,
      city: "London",
    };

    const person = {
        name: "Morpheus",
        age: 40,
        city: "Las Vegas"
      };
  
    // Output object properties
    const objectOutput = document.createElement("p");
    objectOutput.textContent = "Person: " + person.name + ", " + person.age + ", " + person.city;
    document.getElementById("output").appendChild(objectOutput);
  });
  