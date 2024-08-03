let currentLabId;
let currentShiftId;
let currentToken;
let currentAdminId;
let currentUserId;
let defaultUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAZlBMVEX///9mZmZgYGDl5eVTU1OsrKxcXFxkZGSxsbFXV1dhYWHe3t5aWlpWVlbq6upzc3OTk5OJiYn4+PjNzc3CwsJubm59fX27u7uWlpaFhYXR0dH09PSmpqbKysrh4eGUlJRKSkqfn5/yIy7PAAAIRklEQVR4nO2ca3ejIBCGBQ1eI8Z4STVm6///kyso4gVMPM1uQjrPh/acaHsyr8PMMCCWBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBx2Zesv3krvHmX4/77rP6L1id9qrp1pRPA9CKHn//qNn07mI4Sii/LahV17ANdX/70pJAGzgqiMuEaPScD+/vrfv/gTueDeiGR1JXzQCzhHk4NC5QxPcuUJp2CHBsHpFV/+WZRHpPSE+LhDgs4RNpLL+1MOw34RGC973KBzBLPDYqkaDjXeJUH31/XLDHgGoydMhoO3VwN8eJ0Bz2DtCWm+UwKE8vSVJvyccsiDY2C0H68NBFH2UhN+DhfBnXhCSPY7wksteAJjivwzfBDu9gS/eqkFT0AERukJe6Mioi814BmsAmPoLI0Mgm6W2E0VXbUGylmHWawC48wTcBTQ5FpmTVZekyIgKi8hJ7OLhI4MLz1BTJtcJ79WU/vq6po7a3cI0ME2MkWGSY47L8fyyUpPIMzOgCSqaWGY4LUzBH4k2yv5HzPCZFz465nBLEX6l1j3t62vCQ2jIl8GjI4YKedGMkU6dGtGaNM7dUSAdAK+D1QX48VwuGdCeafV4r59xsy0ldDDiS7UpcqBqPynFvycjamRor1m1bewCu3FEK/pdqvhzWvoelUG6T0hbf7kOPL9Y4TzJJvqkG6L4Lx3WLS3NJh5gn2JiLQ0wH5ykxfrlTu5E1Wc926zbWsgs4N1OS4fdXBMZLiM59mBoNMpGD8yW4NJsaQoBAIiOwbVNLaSa1crpq34yHANNHMHwVEu0l3lddFeFV1ZczUYDJDFkqoOIHJZQX6IB5ttYrgGpHNld2am0hOkCJXUSMyakNkauIWVLRdflO01udJYiIjhDhqk2GwNyLmrIUVTZVMER0wNK3GVNP0HjeFjgdd22bqpoiqLhevLqQdPmvaokpkaYI9fXg8HRWAk3nCxFAHDdUvb9gIhiaEaiPI2G9x5MzDiwREmhTd2HHmjoRqIaU42jvHRE9YTzXFiSDWCGqkBFsFeWiU9gaxigugQHNTdeDM18IdNVvVk+G9UjP4wcTirmxFmakAGo5ppMpwMh4UniHlDrO6rmamBSHftbLKoDYzBMG1I1f/MTA1ESDzNH7guMI6bkdRB0UgNukK5Z9lwnXiCq7q/UHYWjdQg+BouzzVwtWWz8Juvz9HAFRrkK5tGT7hNU+QnaqAbC0idIsclhA8aC2PRo3quowi3MTCOfvNBMVGTG4UIqxT5kbkRDzVSqSx+V4ERDxOG+KNq5aEvotmvKwNjnyJFrVyplx7N1GBsCSivrjxBpAXNvk4zNRgTw0Gzso7HwEgmiqnTgqEaIEe0RXTL0tITgnGncqr7Z2ZqMK4gtboNelIERyy0ZBqnMVQDJAZDrV1RlilSLCsXmjtN1SASm7Ay7asceLE/Qbux1VQN5Ls5iXa7Kpm/v3PSbUcxVQPkC0fY2GAx26kSah3GWA3kVqo0f0gETVPZZA1k1rfqQrv/Tg4HT79Hz1wNEJGbbdqjbqxvr0UarwFy5V6qsNDtQpzMHT5Rg7GlxmioMwkLbuBQscF7c6eK6RogPEt+t5aSAUyvN+ssFmTFXfaH1YnCvPlG/DpsyrJshsqw8RdSaTzBbA0QplvblRUiqGKn4RogF2+9gdAclyIEChFM1wC50WXjxZQzXoqgiAnGa9DZR0qdCmk53rRor32YBi4iuafadl17SD71jcD4ARpwC/1TM5ehzr78mbVYuQL1QRp0+IRevKYKb2GVeRcaLTch6D3hzTWIH9eAWYlFjaScSepSpPPmbzTtf719SyN1YIxeauF9dh388rgI0xT59sfF3Pad/HJXBDHNsmVg9G+b3+AN2HEQ1EMirAJjZMDxUfr+yG5cNIsJ/DPtWWxvRUOd+wfDPcLKEzA50ualtj3OLTs8ATGqpAjXDzhWcCeVmEV+3b/3Y1lNpX8jZx88QXaWfrMI52Vg/I2M3ebf7AmrRutvxPQUmbb9VsNwo8hv7xU+jWO0J6Qo4i2zZuPsimDdbT/Nj8wzO0WmLuVL7ueNg1zQWoOvxZEnZ80ZrUaQRpXPfjcbGrgKDZZHJ4rA+P3ex4AoSY9xwezhGtRXSscHXB/SBJ1YdxRVZZFzb4lbyu8u6clLu18FbYXNgyd8v3c7VUmnQYWsfiykNAmrXEz/Yz8v4wN7/zWniV0dO3HSoL1V7BjVhrZZal1RFSbjy8/93MF5kR0/odOAxzzmB5nbfVB/D03h2GEuUXT5ImeDPOtu8NgmRvu7s5p5Q38nHUdFFRHim3i8KNOgLHoNEu7vwqiYm1jSISZWXeIo+EBhkjEN+hDiyXxol56BI6HXIHVsblDOY18yVAox38IckkGDc6dBv4+T5QSmwZWPmq2kaghMA+uacA0wN/EyBIT4yH7anRKjBv36UXLoNbhwsSr8ku/9TLgG3SNnMZHMNeArJTMN+qDPHIVpkHyUBt2jrZgfLMYC+xn6Uw34wsGXN/hBPxbQK772U+k1uBEeD3hLuBi2asYs/vPhPmpAuEjsNqbBgdeE5dufFHiXXgOrKLrc0DKjUmdYJYq/mcXss1GDE3MRnhKZBhVht50MP3XdYiZzDc5Op0HIfN0TcT6OaNoVA9VEg4oFxZYVCczylL3dFn6/+RrzA6TDW33MD6zMoSgQNsXHklCHPXmeM1nAsLzuhpxVx5WDa+uGXHo0ZUnlYVJbFjnxt5XeljOg8YaUX4nNPFf4YfqY+LsBDdhZJ6ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8JH8BVNXbnf1x5bcAAAAAElFTkSuQmCC"
let aLogin=()=>{
    let url = "http://localhost:8080/logIn";
    let username =document.getElementById("mobile").value;
    let password =document.getElementById("password").value;
    let credentials = `${username}:${password}`;
    let base64Credentials = btoa(credentials);

     fetch(url, {
        method: "GET", 
        headers: {
            "Authorization": `Basic ${base64Credentials}`
        }
    })
    .then(response => {
        if (response.status == 202) {
            response.json().then(data => {
                localStorage.setItem("jwtToken",JSON.stringify(response.headers.get("Authorization")));
              //  localStorage.setItem("admin",JSON.stringify(data));
                alert("Successfully loged in.")
                window.location.href="AdminMethod.html"
            });
        
               
        } else {
            alert("Authentication failed" );
        }
    })

}
let getAllStudentInSortingOrder=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let f=document.getElementById("fie").value
    let d=document.getElementById("dir").value
