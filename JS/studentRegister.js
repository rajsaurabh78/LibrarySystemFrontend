let defaultUrl="data:image/png;base64,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"
let stuFun=()=>{
    let payment=false;
    let pay = document.getElementById("payment");
    if (pay.checked) {
    payment=pay.value
    }
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
   // let payment=pay.value
//console.log(payment);
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
               // console.log(data);
                localStorage.setItem("UserToken",JSON.stringify(response.headers.get("Authorization")));
                localStorage.setItem("data",JSON.stringify(data));
                localStorage.setItem("userId",JSON.stringify(data.userId));
                window.location.href="UserMethod.html"
              });    
        } else {
            alert("Authentication failed" );
        }
    })

}

let getStudent=()=>{
    let el=JSON.parse(localStorage.getItem("data"))
        document.querySelector("#list").innerHTML=[]
        let div=document.createElement("div")
        let n=document.createElement("h3")
        n.innerText="Name : "+el.name
        let id=document.createElement("h4")
        id.innerText="User Id : "+el.userId
        let e=document.createElement("h4")
        e.innerText="Email : "+el.email
        let m=document.createElement("h4")
        m.innerText="Mobile : "+el.mobile
        let D=document.createElement("h4")
        D.innerText="DOB : "+el.DOB
        let a=document.createElement("h4")
        a.innerText="Address : "+el.address
        let pay=document.createElement("h4")
        pay.innerText="Payment : "+el.payment
        let w=document.createElement("h4")
        w.innerText="WantedShift : "+el.wantedShift
        let ps=document.createElement("h4")
        ps.innerText="ProvidedShift : "+el.providedShift
        let remove=document.createElement("button")
            remove.innerText="Remove"
            remove.style.color="red"
            remove.addEventListener("click",function(){
        removebtnfunc(el.userId,token)
        })
        let update=document.createElement("button")
            update.innerText="Update"
            update.style.color="green"
            update.addEventListener("click",function(){
            localStorage.setItem("UserId",JSON.stringify(el.userId))
            window.location.href="ownProfileUpdate.html"
        })
    div.append(n,id,e,m,D,a,pay,w,ps,update,remove)
    document.querySelector("#list").append(div)
}

let updateOwnProfile=()=>{
    let payment=false;
    let pay = document.getElementById("payment");
    if (pay.checked) {
    payment=pay.value
    }
    let shift="";
    let First=document.getElementById("First")
    let Second=document.getElementById("Second")
    let Third=document.getElementById("Third")
    if(First.checked){
        shift+=First.value+" , "
    }if(Second.checked){
        shift+=Second.value+" , "
    }if(Third.checked){
        shift+=Third.value
    }
    let token=JSON.parse(localStorage.getItem("UserToken"))
    let id=JSON.parse(localStorage.getItem("UserId"))
    let name=document.getElementById("name").value
    let address=document.getElementById("address").value
    let email=document.getElementById("email").value
    let dob=document.getElementById("dob").value
    let pass=document.getElementById("password").value
    let mobile=document.getElementById("mobile").value
    //let pay=document.getElementById("payment").value
    //let shift=document.getElementById("shift").value

   // console.log(dob)
    fetch("http://localhost:8080/students/student", {

        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "userId":id,
            "name": name,
            "email":email,
            "password":pass,
            "address": address,
            "mobile": mobile,
            "DOB":dob,
            "payment":payment,
            "wantedShift":shift
        })
        
    }).then(response => {
        if(response.status == 200){
            response.json().then(data => {
              //  console.log(data);
                alert("User sucessfully updated with id: "+data.userId)
                localStorage.setItem("data",JSON.stringify(data));
                window.location.href="ownProfile.html"
            });
        }else if(response.status == 401){
                alert("Session expired .")
                window.location.href="studentLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })

}
// let adminFun=()=>{
//     let tk=JSON.parse(localStorage.getItem("jwtToken"))
//     if(tk==null){
//         window.location.href="adminLogin.html"
//     }else{
//         window.location.href="AdminMethod.html"
//     }
// }
// let userFun=()=>{
//     let tk=JSON.parse(localStorage.getItem("UserToken"))
//     if(tk==null){
//         window.location.href="studentLogin.html"
//     }else{
//         window.location.href="UserMethod.html"
//     }
// }
