// function addNum(a,b){
//     //block
//     console.log(a+b)
// }
// addNum(10,20)
// addNum(100,20)

// // events-onClick, onSubmit
// // addEventListener('event', function)

// // DOM -> Document Object Model
// document.getElementById('btn').addEventListener('click',
//     function(){
//         console.log("message arrived");
//         alert("dashboard opened");
//     }
// )
// document.getElementById("one").innerHTML="Content from javascript";
// document.getElementById("two").innerHTML="My name is Mahesh.Vadladi I am from Vijayawada, Andhra Pradesh currently pursing by bachelor of technology"

document.getElementById("myForm").addEventListener("submit",
    function(e){
        e.preventDefault();
        var username = document.forms['myForm']['username'].value;
        // alert(username)
        //John 35
        var usernameRegex=/^[a-zA-Z0-9]{3, }$/;
        // test
        //&&, ||, !
        if (!usernameRegex.test(username)) {
            alert("Invalid Username");
            return false;
        }
        alert("Form submitted Successfully")
        return true;
       // alert("Form submitted Successfully")
    }
)