//    console.log(d);
   // const studentTableBody = document.getElementById('student-table-body');
    let url=`http://localhost:8080/admin/students?field=${f}&direction=${d} `
    fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
          //  console.log(data);
            document.querySelector("#list").innerHTML=[]
            data.forEach(({name,DOB,address,email,mobile,payment,wantedShift,providedShift,userId,seats,photoUrl},i)=> {
                
                
                let div=document.createElement("div")
                let n=document.createElement("h3")
                n.innerText="Name : "+name
                let img = document.createElement("img");
                img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                img.alt = "User Photo";
                let id=document.createElement("h4")
                id.innerText="User Id : "+userId
                let e=document.createElement("h4")
                e.innerText="Email : "+email
                let m=document.createElement("h4")
                m.innerText="Mobile : "+mobile
                let D=document.createElement("h4")
                D.innerText="DOB : "+DOB
                let a=document.createElement("h4")
                a.innerText="Address : "+address
                let p=document.createElement("h4")
                p.innerText="Payment : "+payment
                let w=document.createElement("h4")
                w.innerText="WantedShift : "+wantedShift
                let ps=document.createElement("h4")
                ps.innerText="ProvidedShift : "+providedShift
                console.log(seats);
                let remove=document.createElement("button")
                    remove.innerText="Remove"
                    remove.style.color="red"
                    remove.addEventListener("click",function(){
                removebtnfunc(userId,token)
                })
                let Setseat=document.createElement("button")
                Setseat.innerText="SetSeat"
                Setseat.style.color="green"
                Setseat.addEventListener("click",function(){
                    setSeat(userId,token)
                })
                let rseat=document.createElement("button")
                rseat.innerText="RemoveSeat"
                rseat.style.color="red"
                rseat.addEventListener("click",function(){
                    removeSeat(userId,token)
                })
                let seatM=document.createElement("button")
                seatM.innerText="SetSeatManual"
                seatM.style.color="green"
                seatM.addEventListener("click",function(){
                    setSeatManual(userId,token)
                })
            div.append(img,n,id,e,m,D,a,p,w,ps,remove,Setseat,rseat,seatM)
            document.querySelector("#list").append(div)
            
    })});}else if(response.status == 401){
        alert("Session expired .")
        window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })

}

let removebtnfunc=(userId,token)=>{
    
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch("http://localhost:8080/admin/studentdel/"+userId, {

    method: "DELETE",
    headers: {
        "Authorization": `Bearer ${token}`
      //  "Content-Type": "application/json",
    }
   
}).then(response => {
    if(response.status == 200){

        response.text().then(data => {
            alert(data)
            window.location.reload();
        })
            
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
        response.json().then(data => alert(data.message));
        window.location.reload()
    }
})
    }

}

let removeSeat=(userId,token)=>{
    
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch("http://localhost:8080/admin/upseat/"+userId, {

    method: "PUT",
    headers: {
        "Authorization": `Bearer ${token}`
      //  "Content-Type": "application/json",
    }
   
}).then(response => {
    if(response.status == 200){
      //  console.log(response.json().data);
        response.text().then(data => {
            alert(data)
            window.location.reload();
        })

        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
        response.json().then(data => alert(data.message));
    }
})
    }

}

