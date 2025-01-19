//CRUNT INPUT
// Variables initialized at the top of the file
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    const display = document.getElementById('display');
    currentInput += number; // Append the clicked number
    display.value = currentInput; // Update the display
}

function setOperator(op) {
    if (currentInput === '') return; // Skip if no number is entered
    if (previousInput !== '') calculate(); // Calculate if there's a previous input
    operator = op; // Set the operator
    previousInput = currentInput; // Save the current input
    currentInput = ''; // Reset for the next input
}

function clearDisplay() {
    currentInput = ''; // Clear current input
    operator = ''; // Clear operator
    previousInput = ''; // Clear previous input
    document.getElementById('display').value = ''; // Clear the display
}

function calculate() {
    if (currentInput === '' || previousInput === '') return; // Skip if inputs are missing
    const display = document.getElementById('display');
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            if (currentInput === '0') {
                result = 'Error'; // Prevent division by zero
            } else {
                result = parseFloat(previousInput) / parseFloat(currentInput);
            }
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = result.toString(); // Update current input
    previousInput = ''; // Clear previous input
    operator = ''; // Clear operator
}
//// /////////////////////////-----project code-----/////////////////////////////////////////

let lastPrayer = null; // Si loo keydiyo salaaddii ugu dambaysay ee la ciyaaray
let isPlaying = false; // Calaamad si loo xakameeyo haddii codka ciyaarayo

