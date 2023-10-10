let getAllStudentInSortingOrder=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let f=document.getElementById("fie").value
    let d=document.getElementById("dir").value
   // const studentTableBody = document.getElementById('student-table-body');
    let url=`http://localhost:8080/admin/students/${f}/${d}`
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
            data.forEach(({name,DOB,address,email,mobile,payment,wantedShift,providedShift,userId,seats},i)=> {
                
              //  document.querySelector("#list").innerHTML=[]
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
                let update=document.createElement("button")
                    update.innerText="Update"
                    update.style.color="green"
                    update.addEventListener("click",function(){
                    localStorage.setItem("UserId",JSON.stringify(userId))
                    window.location.href="userUpdate.html"
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
            div.append(n,id,e,m,D,a,p,w,ps,update,remove,Setseat,rseat)
            document.querySelector("#list").append(div)
            
    })});
        }else{
            response.json().then(data => alert(data.message));
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

        alert("Student sucessfully deleted: ");
       
            //location.reload();
            getAllStudentInSortingOrder();

    }else{
        response.json().then(data => alert(data.message));
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
        console.log(response.json().data);
        alert("Student sucessfully removed: ");
       
            //location.reload();
            getAllStudentInSortingOrder();

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
       // console.log(response.json().data);
        alert("Student sucessfully removed: ");
        getAllStudentInSortingOrder();

    }else{
        response.json().then(data => alert(data.message));
    }
})
    }

}
let updateUser=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let id=JSON.parse(localStorage.getItem("UserId"))
    let name=document.getElementById("name").value
    let address=document.getElementById("address").value
    let email=document.getElementById("email").value
    let dob=document.getElementById("dob").value
    let pass=document.getElementById("password").value
    let mobile=document.getElementById("mobile").value
    let pay=document.getElementById("payment").value
    let shift=document.getElementById("shift").value

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
            "payment":pay,
            "wantedShift":shift
        })
        
    }).then(response => {
        if(response.status == 200){
            response.json().then(data => {
              //  console.log(data);
                alert("Admin sucessfully updated with id: "+data.userId)
                window.location.href="AdminMethod.html"
            });
        }else{
            response.json().then(data => alert(data.message));
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
    let url=`http://localhost:8080/admin/stu/${p}/${s}?field=${f}&dirn=${d}`
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
            data.forEach(({name,DOB,address,email,mobile,payment,wantedShift,providedShift,userId},i)=> {
                
              //  document.querySelector("#list").innerHTML=[]
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
            div.append(n,id,e,m,D,a,pay,w,ps,update,remove,seat,rseat)
            document.querySelector("#list").append(div)
            
    })});
        }else{
            response.json().then(data => alert(data.message));
        }
    })

}
//================================================================
let getStudentById=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let user=document.getElementById("id").value
   // const studentTableBody = document.getElementById('student-table-body');
    let url=`http://localhost:8080/admin/students/${user}`
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
       //     console.log(data);
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
                    localStorage.setItem("UserId",JSON.stringify(userId))
                    window.location.href="userUpdate.html"
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
            div.append(n,id,e,m,D,a,pay,w,ps,update,remove,seat,rseat)
            document.querySelector("#list").append(div)
});
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let getStudentBySeat=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let user=document.getElementById("id").value
   // const studentTableBody = document.getElementById('student-table-body');
    let url=`http://localhost:8080/admin/getstudent/${user}`
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
                    localStorage.setItem("UserId",JSON.stringify(userId))
                    window.location.href="userUpdate.html"
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
            div.append(n,id,e,m,D,a,pay,w,ps,update,remove,seat,rseat)
            document.querySelector("#list").append(div)
});
        }else{
            response.json().then(data => alert(data.message));
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
           data.forEach(({name,DOB,address,email,mobile,payment,wantedShift,providedShift,userId},i)=> {
                
            //  document.querySelector("#list").innerHTML=[]
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
          div.append(n,id,e,m,D,a,pay,w,ps,update,remove,seat,rseat)
          document.querySelector("#list").append(div)
          
  })});
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}
//////////////////////////////////////////////////////////////////////////
let allAvalibleSeats=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let url=`http://localhost:8080/admin/seats`
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
         document.getElementById("sum").innerText+=data.length 
           data.forEach(({floor,seatNo},i)=> {
            
            //  document.querySelector("#list").innerHTML=[]
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
                // let update=document.createElement("button")
                //     update.innerText="Update"
                //     update.style.color="green"
                //     update.addEventListener("click",function(){
                //     updatebtnfunc(elem,index)
                // })
                // let seat=document.createElement("button")
                // seat.innerText="SetSeat"
                // seat.style.color="green"
                // seat.addEventListener("click",function(){
                //     setSeat(userId,token)
                // })
                // let rseat=document.createElement("button")
                // rseat.innerText="RemoveSeat"
                // rseat.style.color="red"
                // rseat.addEventListener("click",function(){
                //     removeSeat(userId,token)
                // })
            div.append(st,uid,remove)
            document.querySelector("#list").append(div)
            
    })});
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}
//====================================================================