let setSeat=(userId,token)=>{
    
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch("http://localhost:8080/admin/studentseat/"+userId, {

    method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`
      //  "Content-Type": "application/json",
    }
   
}).then(response => {
    if(response.status == 200){
        response.text().then(data => {
            alert(data);
            window.location.reload()
        })

    }else if(response.status == 401){
        alert("Session expired .")
        window.location.href="adminLogin.html"
    }else{
        response.json().then(data => alert(data.message));
    }
})
    }

}
let updateUser=()=>{
    const getFieldValue = (id) => {
        const value = document.getElementById(id).value.trim();
        return value === "" ? null : value;
    }

    const name = getFieldValue("name");
    const email = getFieldValue("email");
    const mobile = getFieldValue("mobile");
    const address = getFieldValue("address");
    const pass = getFieldValue("password");
    // const photo = getFieldValue("photo");
    const dob = getFieldValue("dob");
    // let payment=false;
    // let pay = document.getElementById("payment");
    // if (pay.checked) {
    // payment=pay.value
    // }
    let shift="";
    let First=getFieldValue("First")
    let Second=getFieldValue("Second")
    let Third=getFieldValue("Third")
    if(First.checked){
        shift+=First.value
    }if(Second.checked){
        shift+=Second.value
    }if(Third.checked){
        shift+=Third.value
    }
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let id=JSON.parse(localStorage.getItem("UserId"))
 
   // console.log(dob)
    fetch("http://localhost:8080/students/student", {

        method: "PATCH",
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
            "wantedShift":shift
        })
        
    }).then(response => {
        if(response.status == 200){
            response.json().then(data => {
              //  console.log(data);
                alert(data)
                window.location.href="AdminMethod.html"
            });
        }else if(response.status == 401){
                alert("Session expired .")
                window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })

}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let getAllSortedStudentWithPagination=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let p=document.getElementById("page").value
    let s=document.getElementById("size").value
    let f=document.getElementById("field").value
    let d=document.getElementById("dirn").value
   // const studentTableBody = document.getElementById('student-table-body');
    let url=`http://localhost:8080/admin/stu/${p}/${s}?field=${f}&direction=${d}`
    fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
           // console.log(data);
            document.querySelector("#list").innerHTML=[]
            data.forEach(({name,DOB,address,email,mobile,payment,wantedShift,providedShift,userId,photoUrl},i)=> {
                let div=document.createElement("div")
                let n=document.createElement("h3")
                n.innerText="Name : "+name
                let id=document.createElement("h4")
                id.innerText="User Id : "+userId
                let e=document.createElement("h4")
                e.innerText="Email : "+email
                let m=document.createElement("h4")
                let img = document.createElement("img");
                img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                img.alt = "User Photo";
                m.innerText="Mobile : "+mobile
                let D=document.createElement("h4")
                D.innerText="DOB : "+DOB
                let a=document.createElement("h4")
                a.innerText="Address : "+address
                let pay=document.createElement("h4")
                pay.innerText="Payment : "+payment
                let w=document.createElement("h4")
                w.innerText="WantedShift : "+wantedShift
                let ps=document.createElement("h4")
                ps.innerText="ProvidedShift : "+providedShift
                let remove=document.createElement("button")
                    remove.innerText="Remove"
                    remove.style.color="red"
                    remove.addEventListener("click",function(){
                removebtnfunc(userId,token)
                })
               
                let seat=document.createElement("button")
                seat.innerText="SetSeat"
                seat.style.color="green"
                seat.addEventListener("click",function(){
                    setSeat(userId,token)
                })
                let rseat=document.createElement("button")
                rseat.innerText="RemoveSeat"
                rseat.style.color="red"
                rseat.addEventListener("click",function(){
                    removeSeat(userId,token)
                })
                let seatM=document.createElement("button")
                seatM.innerText="SetSeatManual"
                seatM.style.color="green"
                seatM.addEventListener("click",function(){
                    setSeatManual(userId,token)
                })
            div.append(img,n,id,e,m,D,a,pay,w,ps,remove,seat,rseat,seatM)
            document.querySelector("#list").append(div)
            
    })});}else if(response.status == 401){
        alert("Session expired .")
        window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })

}
//================================================================
let getStudentById=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let user=document.getElementById("id").value
    let url=`http://localhost:8080/admin/students/${user}`
    fetch(url, {
        method: "GET", 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
       //     console.log(data);
                document.querySelector("#list").innerHTML=[]
                let el=data
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
                let photo = document.createElement("img");
                photo.src = el.photoUrl || defaultUrl; // Replace with the actual default photo URL
                photo.className = "student-photo";

                let remove=document.createElement("button")
                    remove.innerText="Remove"
                    remove.style.color="red"
                    remove.addEventListener("click",function(){
                removebtnfunc(el.userId,token)
                })
                let seat=document.createElement("button")
                seat.innerText="SetSeat"
                seat.style.color="green"
                seat.addEventListener("click",function(){
                    setSeat(el.userId,token)
                })
                let rseat=document.createElement("button")
                rseat.innerText="RemoveSeat"
                rseat.style.color="red"
                rseat.addEventListener("click",function(){
                    removeSeat(el.userId,token)
                })
                let seatM=document.createElement("button")
                seatM.innerText="SetSeatManual"
                seatM.style.color="green"
                seatM.addEventListener("click",function(){
                    setSeatManual(el.userId,token)
                })
            div.append(photo,n,id,e,m,D,a,pay,w,ps,remove,seat,rseat,seatM)
            document.querySelector("#list").append(div)
        });
    }else if(response.status == 401){
        alert("Session expired .")
    window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            // window.location.reload()
        }
    })
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let getStudentBySeat=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let user=document.getElementById("id").value
    let url=`http://localhost:8080/admin/getstudent/${user}`
    fetch(url, {
        method: "GET", 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
           // console.log(data);
            document.querySelector("#list").innerHTML=[]
            let el=data
            let div=document.createElement("div")
            let n=document.createElement("h3")
            n.innerText="Name : "+el.name
            let id=document.createElement("h4")
            id.innerText="User Id : "+el.userId
            let img = document.createElement("img");
            img.src = el.photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
            img.alt = "User Photo";
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
            let seat=document.createElement("button")
            seat.innerText="SetSeat"
            seat.style.color="green"
            seat.addEventListener("click",function(){
                setSeat(el.userId,token)
            })
            let rseat=document.createElement("button")
            rseat.innerText="RemoveSeat"
            rseat.style.color="red"
            rseat.addEventListener("click",function(){
                removeSeat(el.userId,token)
            })
            let seatM=document.createElement("button")
            seatM.innerText="SetSeatManual"
            seatM.style.color="green"
            seatM.addEventListener("click",function(){
                setSeatManual(el.userId,token)
            })
            div.append(img,n,id,e,m,D,a,pay,w,ps,remove,seat,rseat,seatM)
            document.querySelector("#list").append(div)
    });
        }else if(response.status == 401){
            alert("Session expired .")
        window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let getStudentByFloor=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let user=document.getElementById("id").value
   // const studentTableBody = document.getElementById('student-table-body');
    let url=`http://localhost:8080/admin/studentfl/${user}`
    fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
           // console.log(data);
           document.querySelector("#list").innerHTML=[]
           document.getElementById("sum").innerText="Total student : "+data.length
           data.forEach(({name,DOB,address,email,mobile,payment,wantedShift,providedShift,userId,photoUrl},i)=> {
              
            let div=document.createElement("div")
            let n=document.createElement("h3")
            n.innerText="Name : "+name
            let id=document.createElement("h4")
            id.innerText="User Id : "+userId
            let e=document.createElement("h4")
            e.innerText="Email : "+email

            let img = document.createElement("img");
            img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
            img.alt = "User Photo";

            let m=document.createElement("h4")
            m.innerText="Mobile : "+mobile
            let D=document.createElement("h4")
            D.innerText="DOB : "+DOB
            let a=document.createElement("h4")
            a.innerText="Address : "+address
            let pay=document.createElement("h4")
            pay.innerText="Payment : "+payment
            let w=document.createElement("h4")
            w.innerText="WantedShift : "+wantedShift
            let ps=document.createElement("h4")
            ps.innerText="ProvidedShift : "+providedShift
            let remove=document.createElement("button")
                remove.innerText="Remove"
                remove.style.color="red"
                remove.addEventListener("click",function(){
                localStorage.setItem("UserId",JSON.stringify(userId))
                window.location.href="userUpdate.html"
            })
            let seat=document.createElement("button")
            seat.innerText="SetSeat"
            seat.style.color="green"
            seat.addEventListener("click",function(){
                setSeat(userId,token)
            })
            let rseat=document.createElement("button")
            rseat.innerText="RemoveSeat"
            rseat.style.color="red"
            rseat.addEventListener("click",function(){
                removeSeat(userId,token)
            })
            let seatM=document.createElement("button")
            seatM.innerText="SetSeatManual"
            seatM.style.color="green"
            seatM.addEventListener("click",function(){
                setSeatManual(userId,token)
            })
          div.append(img,n,id,e,m,D,a,pay,w,ps,remove,seat,rseat,seatM)
          document.querySelector("#list").append(div)
          
  })});
}else if(response.status == 401){
    alert("Session expired .")
    window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}
//'''''''''''''''''''''''''''''''''''
let getStudentByShift=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let user=document.getElementById("id").value
   // const studentTableBody = document.getElementById('student-table-body');
    let url=`http://localhost:8080/admin/studentshift/${user}`
    fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
           console.log(data);
           document.querySelector("#list").innerHTML=[]
           document.getElementById("sum").innerText="Total student : "+data.length
           data.forEach(({name,DOB,address,email,mobile,payment,wantedShift,providedShift,userId,photoUrl},i)=> {
              
            let div=document.createElement("div")
              let n=document.createElement("h3")
              n.innerText="Name : "+name
              let img = document.createElement("img");
              img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
              img.alt = "User Photo";
              let id=document.createElement("h4")
              id.innerText="User Id : "+userId
              let e=document.createElement("h4")
              e.innerText="Email : "+email
              let m=document.createElement("h4")
              m.innerText="Mobile : "+mobile
              let D=document.createElement("h4")
              D.innerText="DOB : "+DOB
              let a=document.createElement("h4")
              a.innerText="Address : "+address
              let pay=document.createElement("h4")
              pay.innerText="Payment : "+payment
              let w=document.createElement("h4")
              w.innerText="WantedShift : "+wantedShift
              let ps=document.createElement("h4")
              ps.innerText="ProvidedShift : "+providedShift
              let remove=document.createElement("button")
                  remove.innerText="Remove"
                  remove.style.color="red"
                  remove.addEventListener("click",function(){
                    removebtnfunc(userId,token)
              })
              let seat=document.createElement("button")
              seat.innerText="SetSeat"
              seat.style.color="green"
              seat.addEventListener("click",function(){
                  setSeat(userId,token)
              })
              let rseat=document.createElement("button")
              rseat.innerText="RemoveSeat"
              rseat.style.color="red"
              rseat.addEventListener("click",function(){
                  removeSeat(userId,token)
              })
              let seatM=document.createElement("button")
                seatM.innerText="SetSeatManual"
                seatM.style.color="green"
                seatM.addEventListener("click",function(){
                    setSeatManual(userId,token)
                })
          div.append(img,n,id,e,m,D,a,pay,w,ps,remove,seat,rseat,seatM)
          document.querySelector("#list").append(div)
          
  })});
    }else if(response.status == 401){
        alert("Session expired .")
        window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}
