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

   // console.log(payment)
    fetch("http://localhost:8080/register/students", {

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
            "wantedShift":shift
            
        })
    }).then(response => {
        if(response.status == 201 | response.status == 200){
            response.json().then(data => {
                alert("Student sucessfully registered with email: "+data.email)
            });
        }else{
            response.json().then(data => alert(data.message));
        }
    })


}