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
                    updatebtnfunc(elem,index)
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
let updatebtnfunc=(name,address,marks)=>{
   
    const url = `updateStudent.html?name=${name}&address=${address}&marks=${marks}`;

    location.href= url;

   
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
                    updatebtnfunc(elem,index)
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
                    updatebtnfunc(elem,index)
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
                    updatebtnfunc(elem,index)
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
              removebtnfunc(userId,token)
              })
              let update=document.createElement("button")
                  update.innerText="Update"
                  update.style.color="green"
                  update.addEventListener("click",function(){
                  updatebtnfunc(elem,index)
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
let =()=>{
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
                    updatebtnfunc(elem,index)
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
                    updatebtnfunc(elem,index)
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
                    updatebtnfunc(elem,index)
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
    let name=document.getElementById("name").value
    let lib=document.getElementById("lib").value
    let shift=document.getElementById("shift").value
    let startTime=document.getElementById("startTime").value
    let endTime=document.getElementById("endTime").value

   // console.log(dob)
    fetch(`http://localhost:8080/admin/addfloor/${lib}`, {

        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "shiftList":[{
            "shift":shift,
            "startTime": startTime,
            "endTime": endTime}
        ]
            
        })
        
    }).then(response => {
        if(response.status == 201){
            response.json().then(data => {
              console.log(data);
                alert("Sucessfully registered in library with Id :-"+lib)
            });
        }else{
            response.json().then(data => alert(data.message));
        }
    })

}