//////////////////////////////////////////////////////////////////////////
let allAvalibleSeats=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let url=`http://localhost:8080/admin/seats`
    fetch(url, {
        method: "GET", 
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
         //  console.log(data);
         document.querySelector("#list").innerHTML=[]
         document.getElementById("sum").innerText+=data.length
           data.forEach(({floor,seatNo},i)=> {
            let div=document.createElement("div")
            let uid=document.createElement("h4")
            uid.innerText="Floor Id : "+floor
            let st=document.createElement("h4")
            st.innerText="Seat No. : "+seatNo
                let remove=document.createElement("button")
                    remove.innerText="Remove"
                    remove.style.color="red"
                    remove.addEventListener("click",function(){
                    deleteSeat(seatNo,token)
                })
            div.append(st,uid,remove)
            document.querySelector("#list").append(div)
            
    })});
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}
//====================================================================

let getStudentAreaWise=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let user=document.getElementById("id").value
    let url=`http://localhost:8080/admin/studentlist?address=${user}`
    fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
          //  console.log(data);
            document.querySelector("#list").innerHTML=[]
            data.forEach(({name,DOB,address,email,mobile,payment,wantedShift,providedShift,userId,photoUrl},i)=> {
                let div=document.createElement("div")
                let n=document.createElement("h3")
                n.innerText="Name : "+name
                let id=document.createElement("h4")
                id.innerText="User Id : "+userId
                let e=document.createElement("h4")
                e.innerText="Email : "+email
                let img = document.createElement("img");
                img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                img.alt = "User Photo";
                let m=document.createElement("h4")
                m.innerText="Mobile : "+mobile
                let D=document.createElement("h4")
                D.innerText="DOB : "+DOB
                let a=document.createElement("h4")
                a.innerText="Address : "+address
                let pay=document.createElement("h4")
                pay.innerText="Payment : "+payment
                let w=document.createElement("h4")
                w.innerText="WantedShift : "+wantedShift
                let ps=document.createElement("h4")
                ps.innerText="ProvidedShift : "+providedShift
                let remove=document.createElement("button")
                    remove.innerText="Remove"
                    remove.style.color="red"
                    remove.addEventListener("click",function(){
                removebtnfunc(userId,token)
                })
                let update=document.createElement("button")
                    update.innerText="Update"
                    update.style.color="green"
                    update.addEventListener("click",function(){
                        localStorage.setItem("UserId",JSON.stringify(userId))
                        window.location.href="userUpdate.html"
                })
                let seat=document.createElement("button")
                seat.innerText="SetSeat"
                seat.style.color="green"
                seat.addEventListener("click",function(){
                    setSeat(userId,token)
                })
                let rseat=document.createElement("button")
                rseat.innerText="RemoveSeat"
                rseat.style.color="red"
                rseat.addEventListener("click",function(){
                    removeSeat(userId,token)
                })
                let seatM=document.createElement("button")
                seatM.innerText="SetSeatManual"
                seatM.style.color="green"
                seatM.addEventListener("click",function(){
                    setSeatManual(userId,token)
                })
            div.append(img,n,id,e,m,D,a,pay,w,ps,remove,seat,rseat,seatM)
            document.querySelector("#list").append(div)
            
    })});
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}
//---------------------------------------------------------------------
let getAllStudentWithNoSeatNo=()=>{
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let url = `http://localhost:8080/admin/studentno`;
    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
                let tbody = document.querySelector("#studentTable tbody");
                tbody.innerHTML = "";
                document.getElementById("totalStudents").innerText = data.length;
                data.forEach(({name, payment, wantedShift, providedShift, userId, photoUrl}, index) => {
                    let row = document.createElement("tr");
                    
                    let serialNoCell = document.createElement("td");
                    serialNoCell.innerText = index + 1;

                    let photoCell = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                    img.alt = "User Photo";
                    img.className = "user-photo";
                    photoCell.appendChild(img);

                    let nameCell = document.createElement("td");
                    nameCell.innerText = name;
                    
                    let idCell = document.createElement("td");
                    idCell.innerText = userId;
                    
                    let paymentCell = document.createElement("td");
                    paymentCell.innerText = payment;
                    
                    let wantedShiftCell = document.createElement("td");
                    wantedShiftCell.innerText = wantedShift;
                    
                    let providedShiftCell = document.createElement("td");
                    providedShiftCell.innerText = providedShift;
                    
                    let actionsCell = document.createElement("td");

                    let remove = document.createElement("button");
                    remove.innerText = "Remove";
                    remove.className = "remove-btn";
                    remove.addEventListener("click", function() {
                        removebtnfunc(userId, token);
                    });

                    let seat = document.createElement("button");
                    seat.innerText = "Set Seat Auto";
                    seat.className = "set-seat-auto-btn";
                    seat.addEventListener("click", function() {
                        setSeat(userId, token);
                    });

                    let rseat = document.createElement("button");
                    rseat.innerText = "Remove Seat";
                    rseat.className = "remove-seat-btn";
                    rseat.addEventListener("click", function() {
                        removeSeat(userId, token);
                    });

                    let seatM = document.createElement("button");
                    seatM.innerText = "Set Seat Manual";
                    seatM.className = "set-seat-manual-btn";
                    seatM.addEventListener("click", function() {
                        setSeatManual(userId, token);
                    });

                    actionsCell.append(remove, seat, rseat, seatM);
                    row.append(serialNoCell, photoCell, nameCell, idCell, paymentCell, wantedShiftCell, providedShiftCell, actionsCell);
                    tbody.append(row);
                });
            });
        } else if(response.status == 401) {
            alert("Session expired.");
            window.location.href = "adminLogin.html";
        } else {
            response.json().then(data => alert(data.message));
            window.location.href = "AdminMethod.html";
        }
    });
}

let setSeatManual=(userId,token)=>{
    
    let choice= confirm("Are You Sure ?");
    let shift=prompt("Enter shift name");
    if(choice){
        fetch(`http://localhost:8080/admin/studentseats/${userId}?shiftName=${shift}`, {

        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        //  "Content-Type": "application/json",
        }
    
        }).then(response => {
        if(response.status == 200){
        response.text().then(data => {
            alert(data);
            window.location.reload()
        })

        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
        }
        })
    }

}

//''''''''''''''''''''''''''''''''''
let allStudentWithNoPay=()=>{
    let token = JSON.parse(localStorage.getItem("jwtToken"));
        let url = `http://localhost:8080/admin/studentnopay`;
        fetch(url, {
            method: "GET", // Change the HTTP method as needed
            headers: {
                "Authorization": `Bearer ${token}`
                //  "Content-Type": "application/json",
            }
        })
        .then(response => {
            if (response.status == 200) {
                response.json().then(data => {
                    document.querySelector("#list").innerHTML = "";
                    document.getElementById("totalStudents").innerText = data.length; // Update the total students count

                    data.forEach(({ name, payment, wantedShift, providedShift, userId, photoUrl }, i) => {
                        let div = document.createElement("div");
                        div.className = "student-item"; // Add class for styling

                        let img = document.createElement("img");
                        img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                        img.alt = "User Photo";

                        let infoDiv = document.createElement("div");

                        let n = document.createElement("h3");
                        n.innerText = "Name : " + name;
                        let id = document.createElement("h4");
                        id.innerText = "User Id : " + userId;
                        let pay = document.createElement("h4");
                        pay.innerText = "Payment : " + payment;
                        let w = document.createElement("h4");
                        w.innerText = "Wanted Shift : " + wantedShift;
                        let ps = document.createElement("h4");
                        ps.innerText = "Provided Shift : " + providedShift;

                        let remove = document.createElement("button");
                        remove.innerText = "Remove";
                        remove.className = "remove-btn"; // Add class for styling
                        remove.addEventListener("click", function () {
                            removebtnfunc(userId, token);
                        });

                        let update = document.createElement("button");
                        update.innerText = "Update Payment";
                        update.className = "update-btn"; // Add class for styling
                        update.addEventListener("click", function () {
                            updatePayment(token, userId);
                        });

                        infoDiv.append(n, id, pay, w, ps);
                        div.append(img, infoDiv, update, remove);
                        document.querySelector("#list").append(div);
                    });
    });}else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.href="AdminMethod.html"
        }
    })
}
let updatePayment=(token,id)=>{
    let choice= confirm("Are You Sure ?");
    if(choice){
        fetch(`http://localhost:8080/admin/uppay/${id}`, {

            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "content-type": "application/json"
            }
            
        }).then(response => {
            if(response.status == 200){
                response.text().then(data => {
                    alert(data)
                    window.location.reload()
                })
                
                
        
            }else if(response.status == 401){
                    alert("Session expired .")
                    window.location.href="adminLogin.html"
            }else{
                response.json().then(data => alert(data.message));
            }
        })
    }

}


