let stuFun=()=>{
    let pay = document.getElementById("payment");
    pay.addEventListener("change", function() {
      if (pay.checked) {
        pay.value=true
      } else {
        pay.value=false
      }
    });

    let shift=document.getElementById("shift").value
    let name=document.getElementById("name").value
    let address=document.getElementById("address").value
    let email=document.getElementById("email").value
    let dob=document.getElementById("dob").value
    let pass=document.getElementById("password").value
    let mobile=document.getElementById("mobile").value
    let payment=pay.value

   // console.log(dob)
    fetch("http://localhost:8080/register/addStudent", {

        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email":email,
            "password":pass,
            "address": address,
            "mobile": mobile,
            "DOB":dob,
            "wantedShift":shift,
            "payment":payment
            
        })
        
    }).then(response => {
        if(response.status == 201 | response.status == 200){
            response.json().then(data => {
              //  console.log(data);
                alert("Student sucessfully registered with email: "+data.email)
            });
        }else{
            response.json().then(data => alert(data.message));
        }
    })


}

let admFun=()=>{
    let name=document.getElementById("name").value
    let address=document.getElementById("address").value
    let email=document.getElementById("email").value
    let dob=document.getElementById("dob").value
    let pass=document.getElementById("password").value
    let mobile=document.getElementById("mobile").value

   // console.log(dob)
    fetch("http://localhost:8080/register/admin", {

        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email":email,
            "password":pass,
            "address": address,
            "mobile": mobile,
            "DOB":dob
            
        })
        
    }).then(response => {
        if(response.status == 201 | response.status == 200){
            response.json().then(data => {
              //  console.log(data);
                alert("Student sucessfully registered with email: "+data.email)
            });
        }else{
            response.json().then(data => alert(data.message));
        }
    })


}


// ============================================admin
let aLogin=()=>{
    let url = "http://localhost:8080/logIn";
    let username =document.getElementById("mobile").value;
    let password =document.getElementById("password").value;
    let credentials = `${username}:${password}`;
    let base64Credentials = btoa(credentials);

     fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Basic ${base64Credentials}`
        }
    })
    .then(response => {
        if (response.status == 202) {
            response.json().then(data => {
              //  console.log(response.headers.get("Authorization"));
                document.getElementById("response").textContent = "Token: " + response.headers.get("Authorization");
                // alert("Student sucessfully registered with email: "+data.email)
              });
        
               
        } else {
            alert("Authentication failed" );
        }
    })

}
let sLogin=()=>{
    let url = "http://localhost:8080/signIn";
    let username =document.getElementById("email").value;
    let password =document.getElementById("password").value;
    let credentials = `${username}:${password}`;
    let base64Credentials = btoa(credentials);

     fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Basic ${base64Credentials}`
        }
    })
    .then(response => {
        if (response.status == 202) {
            response.json().then(data => {
                console.log(data);
                document.getElementById("response").textContent = response.headers.get("Authorization");
                // alert("Student sucessfully registered with email: "+data.email)
              });
        
               
        } else {
            alert("Authentication failed" );
        }
    })

}