const prayerTimesData = {
    Mogadishu: {
        fajr:  "5:00 AM",
        dhuhr: "12:30 AM",
        asr:   "3:30PM",
        maghrib:"6:10 PM",
        isha:   "7:27 PM",
        duha:    "9:01 PM",
        layl:   "2:00 AM"
    },
    Awdal: {
        fajr: "5:10 AM",
        dhuhr: "12:40 PM",
        asr: "4:10 PM",
        maghrib: "6:10 PM",
        isha: "7:40 PM",
        duha: "8:10 AM",
        layl: "2:00 AM"
    },
    Bari: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    Bay: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    Bakool: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    Galguduud: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    Gedo: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    Hiiraan: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    JubbaHoose: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    JubbaDhexe: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    Mudug: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    Nugaal: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    Sool: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    Sanaag: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    ShabeellahaHoose: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    ShabeellahaDhexe: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    Togdheer: {
        fajr: "5:05 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
    woqooyigalbeed:{
        fajr:"5:00 AM",
        dhuhr: "12:35 PM",
        asr: "4:05 PM",
        maghrib: "6:10 PM",
        isha: "7:35 PM",
        duha: "8:05 AM",
        layl: "2:00 AM"
    },
};

// Function-ka cusboonaysiinta waqtiga salaadda
function updatePrayerTimes(region) {
    const times = prayerTimesData[region];
    document.getElementById("fajr").textContent = `Fajr: ${times.fajr}`;
    document.getElementById("dhuhr").textContent = `Dhuhr: ${times.dhuhr}`;
    document.getElementById("asr").textContent = `Asr: ${times.asr}`;
    document.getElementById("maghrib").textContent = `Maghrib: ${times.maghrib}`;
    document.getElementById("isha").textContent = `Isha: ${times.isha}`;
    document.getElementById("duha").textContent = `Duha: ${times.duha}`;
    document.getElementById("layl").textContent = `Salatul Layl: ${times.layl}`;
}

// Function-ka ciyaarista codka
function playPrayerSound() {
    if (!isPlaying) {
        isPlaying = true; // Calaamadee in codka uu hadda ciyaarayo
        const sound = new Audio("salat.mp3");
        sound.play()
            .then(() => {
                sound.onended = () => {
                    isPlaying = false; // Dib u fasax marka codka dhammaado
                };
            })
            .catch((err) => {
                console.error("Error playing sound:", err);
                isPlaying = false; // Haddii qalad dhaco, dib u fasax
            });
    }
}

// Function-ka hubinta waqtiga salaadda
function checkPrayerTime(region) {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const times = prayerTimesData[region];

    for (let prayer in times) {
        const [prayerHours, prayerMinutes] = times[prayer].split(/[: ]/).map(Number);
        const period = times[prayer].endsWith("PM") ? "PM" : "AM";

        const isPM = period === "PM" && prayerHours !== 12;
        const adjustedHours = isPM ? prayerHours + 12 : prayerHours;

        if (currentHours === adjustedHours && currentMinutes === prayerMinutes) {
            const prayerKey = `${prayer}-${currentTime.toTimeString().slice(0, 5)}`;

            if (lastPrayer !== prayerKey) {
                lastPrayer = prayerKey; // Cusbooneysii salaaddii ugu dambaysay
                playPrayerSound(); // Ciyaar codka aadanka
            }
        }
    }
}

// Xakamaynta doorashada gobolka
document.getElementById("region").addEventListener("change", (e) => {
    updatePrayerTimes(e.target.value);
});

// Bilowga oo Mogadishu lagu muujinayo
// updatePrayerTimes("Mogadishu");

// Hubi waqtiga salaadda daqiiqad kasta
setInterval(() => {
    const region = document.getElementById("region").value;
    checkPrayerTime(region);
}, 10000); // Hubi 10 ilbiriqsi kasta
 




// contact
 // Event listener for form submission
 document.getElementById("contactForm").addEventListener("submit",function(event){
    event.preventDefault(); // Prevent the form from refreshing the page
    
    // Get values from the form inputs
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const telephone = document.getElementById("telephone").value;
    const feedback = document.getElementById("feedback").value;

    // Check if the input values are valid
    if (firstName && lastName && email && password && telephone && feedback) {
        // Show confirmation message
        document.getElementById("message").style.display = "block";
        
        // Optionally, clear form after submission
        document.getElementById("contactForm").reset();

        // You can also log the data or send it to a backend API for further processing
        console.log("Form submitted successfully!");
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Telephone:", telephone);
        console.log("Feedback:", feedback);
    } else {
        alert("Please fill in all fields.");
    }
});
//chapters

 function loop() {
    let output = '';
    for (let i = 0; i < 6; i++) {
        output += 'loop ' + i + '<br>';
    }
    document.getElementById('output-container').innerHTML = output;
}

function work() {
    let number = 1;
    let output = '';
    while (number <= 5) {
        output += number + '<br>';
        number++;
    }
    document.getElementById('output-container').innerHTML = output;
}

function home() {
    let i = 1;
    let output = '';
    do {
        output += "Number: " + i + '<br>';
        i++;
    } while (i <= 5);
    document.getElementById('output-container').innerHTML = output;
}

function nams() {
    const names = ['john', 'iman', 'hafsa', 'amuu'];
    let output = '';
    for (let i = 0; i < names.length; i++) {
        output += names[i] + '<br>';
        if (i === 0) break;
    }
    document.getElementById('output-container').innerHTML = output;
}

function kuli() {
    const names = ['john', 'iman', 'hafsa', 'amuu'];
    let output = '';
    for (let i = 0; i < names.length; i++) {
        output += names[i] + '<br>';
        if (i === names.length - 1) continue;
    }
    document.getElementById('output-container').innerHTML = output;
}

function ifsta() {
    let age = 18;
    let output = '';
    if (age <= 18) {
        output = 'You are under age<br>';
    }
    document.getElementById('output-container').innerHTML = output;
}

function shaqo() {
    let age = 20;
    let output = '';
    if (age >= 18) {
        output = 'You are an adult<br>';
    } else {
        output = 'You are under age<br>';
    }
    document.getElementById('output-container').innerHTML = output;
}

function nested() {
    let score = 85;
    let output = '';
    if (score >= 90) {
        output = "Grade: A<br>";
    } else if (score >= 80) {
        output = "Grade: B<br>";
    } else if (score >= 70) {
        output = "Grade: C<br>";
    } else {
        output = "Grade: D<br>";
    }
    document.getElementById('output-container').innerHTML = output;
}

function sawitchs() {
    let day = 5;
    let output = '';
    switch (day) {
        case 1:
            output = "sabti<br>";
            break;
        case 2:
            output = "axad<br>";
            break;
        case 3:
            output = "isniin<br>";
            break;
        case 4:
            output = "talaado<br>";
            break;
        case 5:
            output = "arbaco<br>";
            break;
        default:
            output = "malmaha fasaxa<br>";
    }
    document.getElementById('output-container').innerHTML = output;
}

function terb() {
    let age = 20;
    let output = '';
    let underage = (age >= 70) ? "You are under age" : "You are not under age";
    output = underage + '<br>';
    document.getElementById('output-container').innerHTML = output;
}

    //Assigment 2
// Q1: Display ID, Name, or Both
function displayIDOrName() {
    var  id = document.getElementById("inputId").value;
     var name = document.getElementById("inputName").value;
     var output = "";
   
     if (id && name) {
       output = "ID: " + id + ", Name: " + name;
     } else if (id) {
       output="ID:"+id;
    //    output="plz enter the name first";
       //  output = "plz enter the name ";
     } else if (name) {
       output = "Name: " + name;
     } else {
       output = "Please enter at least one value to get the info.";
     }
   
     document.getElementById("outputQ1").textContent = output;
   }
   
     // Q2: Display Vowels and Consonants
     function displayVowelsAndConsonants() {
       var name = document.getElementById("inputName2").value;
       if (!name) {
         document.getElementById("outputQ2").textContent = "Please enter a name.";
         return;
       }
   
       var vowels = name.split("").filter(function (char) {
         return "aeiouAEIOU".indexOf(char) !== -1;
       });
       var consonants = name.split("").filter(function (char) {
         return vowels.indexOf(char) === -1 && /[a-zA-Z]/.test(char);
       });
   
       var output = "Vowels: " + vowels.join(", ") + " (Total: " + vowels.length + ")<br>" +
                    "Consonants: " + consonants.join(", ") + " (Total: " + consonants.length + ")";
       document.getElementById("outputQ2").innerHTML = output;
     }
   
   
   
    //chapter 1 examples

    function imma() {
        // Get the container where the message will appear
        var messageContainer = document.getElementById('message-container');
        
        // Set the message content
        messageContainer.innerHTML = 'Hello World';
    
        // Optional: You can add some styling or animations for better appearance
        messageContainer.style.fontSize = '24px';
        messageContainer.style.color = 'white';
        messageContainer.style.fontWeight = 'bold';
    }
    
    
   // Example 1
function wos() {
    let result = 5 + 3;
    document.getElementById('result1').innerHTML = `Result: ${result}`;
}

// Example 2
function buy() {
    let isEqual = 2 === 3;
    document.getElementById('result2').innerHTML = `Result: ${isEqual}`;
}

// Example 3
function pos() {
    let count = 10;
    count += 5;
    document.getElementById('result3').innerHTML = `Result: ${count}`;
}

// Example 4
function ul() {
    let num = 10;
    let strNum = "5";
    document.getElementById('result4').innerHTML = `Result: ${num > strNum}`;
}

// Example 5 - Global variable example
function nhj() {
    var globalVar = "I am a global variable";

    function showGlobalVar() {
        document.getElementById('result5').innerHTML = `Result: ${globalVar}`;
    }
    
    showGlobalVar();
}

// Example 6 - Function with a return statement
function funs() {
    function add(a, b) {
        var result = a + b;
        return result;
    }
    document.getElementById('result6').innerHTML = `Result: ${add(2, 3)}`;
}

// Example 7 - Arrow function example
function tell() {
    const sayhello = () => "hello world";
    document.getElementById('result7').innerHTML = `Result: ${sayhello()}`;
}

// Example 8 - Doubling a number
function exp8() {
    const doublenumber = (number) => {
        return number * 2;
    }
    document.getElementById('result8').innerHTML = `Result: ${doublenumber(3)}`;
}

// Example 9 - Simple addition
function iwm() {
    const add = (a, b) => a + b;
    document.getElementById('result9').innerHTML = `Result: ${add(5, 6)}`;
}


// example 1: Swap numbers
function power() {
    let a = 5;
    let b = 8;
    let temp = a;
    a = b;
    b = temp;
    // Change console.log to display in result1 div
    document.getElementById("result1").innerHTML = "After swapping: a = " + a + ", b = " + b;
}

// example 2: Check if age is an adult
function kil() {
    let age = 18;
    if (age >= 18) {
        document.getElementById("result2").innerHTML = 'You are an adult';
    }
}

// example 3: Check if age is an adult or not
function suufka() {
    let age = 20;
    if (age >= 18) {
        document.getElementById("result3").innerHTML = 'You are an adult';
    } else {
        document.getElementById("result3").innerHTML = 'You are not an adult';
    }
}

// example 4: Check grade
function fun() {
    let grade = 90;
    if (grade >= 90) {
        document.getElementById("result4").innerHTML = 'A+';
    } else if (grade >= 80) {
        document.getElementById("result4").innerHTML = 'B+';
    } else if (grade >= 70) {
        document.getElementById("result4").innerHTML = 'B-';
    } else if (grade >= 65) {
        document.getElementById("result4").innerHTML = 'C+';
    } else {
        document.getElementById("result4").innerHTML = 'C';
    }
}

// example 5: Switch example for days
function couse() {
    let day = 'saturday';
    switch (day) {
        case "saturday":
            document.getElementById("result5").innerHTML = 'It\'s the first day of the week';
            break;
        case "wednesday":
            document.getElementById("result5").innerHTML = 'It\'s the fourth day of the week';
            break;
        default:
            document.getElementById("result5").innerHTML = 'It\'s another day';
    }
}

// example 6: Loop through numbers
function exm() {
    let output = '';
    for (let i = 1; i <= 5; i++) {
        output += i + '<br>';
    }
    document.getElementById("result6").innerHTML = output;
}

// example 7: While loop with break
function ems() {
    let i = 1;
    let output = '';
    while (i <= 10) {
        output += i + '<br>';
        i++;
        if (i === 6) {
            break;
        }
    }
    document.getElementById("result7").innerHTML = output;
}

// example 8: Do-While loop
function okp() {
    let i = 1;
    let output = '';
    do {
        output += i + '<br>';
        i++;
    } while (i <= 10);
    document.getElementById("result8").innerHTML = output;
}

// example 9: While loop with break
function mls() {
    let i = 1;
    let output = '';
    while (i <= 10) {
        output += i + '<br>';
        i++;
        if (i === 6) {
            break;
        }
    }
    document.getElementById("result9").innerHTML = output;
}

// example 10: While loop with continue
function mrs() {
    let i = 1;
    let output = '';
    while (i <= 10) {
        i++;
        if (i === 6) {
            continue;
        }
        output += i + '<br>';
    }
    document.getElementById("result10").innerHTML = output;
}

// example 11: Nested loops
function lock() {
    let output = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            output += `(${i},${j})<br>`;
        }
    }
    document.getElementById("result11").innerHTML = output;
}
 

