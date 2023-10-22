function Register(event){
    event.preventDefault();
    // alert("Function Calling....")

    // console.log(document.getElementById("name").value)

    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // console.log(name, "- name",  number, "- number", email, "- email", password, "password") 

    var userData = { userName: name, userNumber: number, userEmail: email, userpassword: password };
    console.log(userData, "-userData")

    localStorage.setItem("user", JSON.stringify(userData));

    

    document.getElementById("name").value = '';
    document.getElementById("number").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';


    alert("Data store in LS.")

} 