//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
let getAdminById=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let user=document.getElementById("id").value
   // const studentTableBody = document.getElementById('student-table-body');
    let url=`http://localhost:8080/admin/admins/${user}`
    fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
          //  console.log(data);
            document.querySelector("#list").innerHTML=[]
            let el=data
                let div=document.createElement("div")
                let n=document.createElement("h3")
                n.innerText="Name : "+el.name
                let id=document.createElement("h4")
                id.innerText="User Id : "+el.id
                let e=document.createElement("h4")
                e.innerText="Email : "+el.email
                let img = document.createElement("img");
                img.src = el.photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                img.alt = "User Photo";
                let m=document.createElement("h4")
                m.innerText="Mobile : "+el.mobile
                let D=document.createElement("h4")
                D.innerText="DOB : "+el.DOB
                let a=document.createElement("h4")
                a.innerText="Address : "+el.address
                let remove=document.createElement("button")
                    remove.innerText="Remove"
                    remove.style.color="red"
                    remove.addEventListener("click",function(){
                removeAdmin(el.id,token)
                })
            div.append(img,n,id,e,m,D,a,remove)
            document.querySelector("#list").append(div)
});}else if(response.status == 401){
    alert("Session expired .")
    window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}

let updateAdminFun=(id)=>{
    localStorage.setItem("adminId",JSON.stringify(id))
    window.location.href="updateAdmin.html"
}

let removeAdmin=(userId,token)=>{
    
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch("http://localhost:8080/admin/deladmin/"+userId, {

    method: "DELETE",
    headers: {
        "Authorization": `Bearer ${token}`
      //  "Content-Type": "application/json",
    }
   
}).then(response => {
    if(response.status == 200){

        alert("Student sucessfully deleted: ");
       
            location.reload();
            //getAdminById();
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
    }else{
        response.json().then(data => alert(data.message));
        window.location.reload()
    }
})
    }

}


let updateAdmin=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))

    // const getFieldValue = (id) => {
    //     const value = document.getElementById(id).value.trim();
    //     return value === "" ? null : value;
    // }

    // const name = getFieldValue("updateName");
    // const email = getFieldValue("updateEmail");
    // const mobile = getFieldValue("updateMob");
    // const address = getFieldValue("updateAddress");
    // const pass = getFieldValue("password");
    // const photo = getFieldValue("photo");
    // const dob = getFieldValue("updateDob");

    let name=document.getElementById('updateName').value  ;
    let email=document.getElementById('updateEmail').value ;
    let Dob=document.getElementById('updateDob').value ;
    let mobile=document.getElementById('updateMob').value ;
    let address=document.getElementById('updateAddress').value ;
   // console.log(dob)
    fetch("http://localhost:8080/admin/upadmin", {

        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email":email,
            // "password":pass,
            "address": address,
            "mobile": mobile,
            "DOB":Dob
            
        })
        
    }).then(response => {
        if(response.status == 200){
            response.json().then(data => {
              //  console.log(data);
                alert("Admin sucessfully updated")
                window.location.href="adminProfile.html"
            });
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            // window.location.reload()
        }
    })
}

//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
let allAdmin=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let p=document.getElementById("page").value
    let s=document.getElementById("size").value
    let url=`http://localhost:8080/admin/admin/${p}/${s}`
    fetch(url, {
        method: "GET", 
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
                document.querySelector("#list").innerHTML=[]
                data.forEach(({name,DOB,address,email,mobile,id,photoUrl},i)=> {
                    let div=document.createElement("div")
                    let n=document.createElement("h3")
                    n.innerText="Name : "+name
                    let uid=document.createElement("h4")
                    uid.innerText="User Id : "+id
                    let e=document.createElement("h4")
                    e.innerText="Email : "+email
                    let img = document.createElement("img");
                    img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                    img.alt = "User Photo";
                    let m=document.createElement("h4")
                    m.innerText="Mobile : "+mobile
                    let D=document.createElement("h4")
                    D.innerText="DOB : "+DOB
                    let a=document.createElement("h4")
                    a.innerText="Address : "+address
                    let pay=document.createElement("h4")
                    let remove=document.createElement("button")
                        remove.innerText="Remove"
                        remove.style.color="red"
                        remove.addEventListener("click",function(){
                    removeAdmin(id,token)
                })
            div.append(img,n,uid,e,m,D,a,remove)
            document.querySelector("#list").append(div)
})});}else if(response.status == 401){
    alert("Session expired .")
    window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}

/////////////////////////???????????????????????????????????????????????????????????
let addFloor=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let lid=currentLabId;
    let name=document.getElementById("Fname").value
   console.log(lid);
   // console.log(dob)
    fetch(`http://localhost:8080/admin/addfloor/${lid}`, {

        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({"name": name})
        
    }).then(response => {
        if(response.status == 201){
            response.json().then(data => {
              console.log(data);
                alert("Sucessfully registered in library with Id :-"+lid)
                window.location.reload()
            });
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
        }
    })

}
let addLibrary=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let name=document.getElementById("name").value
    let floor=document.getElementById("floor").value
    let address=document.getElementById("address").value
   // console.log(dob)
    fetch("http://localhost:8080/admin/addlibrary", {

        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "address":address,
            "floorList":[
                {
                    "name":floor
                }
            ]
        })
        
    }).then(response => {
        if(response.status == 201){
            response.json().then(data => {
              //console.log(data);
                alert("Sucessfully registered library with Id :-"+data.labId)
            });
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}
let AllLibrary=()=>{
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let url = `http://localhost:8080/admin/librarys`;

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                let tbody = document.querySelector("#libraryTable tbody");
                tbody.innerHTML = ""; // Clear existing rows
                document.querySelector("#size").innerText = `Total Libraries: ${data.length}`;

                data.forEach(({ name, address, labId, photoUrl }, i) => {
                    let row = document.createElement("tr");

                    let serialNoCell = document.createElement("td");
                    serialNoCell.innerText = i + 1;

                    let nameCell = document.createElement("td");
                    nameCell.innerText = name;

                    let labIdCell = document.createElement("td");
                    labIdCell.innerText = labId;

                    let addressCell = document.createElement("td");
                    addressCell.innerText = address;

                    let actionsCell = document.createElement("td");

                    let remove = document.createElement("button");
                    remove.innerText = "Remove";
                    remove.className = "remove-btn";
                    remove.addEventListener("click", function() {
                        removeLibrary(labId, token);
                    });

                    let update = document.createElement("button");
                    update.innerText = "Update";
                    update.className = "update-btn";
                    update.addEventListener("click", function() {
                        openUpdateModal(labId, name, address);
                    });

                    let addFl = document.createElement("button");
                    addFl.innerText = "Add Floor";
                    addFl.className = "add-floor-btn";
                    addFl.addEventListener("click", function() {
                        currentLabId = labId;
                        openAddFloorModal();
                    });

                    let showFl = document.createElement("button");
                    showFl.innerText = "Show Floor";
                    showFl.className = "show-floor-btn";
                    showFl.addEventListener("click", function() {
                        localStorage.setItem("labId", JSON.stringify(labId));
                        window.location.href = "showFloor.html";
                    });

                    actionsCell.append(remove, update, addFl, showFl);
                    row.append(serialNoCell, nameCell, labIdCell, addressCell, actionsCell);
                    tbody.append(row);
                });
            });
        } else if (response.status == 401) {
            alert("Session expired.");
            window.location.href = "adminLogin.html";
        } else {
            response.json().then(data => alert(data.message));
            window.location.reload();
        }
    });

}