//chapter 4 
 //example 1
 // Example 1: Multiplication Table
function jik() {
    const rows = 10;
    const cols = 10;
    let result = '';
    for (let i = 1; i <= rows; i++) {
        let rowOutput = '';
        for (let j = 1; j <= cols; j++) {
            rowOutput += (i * j) + '\t';
        }
        result += rowOutput + '<br>';
    }
    document.getElementById('result').innerHTML = result;
}

// Example 2: Greeting Function
function mkj() {
    function greet(name) {
        return `Hello, ${name}! Welcome!`;
    }
    const greeting = greet("Mohamed");
    document.getElementById('result').innerHTML = greeting;
}

// Example 3: Addition Function
function yuk() {
    function add(a, b) {
        return a + b;
    }
    const result = add(5, 3);
    document.getElementById('result').innerHTML = `The sum is: ${result}`;
}

// Example 4: Even or Odd Function
function nhj() {
    function checkEvenOrOdd(num) {
        return num % 2 === 0 ? 'Even' : 'Odd';
    }
    const result = checkEvenOrOdd(7);
    document.getElementById('result').innerHTML = `The number is: ${result}`;
}

// Example 5: Factorial Function
function funs() {
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }
    const result = factorial(5);
    document.getElementById('result').innerHTML = `The factorial is: ${result}`;
}

// Example 6: Reverse String Function
function tell() {
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    const result = reverseString("Somalia");
    document.getElementById('result').innerHTML = `The reversed string is: ${result}`;
}