let getStudentAreaWise=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let user=document.getElementById("id").value
   // const studentTableBody = document.getElementById('student-table-body');
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
            data.forEach(({name,DOB,address,email,mobile,payment,wantedShift,providedShift,userId},i)=> {
                
              //  document.querySelector("#list").innerHTML=[]
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
            div.append(n,id,e,m,D,a,pay,w,ps,update,remove,seat,rseat)
            document.querySelector("#list").append(div)
            
    })});
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}
//---------------------------------------------------------------------
let getAllStudentWithNoSeatNo=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let url=`http://localhost:8080/admin/studentno`
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
            data.forEach(({name,payment,wantedShift,providedShift,userId},i)=> {
                
              //  document.querySelector("#list").innerHTML=[]
                let div=document.createElement("div")
                let n=document.createElement("h3")
                n.innerText="Name : "+name
                let id=document.createElement("h4")
                id.innerText="User Id : "+userId
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
            div.append(n,id,pay,w,ps,update,remove,seat,rseat)
            document.querySelector("#list").append(div)
            
    })});
        }else{
            response.json().then(data => alert(data.message));
        }
    })
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
            let el=data
                let div=document.createElement("div")
                let n=document.createElement("h3")
                n.innerText="Name : "+el.name
                let id=document.createElement("h4")
                id.innerText="User Id : "+el.id
                let e=document.createElement("h4")
                e.innerText="Email : "+el.email
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
                let update=document.createElement("button")
                    update.innerText="Update"
                    update.style.color="green"
                    update.addEventListener("click",function(){
                    updateAdminFun(el.id)
                })
            div.append(n,id,e,m,D,a,update,remove)
            document.querySelector("#list").append(div)
});
        }else{
            response.json().then(data => alert(data.message));
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

    }else{
        response.json().then(data => alert(data.message));
    }
})
    }

}