let openUpdateModal=(labId, name, address)=> {
    document.getElementById('updateModal').style.display = "block";
    document.getElementById('updateName').value = name;
    document.getElementById('updateAddress').value = address;
    currentLabId=labId;
    close("updateModal","close");
}
let openAddFloorModal=()=> {
    document.getElementById('updateModal2').style.display = "block";
    close("updateModal2","close2");
}
// Function to close the modal
let close=(x,y)=>{
    var modal = document.getElementById(`${x}`);
    var span = document.getElementsByClassName(`${y}`)[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Function to submit the update
function submitUpdate() {
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let name = document.getElementById('updateName').value;
    let address = document.getElementById('updateAddress').value;

    fetch(`http://localhost:8080/admin/library/${currentLabId}`, {
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, address: address })
    })
    .then(response => {
        if(response.status == 200) {
            alert('Library updated successfully');
            document.getElementById('updateModal').style.display = "none";
            AllLibrary(); // Refresh the list
        } else {
            response.json().then(data => alert(data.message));
        }
    });
}

let showFloor=()=>{
    let lid=JSON.parse(localStorage.getItem("labId"))
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let url=`http://localhost:8080/admin/floors/${lid}`
    fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
                //console.log(data);
                document.querySelector("#list").innerHTML=[]
                document.querySelector("#size").innerText="Total : "+data.length
                data.forEach(({name,floorNo,shiftList},i)=> {
                    let div=document.createElement("div")
                    let n=document.createElement("h3")
                    n.innerText="Name : "+name
                    let uid=document.createElement("h4")
                    uid.innerText="Floor Id : "+floorNo

                    let remove=document.createElement("button")
                    remove.innerText="Remove"
                    remove.style.color="red"
                    remove.addEventListener("click",function(){
                        removeFloor(floorNo,token)
                    })

                    let update=document.createElement("button")
                    update.innerText="EditName"
                    update.style.color="green"
                    update.addEventListener("click",function(){
                        editName(floorNo,token)
                    })

                    let addsft=document.createElement("button")
                    addsft.innerText="AddShift"
                    addsft.style.color="green"
                    addsft.addEventListener("click",function(){
                        openAddShiftModal(floorNo,token);
                    
                    })
                    
                    let showF=document.createElement("button")
                    showF.innerText="ShowShift"
                    showF.style.color="green"
                    showF.addEventListener("click",function(){
                        localStorage.setItem("floorNo",JSON.stringify(floorNo))
                        window.location.href="showShifts.html"
                    
                    })
                    let showStu=document.createElement("button")
                    showStu.innerText="ShowStudent"
                    showStu.style.color="green"
                    showStu.addEventListener("click",function(){
                        localStorage.setItem("floorNo",JSON.stringify(floorNo))
                        window.location.href="showFloorStudent.html"
                    })
            div.append(n,uid,update,remove,addsft,showF,showStu)
            document.querySelector("#list").append(div)
})});}else if(response.status == 401){
    alert("Session expired .")
    window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}

let openAddShiftModal=(floorNo,token)=> {
    document.getElementById('addModal').style.display = "block";
    close("addModal","close");
}

let showFloorStudent=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let floor=JSON.parse(localStorage.getItem("floorNo"))
    let url=`http://localhost:8080/admin/studentfl/${floor}`
    fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
           // console.log(data);
           
           document.querySelector("#list").innerHTML=[]
           document.getElementById("sum").innerText="Total student : "+data.length
           data.forEach(({name,DOB,address,email,mobile,payment,wantedShift,providedShift,userId,photoUrl},i)=> {
              
            let div=document.createElement("div")
            let n=document.createElement("h3")
            n.innerText="Name : "+name
            let id=document.createElement("h4")
            id.innerText="User Id : "+userId
            let img = document.createElement("img");
            img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
            img.alt = "User Photo";
            let e=document.createElement("h4")
            e.innerText="Email : "+email
            let m=document.createElement("h4")
            m.innerText="Mobile : "+mobile
            let D=document.createElement("h4")
            D.innerText="DOB : "+DOB
            let a=document.createElement("h4")
            a.innerText="Address : "+address
            let pay=document.createElement("h4")
            pay.innerText="Payment : "+payment
            let w=document.createElement("h4")
            w.innerText="WantedShift : "+wantedShift
            let ps=document.createElement("h4")
            ps.innerText="ProvidedShift : "+providedShift
            let remove=document.createElement("button")
            remove.innerText="Remove"
            remove.style.color="red"
            remove.addEventListener("click",function(){
                removebtnfunc(userId,token)
            })
            let seat=document.createElement("button")
            seat.innerText="SetSeat"
            seat.style.color="green"
            seat.addEventListener("click",function(){
                setSeat(userId,token)
            })
            let rseat=document.createElement("button")
            rseat.innerText="RemoveSeat"
            rseat.style.color="red"
            rseat.addEventListener("click",function(){
                removeSeat(userId,token)
            })
            let seatM=document.createElement("button")
            seatM.innerText="SetSeatManual"
            seatM.style.color="green"
            seatM.addEventListener("click",function(){
                setSeatManual(userId,token)
            })
          div.append(img,n,id,e,m,D,a,pay,w,ps,remove,seat,rseat,seatM)
          document.querySelector("#list").append(div)
          
  })});
}else if(response.status == 401){
    alert("Session expired .")
    window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.href="showFloor.html"
        }
    })
}