// Example 7: Palindrome Check Function
function yuk() {
    function isPalindrome(str) {
        const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const reversed = cleaned.split('').reverse().join('');
        return cleaned === reversed;
    }
    const result = isPalindrome("madam") ? "Palindrome" : "Not a palindrome";
    document.getElementById('result').innerHTML = `The word is: ${result}`;
}

// Example 8: Fibonacci Sequence Function
function exp8() {
    function fibonacci(n) {
        let sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence.join(', ');
    }
    const result = fibonacci(10);
    document.getElementById('result').innerHTML = `Fibonacci sequence: ${result}`;
}

// Example 9: Prime Number Check Function
function iwm() {
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    const result = isPrime(13) ? "Prime" : "Not prime";
    document.getElementById('result').innerHTML = `The number is: ${result}`;
}

 //chapter 5
                         //Arrays
    //example 1
// Example 1: Object Literal
function loy(){
    const persoon = {
        firstname: "Iman",
        lastname: "Adam",
        age: 20
    };
    document.getElementById('result1').innerHTML = "Object 1: " + JSON.stringify(persoon);
}

// Example 2: Constructor Function
function imon(){
    function Person(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    const person = new Person("Iman", "Adam", 19);
    document.getElementById('result2').innerHTML = "Object 2: " + JSON.stringify(person);
}

// Example 3: Class Syntax
function ils(){
    class Person {
        constructor(firstname, lastname, age) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        }
    }
    const person = new Person("Iman", "Adam", 20);
    document.getElementById('result3').innerHTML = "Object 3: " + JSON.stringify(person);
}

// Example 4: Method in objects
function hyr(){
    const person = {
        name: 'Iman',
        educ_level: 'Bachelor',
        gra_status: 'Active',
        displayInfo() {
            let info = '';
            for (let key in this) {
                if (typeof this[key] !== "function") {
                    info += `${key}: ${this[key]}<br>`;
                }
            }
            document.getElementById('result4').innerHTML = "Object 4: <br>" + info;
        }
    };
    person.displayInfo();
}

// Example 5: JSON Example
function know(){
    const test = {
        "name": "Iman",
        "age": 20,
        "city": "Mogadishu"
    };
    document.getElementById('result5').innerHTML = "JSON 1: " + JSON.stringify(test);
}

// Example 6: Nesting JSON
function guyd(){
    const test = {
        "person": {
            "name": "Iman Adam",
            "age": 20
        }
    };
    document.getElementById('result6').innerHTML = "JSON 2: " + JSON.stringify(test);
}

// Example 7: Parsing JSON
function speek(){
    const jsonString = '{"name": "Iman Adam", "age": 21}';
    const jsonObject = JSON.parse(jsonString);
    document.getElementById('result7').innerHTML = "Parsed JSON: " + jsonObject.name;
}

// Example 8: Stringifying JSON
function mamii(){
    const person = {"name": "Iman Adam", "age": 21};
    const jsonString = JSON.stringify(person);
    document.getElementById('result8').innerHTML = "Stringified JSON: " + jsonString;
}

  // lap 1
  function nows() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `Ali<br>Jamac<br>Ali`;
}

// lap 2
function hi() {
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const outputDiv = document.getElementById("output");

    let timeMessage = '';
    switch (true) {
        case (currentHour < 5):
            timeMessage = "It's before 5:00 AM.";
            break;
        case (currentHour === 5 && currentMinute === 0):
            timeMessage = "It's 5:00 AM.";
            break;
        case (currentHour < 12):
            timeMessage = `It's ${currentHour}:${currentMinute < 10 ? '0' + currentMinute : currentMinute} AM.`;
            break;
        case (currentHour === 12):
            timeMessage = `It's 12:${currentMinute < 10 ? '0' + currentMinute : currentMinute} PM.`;
            break;
        default:
            timeMessage = `It's ${currentHour - 12}:${currentMinute < 10 ? '0' + currentMinute : currentMinute} PM.`;
    }

    outputDiv.innerHTML = timeMessage;
}