let updateAdmin=()=>{
    let userId=JSON.parse(localStorage.getItem("adminId"))
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let name=document.getElementById("name").value
    let address=document.getElementById("address").value
    let email=document.getElementById("email").value
    let dob=document.getElementById("dob").value
    let pass=document.getElementById("password").value
    let mobile=document.getElementById("mobile").value

   // console.log(dob)
    fetch("http://localhost:8080/admin/upadmin", {

        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "id":userId,
            "name": name,
            "email":email,
            "password":pass,
            "address": address,
            "mobile": mobile,
            "DOB":dob
            
        })
        
    }).then(response => {
        if(response.status == 200){
            response.json().then(data => {
              //  console.log(data);
                alert("Admin sucessfully updated with id: "+data.id)
                window.location.href="AdminMethod.html"
            });
        }else{
            response.json().then(data => alert(data.message));
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
        method: "GET", // Change the HTTP method as needed
        headers: {
            "Authorization": `Bearer ${token}`
          //  "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
                data.forEach(({name,DOB,address,email,mobile,id},i)=> {
                
                    //  document.querySelector("#list").innerHTML=[]
                      let div=document.createElement("div")
                      let n=document.createElement("h3")
                      n.innerText="Name : "+name
                      let uid=document.createElement("h4")
                      uid.innerText="User Id : "+id
                      let e=document.createElement("h4")
                      e.innerText="Email : "+email
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
                let update=document.createElement("button")
                    update.innerText="Update"
                    update.style.color="green"
                    update.addEventListener("click",function(){
                    updateAdminFun(id)
                })
            div.append(n,uid,e,m,D,a,update,remove)
            document.querySelector("#list").append(div)
})});
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}

/////////////////////////???????????????????????????????????????????????????????????
let addFloor=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let lid=JSON.parse(localStorage.getItem("labId"))
    let name=document.getElementById("name").value
   // console.log(s);
   // console.log(dob)
    fetch(`http://localhost:8080/admin/addfloor/${lid}`, {

        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name
        })
        
    }).then(response => {
        if(response.status == 201){
            response.json().then(data => {
              console.log(data);
                alert("Sucessfully registered in library with Id :-"+lid)
            });
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
              console.log(data);
                alert("Sucessfully registered library with Id :-"+labId)
            });
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}
let AllLibrary=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let url=`http://localhost:8080/admin/librarys`
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
                data.forEach(({name,address,labId,floorList},i)=> {
                
                    //  document.querySelector("#list").innerHTML=[]
                    let div=document.createElement("div")
                    let n=document.createElement("h3")
                    n.innerText="Name : "+name
                    let uid=document.createElement("h4")
                    uid.innerText="Lab Id : "+labId
                    let a=document.createElement("h4")
                    a.innerText="Address : "+address
                    let remove=document.createElement("button")
                    remove.innerText="Remove"
                    remove.style.color="red"
                    remove.addEventListener("click",function(){
                    removeLibrary(labId,token)
                    })
                    let update=document.createElement("button")
                    update.innerText="Update"
                    update.style.color="green"
                    update.addEventListener("click",function(){
                    localStorage.setItem("labId",JSON.stringify(labId))
                    window.location.href="updateLibrary.html"
                    })
                    let addFl=document.createElement("button")
                    addFl.innerText="AddFloor"
                    addFl.style.color="green"
                    addFl.addEventListener("click",function(){
                    localStorage.setItem("labId",JSON.stringify(labId))
                    window.location.href="addFloor.html"
                    
                    })
                    let showFl=document.createElement("button")
                    showFl.innerText="ShowFloor"
                    showFl.style.color="green"
                    showFl.addEventListener("click",function(){
                    localStorage.setItem("labId",JSON.stringify(labId))
                    window.location.href="showFloor.html"
                    
                    })
            div.append(n,uid,a,update,remove,addFl,showFl)
            document.querySelector("#list").append(div)
})});
        }else{
            response.json().then(data => alert(data.message));
        }
    })
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
                console.log(data);
                data.forEach(({name,floorNo,shiftList},i)=> {
                
                    //  document.querySelector("#list").innerHTML=[]
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
                    localStorage.setItem("floorNo",JSON.stringify(floorNo))
                    window.location.href="addShift.html"
                    
                    })
                    let showF=document.createElement("button")
                    showF.innerText="ShowShift"
                    showF.style.color="green"
                    showF.addEventListener("click",function(){
                    localStorage.setItem("floorNo",JSON.stringify(floorNo))
                    window.location.href="showShifts.html"
                    
                    })
            div.append(n,uid,update,remove,addsft,showF)
            document.querySelector("#list").append(div)
})});
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}
let updateLibrary=()=>{
    let lid=JSON.parse(localStorage.getItem("labId"))
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let name=document.getElementById("name").value
    let ad=document.getElementById("address").value
 

   // console.log(dob)
    fetch("http://localhost:8080/admin/library/"+lid, {

        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "address": ad
            
        })
        
    }).then(response => {
        if(response.status == 200){
           alert("Updated .")
        }else{
            response.json().then(data => alert(data.message));
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

        alert("Student sucessfully deleted: ");
       
            location.reload();
            //getAdminById();

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
            //getAdminById();

    }else{
        response.json().then(data => alert(data.message));
    }
})
    }
}
let editName=(fl,token)=>{
    let userInput = prompt("Please enter Change name -:");
    if (userInput !== "") {
        fetch(`http://localhost:8080/admin/upfloor/${fl}/${userInput}`, {

        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        }
        
    }).then(response => {
        if(response.status == 200){
           alert("Updated .")
           location.reload()
        }else{
            response.json().then(data => alert(data.message));
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
   console.log(fn)
    fetch(`http://localhost:8080/admin/addshift/${fn}`, {

        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "shiftName": name,
            "startTime":startTime,
            "endTime":endTime,
            "seatList":[
                {},{},
                {},{},
                {},{},
                {},{},
                {},{}
            ]
        })
        
    }).then(response => {
        if(response.status == 201){
            response.json().then(data => {
              console.log(data);
                alert("Sucessfully registered shift with floor Id :-"+fn)
            });
        }else{
            response.json().then(data => alert(data.message));
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
                console.log(data);
                data.forEach(({shiftName,startTime,endTime,shiftId,seatList},i)=> {
                
                    //  document.querySelector("#list").innerHTML=[]
                    let div=document.createElement("div")
                    let n=document.createElement("h3")
                    n.innerText="Name : "+shiftName
                    let uid=document.createElement("h4")
                    uid.innerText="Floor Id : "+shiftId
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
                        updateSeat(shiftId,token)
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
            div.append(n,uid,st,et,update,remove,addSt,showSt)
            document.querySelector("#list").append(div)
})});
        }else{
            response.json().then(data => alert(data.message));
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

    }else{
        response.json().then(data => alert(data.message));
    }
})
    }
}
let addSeat=(shiftId,token)=>{
    fetch(`http://localhost:8080/admin/seats/${shiftId}`, {

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
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}

let updateSeat=(shiftId,token)=>{
    let name = prompt("Please enter Change name -:");
    let st = prompt("Please enter Updated start time -:");
    let et = prompt("Please enter Updated close time name -:");

    if (name !== ""||st !== ""||et !== "") {
        fetch(`http://localhost:8080/admin/upshift`, {

        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "shiftId":shiftId,
            "shiftName":name,
            "startTime":st,
            "endTime":et
        })
        
    }).then(response => {
        if(response.status == 200){
           alert("Updated .")
           location.reload()
        }else{
            response.json().then(data => alert(data.message));
        }
    })
    } else {
        alert("All fields are required.");
    }
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
                console.log(data);
                data.forEach(({floor,seatNo},i)=> {
                
                    //  document.querySelector("#list").innerHTML=[]
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
            div.append(uid,st,remove)
            document.querySelector("#list").append(div)
})});
        }else{
            response.json().then(data => alert(data.message));
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

        alert("Shift sucessfully deleted: ");
       
            location.reload();
            //getAdminById();

    }else{
        response.json().then(data => alert(data.message));
    }
})
    }
}