let removeLibrary=(id,token)=>{
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch("http://localhost:8080/admin/delLibrary/"+id, {

    method: "DELETE",
    headers: {
        "Authorization": `Bearer ${token}`
      //  "Content-Type": "application/json",
    }
   
}).then(response => {
    if(response.status == 200){

        alert("Library sucessfully deleted: ");
            location.reload();
            //getAdminById();
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
    }else{
        response.json().then(data => alert(data.message));
    }
})
    }
}
let removeFloor=(id,token)=>{
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch("http://localhost:8080/admin/delfloor/"+id, {

    method: "DELETE",
    headers: {
        "Authorization": `Bearer ${token}`
      //  "Content-Type": "application/json",
    }
   
}).then(response => {
    if(response.status == 200){

        alert("Student sucessfully deleted: ");
       
            location.reload();
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
    }else{
        response.json().then(data => alert(data.message));
        window.location.reload()
    }
})
    }
}
let editName=(fl,token)=>{
    let userInput = prompt("Please enter Change name -:");
    if (userInput != "" && userInput != null) {
        fetch(`http://localhost:8080/admin/upfloor/${fl}?name=${userInput}`, {

        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        }
        
    }).then(response => {
        if(response.status == 200){
           alert("Updated .")
           location.reload()
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
    } else {
        alert("Name is required.");
    }
}
//'''''''''''''''''''''''''''''''''''''''''''''''''''
let addShift=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let fn=JSON.parse(localStorage.getItem("floorNo"))
    let name=document.getElementById("name").value
    let endTime=document.getElementById("endTime").value
    let startTime=document.getElementById("startTime").value
    let seats=document.getElementById("NoOfSeats").value

   console.log(fn)
    fetch(`http://localhost:8080/admin/addshift/${fn}`, {

        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "shiftName": name.toUpperCase(),
            "startTime":startTime,
            "endTime":endTime,
            "noOfSeats":seats
        })
        
    }).then(response => {
        if(response.status == 201){
            response.json().then(data => {
                alert("Sucessfully registered shift with floor Id :-"+fn)
                window.location.reload()
            });
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}
//...................................>>>>>>>>>>>>>>>>>>>
let showShifts=()=>{
    let floorNo=JSON.parse(localStorage.getItem("floorNo"))
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let url=`http://localhost:8080/admin/shifts/${floorNo}`
    fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
                //console.log(data);
                document.querySelector("#list").innerHTML=[]
                document.querySelector("#size").innerText+=data.length
                data.forEach(({shiftName,startTime,endTime,shiftId,seatList},i)=> {
                    let div=document.createElement("div")
                    let n=document.createElement("h3")
                    n.innerText="Name : "+shiftName
                    let uid=document.createElement("h4")
                    uid.innerText="Shift Id : "+shiftId
                    let st=document.createElement("h4")
                    st.innerText="Start : "+startTime
                    let et=document.createElement("h4")
                    et.innerText="Close : "+endTime
                    let remove=document.createElement("button")
                    remove.innerText="Remove"
                    remove.style.color="red"
                    remove.addEventListener("click",function(){
                        removeShift(shiftId,token)
                    })
                    let update=document.createElement("button")
                    update.innerText="Update"
                    update.style.color="green"
                    update.addEventListener("click",function(){
                        openShiftUpdateModal(shiftId,token,shiftName,startTime,endTime);
                    })
                    let addSt=document.createElement("button")
                    addSt.innerText="AddSeat"
                    addSt.style.color="green"
                    addSt.addEventListener("click",function(){
                        addSeat(shiftId,token)
                    
                    })
                    let showSt=document.createElement("button")
                    showSt.innerText="ShowSeat"
                    showSt.style.color="green"
                    showSt.addEventListener("click",function(){
                    localStorage.setItem("ShiftNo",JSON.stringify(shiftId))
                    window.location.href="showSeats.html"
                    })
                    let showStu=document.createElement("button")
                    showStu.innerText="ShowStudent"
                    showStu.style.color="green"
                    showStu.addEventListener("click",function(){
                    localStorage.setItem("ShiftNo",JSON.stringify(shiftId))
                    window.location.href="showStudent.html"
                    })
            div.append(n,uid,st,et,update,remove,addSt,showSt,showStu)
            document.querySelector("#list").append(div)
})});}else if(response.status == 401){
    alert("Session expired .")
    window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}

let openShiftUpdateModal=(shiftId,token,shiftName,startTime,endTime)=> {
    document.getElementById('updateModal').style.display = "block";
    document.getElementById('name').value = shiftName;
    document.getElementById('startTime').value = startTime;
    document.getElementById('endTime').value = endTime;
    currentShiftId=shiftId;
    currentToken=token;
    close("updateModal","close");
}

let showStudent=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let shift=JSON.parse(localStorage.getItem("ShiftNo"))
    let url=`http://localhost:8080/admin/student/shift/${shift}`
    fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
           // console.log(data);
           document.querySelector("#list").innerHTML=[]
           document.getElementById("sum").innerText="Total student : "+data.length
           data.forEach(({name,DOB,address,email,mobile,payment,wantedShift,providedShift,userId},i)=> {
              
            let div=document.createElement("div")
              let n=document.createElement("h3")
              n.innerText="Name : "+name
              let id=document.createElement("h4")
              id.innerText="User Id : "+userId
              let e=document.createElement("h4")
              e.innerText="Email : "+email
              let m=document.createElement("h4")
              m.innerText="Mobile : "+mobile
              let D=document.createElement("h4")
              D.innerText="DOB : "+DOB
              let a=document.createElement("h4")
              a.innerText="Address : "+address
              let pay=document.createElement("h4")
              pay.innerText="Payment : "+payment
              let w=document.createElement("h4")
              w.innerText="WantedShift : "+wantedShift
              let ps=document.createElement("h4")
              ps.innerText="ProvidedShift : "+providedShift
              let remove=document.createElement("button")
                  remove.innerText="Remove"
                  remove.style.color="red"
                  remove.addEventListener("click",function(){
                    localStorage.setItem("UserId",JSON.stringify(userId))
                    window.location.href="userUpdate.html"
              })
              let seat=document.createElement("button")
              seat.innerText="SetSeat"
              seat.style.color="green"
              seat.addEventListener("click",function(){
                  setSeat(userId,token)
              })
              let rseat=document.createElement("button")
              rseat.innerText="RemoveSeat"
              rseat.style.color="red"
              rseat.addEventListener("click",function(){
                  removeSeat(userId,token)
              })
              let seatM=document.createElement("button")
                seatM.innerText="SetSeatManual"
                seatM.style.color="green"
                seatM.addEventListener("click",function(){
                    setSeatManual(userId,token)
                })
          div.append(n,id,e,m,D,a,pay,w,ps,remove,seat,rseat,seatM)
          document.querySelector("#list").append(div)
          
  })});
    }else if(response.status == 401){
        alert("Session expired .")
        window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.href="showShifts.html"
        }
    })
}

let removeShift=(id,token)=>{
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch("http://localhost:8080/admin/delshift/"+id, {

    method: "DELETE",
    headers: {
        "Authorization": `Bearer ${token}`
      //  "Content-Type": "application/json",
    }
   
}).then(response => {
    if(response.status == 200){

        alert("Shift sucessfully deleted: ");
       
            location.reload();
            //getAdminById();
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
    }else{
        response.json().then(data => alert(data.message));
        window.location.reload()
    }
})
    }
}
let addSeat=(shiftId,token)=>{
    let userInput = prompt("Please enter no of seats.");
    if (userInput != "" && userInput != null) {
        fetch(`http://localhost:8080/admin/seats/${shiftId}?noOfSeats=${userInput}`, {

            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify({
            })
            
        }).then(response => {
            if(response.status == 201){
                response.json().then(data => {
                console.log(data);
                    alert("Sucessfully registered seat with shift Id :-"+shiftId)
                });

            }else if(response.status == 401){
                alert("Session expired .")
                window.location.href="adminLogin.html"
            }else{
                response.json().then(data => alert(data.message));
                window.location.reload()
            }
        })
    }
    else {
        alert("Name is required.");
    }
}

let updateShift=()=>{
    let name=document.getElementById('name').value;
    let st=document.getElementById('startTime').value;
    let et=document.getElementById('endTime').value;

    fetch(`http://localhost:8080/admin/upshift`, {

        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${currentToken}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "shiftId":currentShiftId,
            "shiftName":name.toUpperCase(),
            "startTime":st,
            "endTime":et
        })
        
    }).then(response => {
        if(response.status == 200){
           alert("Updated .")
           location.reload()

        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
        }
    })

}

