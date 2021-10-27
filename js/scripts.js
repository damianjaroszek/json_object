var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    hobbies: ["sport", "technologie"],
    birthdate: new Date(1970, 2, 15),
    married: false,
    salary: 2000,
    sayHello: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.birthdate.getDate()); //--> 15

var personJSON = JSON.stringify(person); // zamiana obiektu na format JSON 

console.log(personJSON);

var personAgain = JSON.stringify(personJSON, null, 4); // trzeci parametr odpowiada za wcięcie
/*{
    "firstName": "Jan",
    "lastName": "Kowalski",
    "hobbies": [
        "sport",
        "technologie"
    ],
    "birthdate": "1970-03-14T23:00:00.000Z",
    "married": false,
    "salary": 2000
}*/

console.log(personAgain);

