let stuFun=()=>{
    // let payment=false;
    // let pay = document.getElementById("payment");
    // if (pay.checked) {
    // payment=pay.value
    // }
    let shift="";
    let First=document.getElementById("First")
    let Second=document.getElementById("Second")
    let Third=document.getElementById("Third")
    if(First.checked){
        shift+=First.value
    }if(Second.checked){
        shift+=Second.value
    }if(Third.checked){
        shift+=Third.value
    }
// console.log(shift);
    //let shift=document.getElementById("shift").value
    let name=document.getElementById("name").value
    let address=document.getElementById("address").value
    let email=document.getElementById("email").value
    let dob=document.getElementById("dob").value
    let pass=document.getElementById("password").value
    let mobile=document.getElementById("mobile").value

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
            "payment":'false'
            
        })
        
    }).then(response => {
        if(response.status == 201 | response.status == 200){
            response.json().then(data => {
              //  console.log(data);
                alert("Student sucessfully registered with email: "+data.email)
                window.location.reload()
            });
        }else{
            response.json().then(data => alert(data.message));
        }
    })


}

let admFun=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let name=document.getElementById("name").value
    let address=document.getElementById("address").value
    let email=document.getElementById("email").value
    let dob=document.getElementById("dob").value
    let pass=document.getElementById("password").value
    let mobile=document.getElementById("mobile").value

   // console.log(dob)
    fetch("http://localhost:8080/admin/admin", {

        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
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
        if(response.status == 201){
            response.json().then(data => {
              //  console.log(data);
                alert("Student sucessfully registered with id: "+data.id)
            });
        }else{
            response.json().then(data => alert(data.message));
        }
    })


}