// lap 3
function iwrn() {
    function calculator(num1, num2, operation) {
        switch (operation) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            default:
                return 'Invalid operation';
        }
    }

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        Add: ${calculator(10, 5, 'add')}<br>
        Subtract: ${calculator(10, 5, 'subtract')}<br>
        Multiply: ${calculator(10, 5, 'multiply')}<br>
        Divide: ${calculator(10, 5, 'divide')}
    `;
}
//  chpt6


 let contentel = document.getElementById("continant");
 contentel.style.background = "blue";
 contentel.style.color = "white";
 contentel.style.padding = "10px";
 contentel.style.fontFamily = "serif";
 
 //example 3
 let boxElement1 = document.getElementsByClassName("backContent");
 for (let i = 0; i < boxElement.length; i++){
     boxElement[i].style.border = "3px dashed"
 }
 
 let par = document.getElementsByClassName("p");
 for (let i = 0; i < par.length; i++){
     par[i].style.fontStyle = "italic";
     par[i].style.margin = "20px";
 }
 
 
 let elemrnt = document.getElementById("mylink");
 elemrnt.style.textDecoration = "none";
 
 //examp 7
 let pra = document.getElementById("paragraph");
 pra.innerText = "Setting p tag text using innertext property";
 pra.textContent = "Setting p tag text using textcontent property";
 
 //examp 8
 let link = document.getElementById("my_link");
 link.setAttribute("class", "remove_txt_deco")
 
 let set = document.getElementsByClassName("remove_txt_deco");
 for (let i = 0; i < set.length; i++){
     set[i].style.textDecoration = "none";
 }
 
 //examp 9
 let create_element = document.createElement("p");
 let parg = document.getElementById("pargr")
 create_element.innerText = "This is creted element";
 parg.appendChild(create_element);
 
 // exam 10
 let olde_element = document.getElementById("pragraph");
 let new_element = document.createElement("p");
 new_element.innerText = "This is the new pragraph element";
 document.body.replaceChild(new_element, olde_element)
 
 //exam 11
 let parentElement = document.getElementById("pragraph2");
 let existingSpan = document.getElementById("span2");
 let newSpan = document.createElement("span");
 
 newSpan.innerText = "New span element";
 parentElement.insertBefore(newSpan, existingSpan);
 
 // ch7
 const element = document.getElementById("myButton");
element.addEventListener("click", myfun);
function myfun(){
alert("Button Clicked!")
}


// inline event handler
function func(){
alert("Button Clicked!")
}


// mouse event
let element2 = document.getElementById("myel");
element2.addEventListener("mouseover",function(){
element2.style.backgroundColor = "green";
});
element2.addEventListener("mouseout",function(){
element2.style.backgroundColor = "blue";
});


//keyboard event
const textinput = document.getElementById("text");
const outputdiv = document.getElementById("output");
textinput.addEventListener("keydown", function (event){
outputdiv.innerText = `Keydown: ${event.key}`;
});
textinput.addEventListener("keypress", function (event){
outputdiv.innerText += `\nKeypress: ${event.key}`;
});
textinput.addEventListener("keyup", function (event){
outputdiv.innerText += `\nKeyup: ${event.key}`;
});


//Focus events
const textinput2 = document.getElementById("text2");
const outputdiv2 = document.getElementById("output2");
textinput2.addEventListener("focus", function (){
updateOutput("focused");
});
textinput2.addEventListener("blur", function (){
updateOutput("blurred");
});
function updateOutput(className){
outputdiv2.className = className;
}


//form focus
const textinp = document.getElementById("textinp");
const outdiv = document.getElementById("foutput");
const form = document.getElementById("myform");
textinp.addEventListener("input", function () {
if (textinp.value != "") {
    updateOutput2("input changed!", "valid");
} else {
    updateOutput2("input changed with empty!", "invalid");
}
});
form.addEventListener("submit", function (event) {
event.preventDefault();
updateOutput2("form submitted!", "valid");
});
function updateOutput2(message2, classname2) {
outdiv.innerText = message2;
outdiv.className = classname2;
}


//Event Delegation Using A Single Event Listener On The Parent Element
const parentList = document.getElementById("parentList");
parentList.addEventListener("click", function(event){
if(event.target.tagName === "LI"){
    alert("Clicked on: "+event.target.innerText);
}
});

// Function to toggle the menu visibility on mobile screens
function toggleMenu() {
const navLinks = document.querySelector('.nav-links');
navLinks.classList.toggle('active');
}
// login
// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Clear previous error states
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
  
    // Remove previous error styling
    usernameInput.classList.remove('error');
    passwordInput.classList.remove('error');
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
  
    let isValid = true;
  
    // Username validation
    if (usernameInput.value.trim() === '') {
      usernameInput.classList.add('error');
      usernameError.style.display = 'block';
      isValid = false;
    }
  
    // Password validation
    if (passwordInput.value.trim() === '') {
      passwordInput.classList.add('error');
      passwordError.style.display = 'block';
      isValid = false;
    }
  
    // If valid, proceed with login (you can add further checks here)
    if (isValid) {
      alert('Login successful!');
      // You can redirect or process the form here
    }
  });
  

//nawal chapters
function showExample(example) {
    let output = "";

    switch (example) {
        case 'nestedLoop':
            output += "<strong>Nested Loop Example (Multiplication Table):</strong><br>";
            for (let i = 1; i <= 5; i++) {
                for (let j = 1; j <= 5; j++) {
                    output += `${i} x ${j} = ${i * j}<br>`;
                }
                output += "<br>";
            }
            break;
        case 'checkWeather':
            let temperature = 32;
            output += "<strong>If-Else Example (Weather Check):</strong><br>";
            if (temperature >= 30) {
                output += "It's a hot day! Stay hydrated.<br>";
            } else if (temperature >= 20) {
                output += "It's a nice day! Enjoy the weather.<br>";
            } else {
                output += "It's a cold day! Wear warm clothes.<br>";
            }
            break;
        case 'vehicleType':
            let vehicle = "Bike";
            output += "<strong>Switch-Case Example (Vehicle Type):</strong><br>";
            switch (vehicle) {
                case "Car":
                    output += "You selected a Car.<br>";
                    break;
                case "Bike":
                    output += "You selected a Bike.<br>";
                    break;
                case "Bus":
                    output += "You selected a Bus.<br>";
                    break;
                default:
                    output += "Unknown vehicle type.<br>";
            }
            break;
        case 'checkAge':
            let age = 16;
            output += "<strong>Ternary Example (Age Check):</strong><br>";
            let result = (age >= 18) ? "You are an adult." : "You are a minor.";
            output += result + "<br>";
            break;
        case 'reverseNumbers':
            output += "<strong>For Loop Example (Reverse Numbers):</strong><br>";
            for (let i = 10; i >= 1; i--) {
                output += i + "<br>";
            }
            break;
        case 'evenNumbers':
            let num = 2;
            output += "<strong>While Loop Example (Even Numbers):</strong><br>";
            while (num <= 20) {
                output += num + "<br>";
                num += 2;
            }
            break;
        case 'countdown':
            let count = 5;
            output += "<strong>Do-While Loop Example (Countdown):</strong><br>";
            do {
                output += `Counting down: ${count}<br>`;
                count--;
            } while (count > 0);
            output += "Blast off!<br>";
            break;
        case 'findAdults':
            const ages = [15, 18, 21, 12, 30];
            const adults = ages.filter(age => age >= 18);
            output += "<strong>Filter Example (Find Adults):</strong><br>";
            output += `Original Array: ${ages.join(", ")}<br>`;
            output += `Adults: ${adults.join(", ")}<br>`;
            break;
        case 'calculateProduct':
            const nums = [2, 3, 4];
            const product = nums.reduce((acc, curr) => acc * curr, 1);
            output += "<strong>Reduce Example (Calculate Product):</strong><br>";
            output += `Array: ${nums.join(", ")}<br>`;
            output += `Product: ${product}<br>`;
            break;
        case 'checkForNegative':
            const numbers = [3, 5, -1, 7];
            const hasNegative = numbers.some(num => num < 0);
            output += "<strong>Some Example (Check for Negative):</strong><br>";
            output += `Array: ${numbers.join(", ")}<br>`;
            output += `Contains Negative: ${hasNegative}<br>`;
            break;
        case 'allPositive':
            const positiveNumbers = [3, 5, 1, 7];
            const allPositive = positiveNumbers.every(num => num > 0);
            output += "<strong>Every Example (Check if All Positive):</strong><br>";
            output += `Array: ${positiveNumbers.join(", ")}<br>`;
            output += `All Positive: ${allPositive}<br>`;
            break;
    }

    document.getElementById('output').innerHTML = output; // Natiijada la muujiyo
}
function chapter1() {
    document.getElementById('output').innerHTML = "Hello, World!";
}
// Example 1
function example1() {
    let result = 5 + 3;  
    document.getElementById('output1').innerHTML = "Result of 5 + 3 is: " + result;
}

// Example 2
function example2() {
    let isEqual = 2 === 3; 
    document.getElementById('output2').innerHTML = "Is 2 equal to 3? " + isEqual;
}

// Example 3
function example3() {
    let count = 10;
    count += 5;  
    document.getElementById('output3').innerHTML = "Count after incrementing by 5 is: " + count;
}

// Example 4
function example4() {
    let num = 10;
    let strNum = "5";
    document.getElementById('output4').innerHTML = "Is 10 greater than 5? " + (num > Number(strNum));
}  

// Example 1: Swap Numbers
function waw() {
    let a = 5;
    let b = 8;
    let temp = a;
    a = b;
    b = temp;
    document.getElementById('output1').innerHTML = "After swapping: a = " + a + ", b = " + b;
}

// Example 2: Adult Check
function zuu() {
    let age = 18;
    let message = (age >= 18) ? 'You are an adult' : '';
    document.getElementById('output2').innerHTML = message;
}

// Example 3: Adult or Not
function wuu() {
    let age = 20;
    let message = (age >= 18) ? 'You are an adult' : 'You are not an adult';
    document.getElementById('output3').innerHTML = message;
}

// Example 4: Grade Evaluation
function saa() {
    let grade = 90;
    let result;
    if (grade >= 90) {
        result = 'A+';
    } else if (grade >= 80) {
        result = 'B+';
    } else if (grade >= 70) {
        result = 'B-';
    } else if (grade >= 65) {
        result = 'C+';
    } else {
        result = 'C';
    }
    document.getElementById('output4').innerHTML = "Grade: " + result;
}

// Example 5: Day of the Week
function qaa() {
    let day = 'saturday';
    let message;
    switch (day) {
        case "saturday":
            message = 'It\'s the first day of the week';
            break;
        case "wednesday":
            message = 'It\'s the fourth day of the week';
            break;
        default:
            message = 'It\'s another day';
    }
    document.getElementById('output5').innerHTML = message;
}

// Example 6: For Loop
function dxx() {
    let output = '';
    for (let i = 1; i <= 5; i++) {
        output += i + '<br>';
    }
    document.getElementById('output6').innerHTML = output;
}

// Example 7: While Loop with Break
function dff() {
    let output = '';
    let i = 1;
    while (i <= 10) {
        output += i + '<br>';
        if (i === 6) {
            break;
        }
        i++;
    }
    document.getElementById('output7').innerHTML = output;
}

// Example 8: Do-While Loop
function dee() {
    let output = '';
    let i = 1;
    do {
        output += i + '<br>';
        i++;
    } while (i <= 10);
    document.getElementById('output8').innerHTML = output;
}

// Example 9: While Loop with Break
function dqq() {
    let output = '';
    let i = 1;
    while (i <= 10) {
        output += i + '<br>';
        if (i === 6) {
            break;
        }
        i++;
    }
    document.getElementById('output9').innerHTML = output;
}

// Example 10: While Loop with Continue
function sqq() {
    let output = '';
    let i = 1;
    while (i <= 10) {
        i++;
        if (i === 6) {
            continue;
        }
        output += i + '<br>';
    }
    document.getElementById('output10').innerHTML = output;
}

// Example 11: Nested For Loop
function dww() {
    let output = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            output += `(${i},${j})<br>`;
        }
    }
    document.getElementById('output11').innerHTML = output;
}
// Example 1: Function Declaration
function kii() {
    function functionName() {
        console.log("Hello World");
    }
    functionName(); // Call the function to see the output
    document.getElementById('output1').innerHTML = "Function declared and called: Check console.";
}

// Example 2: Greeting Function
function kll() {
    function greet(name) {
        console.log(`Hello, ${name}!`);
    }
    greet("FAIZA");
    document.getElementById('output2').innerHTML = "Greeting function executed: Check console.";
}

// Example 3: Function with Parameter
function lpp() {
    function functionName(par) {
        return par; // Assuming you want to return the parameter
    }
    let value = functionName("Parameter Value");
    document.getElementById('output3').innerHTML = "Function with parameter executed: " + value;
}

// Example 4: Addition Function
function loo() {
    function add(a, b) {
        return a + b;
    }
    const result = add(3, 4);
    document.getElementById('output4').innerHTML = "Result of addition: " + result;
}

// Example 5: Block Scope
function yuu() {
    if (true) {
        let blockVariable = "I'm in block scope";
        console.log(blockVariable);
        document.getElementById('output5').innerHTML = blockVariable;
    }
}

// Example 6: Arrow Function for Doubling
function mmm() {
    const doubleNumber = (number) => {
        return number * 2;
    }
    let result = doubleNumber(3);
    document.getElementById('output6').innerHTML = "Double of 3 is: " + result;
}

// Example 7: Arrow Function Addition
function fff() {
    const add = (a, b) => a + b;
    let result = add(3, 5);
    document.getElementById('output7').innerHTML = "Result of addition: " + result;
}

// Example 8: Callback Function
function hhh() {
    function doSomething(callback) {
        console.log("Doing something...");
        callback();
    }
    function onComplete() {
        console.log("Operation complete!");
    }
    doSomething(onComplete);
    document.getElementById('output8').innerHTML = "Callback function executed: Check console.";
}

// Example 9: Arrow Function with setTimeout
function sss() {
    setTimeout(() => {
        console.log("This is an arrow function callback executed after 2 seconds");
    }, 2000);
    document.getElementById('output9').innerHTML = "Arrow function scheduled: Check console after 2 seconds.";
}

// Example 10: Function Declaration with Parameters
function fai() {
    function functionName(parameters) {
        return parameters; // Assuming you want to return the parameter
    }
    let value = functionName("Parameter Value");
    document.getElementById('output10').innerHTML = "Function with parameters executed: " + value;
}
// Example 1: Array Literal
function fzo() {
    const names = ['ahmed', " " + 'mohammed', " " + 'ali'];
    console.log(names);
    document.getElementById('output1').innerHTML = `Names: ${names.join(', ')}`;
}

// Example 2: Empty Array
function ccc() {
    const myArray = [];
    myArray[0] = "first";
    myArray[1] = "second";
    console.log(myArray);
    document.getElementById('output2').innerHTML = `Array: ${myArray.join(', ')}`;
}

// Example 3: Array.from()
function sss() {
    const arrayFromStr = Array.from("hello"); 
    console.log(arrayFromStr);
    document.getElementById('output3').innerHTML = `Array from string: ${arrayFromStr.join(', ')}`;
}

// Example 4: Spread Operator
function aaa() {
    const sourceArray = [1, 2, 3];
    const newArray = [...sourceArray];
    console.log(sourceArray);
    console.log(newArray);
    document.getElementById('output4').innerHTML = `Source Array: ${sourceArray.join(', ')}; New Array: ${newArray.join(', ')}`;
}

// Example 5: Array Initializer
function www() {
    const newArray = new Array(3);
    console.log(newArray);
    document.getElementById('output5').innerHTML = `Array Initialized: ${newArray}`;
}

// Example 6: Array.of()
function ttt() {
    const myArray = Array.of(1, 2, 3); 
    console.log(myArray);
    document.getElementById('output6').innerHTML = `Array.of(): ${myArray.join(', ')}`;
}

// Example 7: Adding Element
function ppp() {
    const fruits = ["banana", "mango"];
    fruits.unshift("apple");
    console.log(fruits);
    document.getElementById('output7').innerHTML = `Fruits after adding: ${fruits.join(', ')}`;
}

// Example 8: Removing Element
function rrr() {
    const qudaar = ["banana", "mango", "cherry"];
    qudaar.pop();
    console.log(qudaar);
    document.getElementById('output8').innerHTML = `Fruits after removing: ${qudaar.join(', ')}`;
}

// Example 9: For Loop
function uuu() {
    const rwww = ["banana", "mango", "cherry"];
    let output = rwww.map(fruit => fruit).join(', ');
    console.log(output);
    document.getElementById('output9').innerHTML = `Fruits in For Loop: ${output}`;
}

// Example 10: Map Method
function qaa() {
    const numbers = [1, 2, 3];
    const squaredNumbers = numbers.map((num) => num * num); 
    console.log(squaredNumbers);
    document.getElementById('output10').innerHTML = `Squared Numbers: ${squaredNumbers.join(', ')}`;
}

// Example 11: ForEach Method
function eee() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach(function (fruit) {
        console.log(fruit);
    });
    document.getElementById('output11').innerHTML = `Fruits logged in ForEach: Check console.`;
}

// Example 12: For...of Loop
function ytt() {
    const fruits = ["banana", "mango", "cherry"];
    let output = '';
    for (const fruit of fruits) {
        output += fruit + ' ';
    }
    console.log(output);
    document.getElementById('output12').innerHTML = `Fruits in For...of Loop: ${output}`;
}

// Example 13: Accessing Index with ForEach
function juu() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach((fruit, index) => {
        console.log(`fruit at index ${index} is ${fruit}`);
    });
    document.getElementById('output13').innerHTML = `Fruits indexed: Check console.`;
}

// Example 14: Object Constructor
function ilhan() {
    function Baniaadam(firstName, lastName, age) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    const baniaadam = new Baniaadam("mohamed", "ali", 30);
    console.log(baniaadam);
    document.getElementById('output14').innerHTML = `Object created: ${JSON.stringify(baniaadam)}`;
}

// Example 15: Object Literal
function qrr() {
    const qof = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30
    };
    console.log(qof);
    document.getElementById('output15').innerHTML = `Object Literal: ${JSON.stringify(qof)}`;
}

// Example 16: Class Example
function haan() {
    class Dad {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }
    const dad = new Dad("mohamed", "ali", 30);
    console.log(dad);
    document.getElementById('output16').innerHTML = `Class Object: ${JSON.stringify(dad)}`;
}

// Example 17: For...in Loop
function sawd() {
    const sus = {
        name: 'faiza',
        education_level: 'bachelor',
        gra_status: 'active'
    };
    for (let index in sus) {
        console.log(`${index}: ${sus[index]}`);
    }
    document.getElementById('output17').innerHTML = `Object properties logged: Check console.`;
}

// Example 18: Object Properties
function naw() {
    const dad = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30,
        email: "mohamed.ali@email.com"
    };
    console.log(dad.firstName);
    console.log(dad["lastName"]);
    dad.age = 31;
    console.log(dad);
    document.getElementById('output18').innerHTML = `Updated Object: ${JSON.stringify(dad)}`;
}

// Example 19: Object Method
function waal() {
    const fai = {
        firstName: "mohamed",
        lastName: "ali",
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        },
    };
    console.log(fai.getFullName());
    document.getElementById('output19').innerHTML = `Full Name: ${fai.getFullName()}`;
}

// Example 20: JSON Object
function poop() {
    const test = {
        "name": "Jonson",
        "city": "New York",
        "age": 30
    };
    console.log(test);
    document.getElementById('output20').innerHTML = `JSON Object: ${JSON.stringify(test)}`;
}

// Example 21: JSON with Arrays
function jiij() {
    const wew = {
        "name": "mohamed",
        "age": 30,
        "hobbies": ["reciting quran", "praying", "reading", "swimming"]
    };
    console.log(wew);
    document.getElementById('output21').innerHTML = `JSON with Arrays: ${JSON.stringify(wew)}`;
}

// Example 22: Parsing JSON
function huuuh() {
    const jsonString2 = '{"name": "mohammed ali", "age": 30}'; 
    const jsonObject2 = JSON.parse(jsonString2);
    console.log(jsonObject2.name); 
    document.getElementById('output22').innerHTML = `Parsed JSON: ${JSON.stringify(jsonObject2)}`;
}

// Example 23: Stringifying JSON
function uuui() {
    const person = {name: "mohammed ali", age: 30};
    const jsonString3 = JSON.stringify(person);
    console.log(jsonString3);
    document.getElementById('output23').innerHTML = `Stringified JSON: ${jsonString3}`;
}
    // Example 1
    function jjj() {
        const outputDiv = document.getElementById('output');
        outputDiv.innerText = "nawaal\nmohammed\nnour";
    }

    // Example 2
    function ggg() {
        let time = new Date().getHours();
        let message;

        switch (time) {
            case 5:
                message = "5:00 AM";
                break;
            case 6:
                message = "6:00 AM";
                break;
            case 7:
                message = "7:00 AM";
                break;
            case 8:
                message = "8:00 AM";
                break;
            case 9:
                message = "9:00 AM";
                break;
            case 10:
                message = "10:00 AM";
                break;
            case 11:
                message = "11:00 AM";
                break;
            case 12:
                message = "12:00 PM";
                break;
            case 13:
                message = "1:00 PM";
                break;
            case 14:
                message = "2:00 PM";
                break;
            case 15:
                message = "3:00 PM";
                break;
            case 16:
                message = "4:00 PM";
                break;
            case 17:
                message = "5:00 PM";
                break;
            default:
                message = "Time is outside of the range 5:00 AM to 5:00 PM.";
                break;
        }
        document.getElementById('output').innerText = message;
    }

    // Example 3
    function uuu() {
        let num1 = parseFloat(prompt("Enter first number: "));
        let num2 = parseFloat(prompt("Enter second number: "));
        let operator = prompt("Enter operator (+, -, *, /): ");

        let result;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Cannot divide by zero!";
                }
                break;
            default:
                result = "Invalid operator!";
                break;
        }

        document.getElementById('output').innerText = "Result: " + result;
    }
// lap
 // Lap 1
 function nows() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Ali<br>Jamac<br>Ali";
}

// Lap 2
function hi() {
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const outputDiv = document.getElementById("output");

    let timeMessage = '';
    switch (true) {
        case (currentHour < 5):
            timeMessage = "It's before 5:00 AM.";
            break;
        case (currentHour === 5 && currentMinute === 0):
            timeMessage = "It's 5:00 AM.";
            break;
        case (currentHour < 12):
            timeMessage = `It's ${currentHour}:${currentMinute < 10 ? '0' + currentMinute : currentMinute} AM.`;
            break;
        case (currentHour === 12):
            timeMessage = `It's 12:${currentMinute < 10 ? '0' + currentMinute : currentMinute} PM.`;
            break;
        default:
            timeMessage = `It's ${currentHour - 12}:${currentMinute < 10 ? '0' + currentMinute : currentMinute} PM.`;
    }

    outputDiv.innerHTML = timeMessage;
}

// Lap 3: Calculator

function showCalculator() {
    const calculator = document.getElementById('calculator');
    calculator.style.display = calculator.style.display === 'none' || calculator.style.display === '' ? 'block' : 'none';
}