let showSeats=()=>{
    let ShiftNo=JSON.parse(localStorage.getItem("ShiftNo"))
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let url=`http://localhost:8080/admin/seats/${ShiftNo}`
    fetch(url, {
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
            //    console.log(data);
                document.querySelector("#list").innerHTML=[]
                document.querySelector("#size").innerText+=data.length
                data.forEach(({seat,student},i)=> {
                    let sname;
                    if(student==null){
                        sname="Empty seat"
                    }else{
                        sname=student.name
                    }
                    let div=document.createElement("div")
                    let uid=document.createElement("h4")
                    uid.innerText="Floor Id : "+seat.floor
                    let st=document.createElement("h4")
                    st.innerText="Seat No. : "+seat.seatNo
                    let stud=document.createElement("h4")
                    stud.innerText="Student Name : "+sname

                    let remove=document.createElement("button")
                    remove.innerText="Remove"
                    remove.style.color="red"
                    remove.addEventListener("click",function(){
                        deleteSeat(seat.seatNo,token)
                    })

                    let details=document.createElement("button")
                    details.innerText="Studfent Details"
                    details.style.color="green"
                    details.addEventListener("click",function(){
                        if(student!=null){
                         studentDetails(student,token);
                        }else{
                            alert("Seat is empty.")
                        }
                    })
            div.append(uid,st,stud,remove,details)
            document.querySelector("#list").append(div)
})});}else if(response.status == 401){
    alert("Session expired .")
    window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}

let deleteSeat=(seatNo,token)=>{
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch("http://localhost:8080/admin/seats/"+seatNo, {

    method: "DELETE",
    headers: {
        "Authorization": `Bearer ${token}`
      //  "Content-Type": "application/json",
    }
   
}).then(response => {
    if(response.status == 200){

        alert("Seat sucessfully deleted: ");
       
            location.reload();
            //getAdminById();
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
    }else{
        response.json().then(data => alert(data.message));
        window.location.reload()
    }
})
    }
}

let studentDetails=(student,token)=>{
    // console.log(student);
    document.querySelector("#back").href="showSeats.html"
    document.querySelector("#list").innerHTML=[]
    let el=student
    let div=document.createElement("div")
    let n=document.createElement("h3")
    n.innerText="Name : "+el.name
    let id=document.createElement("h4")
    id.innerText="User Id : "+el.userId
    let e=document.createElement("h4")
    e.innerText="Email : "+el.email
    let m=document.createElement("h4")
    let img = document.createElement("img");
    img.src = el.photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
    img.alt = "User Photo";
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
    let seat=document.createElement("button")
        seat.innerText="SetSeat"
        seat.style.color="green"
        seat.addEventListener("click",function(){
        setSeat(el.userId,token)
    })
    let rseat=document.createElement("button")
        rseat.innerText="RemoveSeat"
        rseat.style.color="red"
        rseat.addEventListener("click",function(){
        removeSeat(el.userId,token)
    })
    let seatM=document.createElement("button")
        seatM.innerText="SetSeatManual"
        seatM.style.color="green"
        seatM.addEventListener("click",function(){
        setSeatManual(el.userId,token)
    })
    div.append(img,n,id,e,m,D,a,pay,w,ps,remove,seat,rseat,seatM)
    document.querySelector("#list").append(div)
}
let getAdminProfile=()=>{
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let url = "http://localhost:8080/admin/profile";

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status === 200) {
            response.json().then(el => {

            document.querySelector("#list").innerHTML=[]

            let div=document.createElement("div")
            let n=document.createElement("h3")
            n.innerText="Name : "+el.name
            let id=document.createElement("h4")
            id.innerText="Admin Id : "+el.id
            let e=document.createElement("h4")
            e.innerText="Email : "+el.email
            let img = document.createElement("img");
            img.src = el.photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
            img.alt = "User Photo";
            let m=document.createElement("h4")
            m.innerText="Mobile : "+el.mobile
            let D=document.createElement("h4")
            D.innerText="DOB : "+el.DOB
            let a=document.createElement("h4")
            a.innerText="Address : "+el.address
            let update=document.createElement("button")
                update.innerText="Update"
                update.style.color="green"
                update.addEventListener("click",function(){
                // localStorage.setItem("adminId",JSON.stringify(el.id))
                // window.location.href="updateAdmin.html"
                currentAdminId=el.id;
                openUpdateAdminProfileModal(el.name, el.email,el.mobile,el.Dob,el.address);
                
            })
            div.append(img,id,e,m,D,a,update)
            document.querySelector("#list").append(div)
        });
    } else if (response.status === 500) {
        alert("Session expired.");
        window.location.href = "index.html";
    } else {
        response.json().then(data => alert(data.message));
        window.location.reload();
    }
    })
    .catch(error => {
        alert('An error occurred while fetching the profile.');
    });
}
let openUpdateAdminProfileModal=(name, email, mob,Dob,address)=> {
    document.getElementById('updateModal').style.display = "block";
    document.getElementById('updateName').value = name;
    document.getElementById('updateEmail').value = email;
    document.getElementById('updateDob').value = Dob;
    document.getElementById('updateMob').value = mob;
    document.getElementById('updateAddress').value = address;
    close("updateModal","close");
}
let getStudentProfile=()=>{
    let token = JSON.parse(localStorage.getItem("UserToken"));
    let url = "http://localhost:8080/students/profile";

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status === 200) {
            response.json().then(el => {
            document.querySelector("#list").innerHTML=[]
            let div=document.createElement("div")
            let n=document.createElement("h3")
            n.innerText="Name : "+el.name
            let id=document.createElement("h4")
            id.innerText="User Id : "+el.userId
            let img = document.createElement("img");
            img.src = el.photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
            img.alt = "User Photo";
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
                // localStorage.setItem("adminId",JSON.stringify(el.id))
                // window.location.href="updateAdmin.html"
                currentUserId=el.userId;
                openUpdateUserProfileModal(el.name, el.email,el.mobile,el.Dob,el.address,el.wantedShift);
                
            })
            div.append(img,n,id,e,m,D,a,pay,w,ps,update,remove)
            document.querySelector("#list").append(div)
        });
    } else if (response.status === 500) {
        alert("Session expired.");
        window.location.href = "index.html";
    } else {
        response.json().then(data => alert(data.message));
        window.location.reload();
    }
    })
    .catch(error => {
        alert('An error occurred while fetching the profile.');
    });
}
let openUpdateUserProfileModal=(name, email, mob,Dob,address,shift)=> {
    document.getElementById('updateModal').style.display = "block";
    document.getElementById('updateName').value = name;
    document.getElementById('updateEmail').value = email;
    document.getElementById('updateDob').value = Dob;
    document.getElementById('updateMob').value = mob;
    document.getElementById('updateAddress').value = address;
    document.getElementById('updateShift').value = shift;
    close("updateModal","close");
}
let updateOwnProfile=()=>{
    let token = JSON.parse(localStorage.getItem("UserToken"));
    document.getElementById('updateModal').style.display = "block";
    let name=document.getElementById('updateName').value;
    let email=document.getElementById('updateEmail').value;
    let dob=document.getElementById('updateDob').value;
    let mob=document.getElementById('updateMob').value;
    let address=document.getElementById('updateAddress').value;
    let shift=document.getElementById('updateShift').value;

   // console.log(dob)
    fetch("http://localhost:8080/students/student", {

        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email":email,
            "address": address,
            "mobile": mob,
            "DOB":dob,
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
