var _$b2 = 20;
console.log(_$b2);

// camelCaseNotation
// Primitive -Datatype-IMMUTABLE
// Number, String, Boolean, null, undefined, BigInt
// Non-Primitive -Datatype-MUTABLE
// Array, Object

var a = 10;
console.log(a);
console.log(typeof(a));

var a = 100.9;
console.log(a);
console.log(typeof(a));

var a = `Frontend`;
console.log(a);
console.log(typeof(a));

var a = true;
console.log(a);
console.log(typeof(a));

var a = null;
console.log(a);
console.log(typeof(a));

var b;
console.log(b);
console.log(typeof(b));

var a = 65897456158932548648n;
console.log(a);
console.log(typeof(a));

var usernames = ["Sasidar", "Thanmayee", "tharuni", "kowshik", "aditya"];
console.log(usernames);
console.log(usernames[1], usernames[10]);
console.log(usernames.pop());
console.log(usernames);
console.log(usernames.push("Mahesh"));
console.log(usernames);

var student = {
    username: "Mahesh",
    place: "America",
    course: "Frontend"
}
console.log(student);
console.log(student.username);
console.log(student["place"]);

var syllabus = [
    {
        id: 1,
        course: "MBBS",
    },
    {
        id: 2,
        course: "Barch",
    },
    {
        id: 3,
        course: "UPSC",
    },
]
console.log(syllabus);
console.log(syllabus[2].course);