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
        shift+=First.value+" , "
    }if(Second.checked){
        shift+=Second.value+" , "
    }if(Third.checked){
        shift+=Third.value
    }
//console.log(shift);
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
                localStorage.setItem("jwtToken",JSON.stringify(response.headers.get("Authorization")));
                localStorage.setItem("admin",JSON.stringify(data));
                window.location.href="AdminMethod.html"
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
let adminFun=()=>{
    let tk=JSON.parse(localStorage.getItem("jwtToken"))
    console.log(tk);
    if(tk==null){
        window.location.href="adminLogin.html"
    }else{
        window.location.href="AdminMethod.html"
    }
}
let userFun=()=>{
    let tk=JSON.parse(localStorage.getItem("UserToken"))
    if(tk==null){
        window.location.href="studentLogin.html"
    }else{
        window.location.href="UserMethod.html"
    }
}
let getAdminProfile=()=>{
    let el=JSON.parse(localStorage.getItem("admin"))
        document.querySelector("#list").innerHTML=[]
        let div=document.createElement("div")
        let n=document.createElement("h3")
        n.innerText="Name : "+el.name
        let id=document.createElement("h4")
        id.innerText="Admin Id : "+el.id
        let e=document.createElement("h4")
        e.innerText="Email : "+el.email
        let m=document.createElement("h4")
        m.innerText="Mobile : "+el.mobile
        let D=document.createElement("h4")
        D.innerText="DOB : "+el.DOB
        let a=document.createElement("h4")
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
            localStorage.setItem("adminId",JSON.stringify(el.id))
            window.location.href="updateAdmin.html"
        })
    div.append(n,id,e,m,D,a,update,remove)
    document.querySelector("#list").append(div)
}