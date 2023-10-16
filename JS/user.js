let allDetails=()=>{
    let token=JSON.parse(localStorage.getItem("UserToken"))
    let url=`http://localhost:8080/students/allDetails`
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
             //   console.log(data);
                let table=document.createElement("table")
                table.border="1"
                table.style.textAlign="center"
                let tr=document.createElement("tr")
                let th1=document.createElement("th")
                th1.innerText="Library Id"
                let th2=document.createElement("th")
                th2.innerText="Name"
                let th3=document.createElement("th")
                th3.innerText="Address"
                let th4=document.createElement("th")
                th4.innerText="GetAllFloor"
                tr.append(th1,th2,th3,th4)
                table.append(tr)
                document.querySelector("#lists").innerHTML=[]
                document.querySelector("#size").innerText="Total : "+data.length
                data.forEach(({name,address,labId,floorList},i)=> {
                    let tr1=document.createElement("tr")
                    let td1=document.createElement("td")
                    td1.innerText=labId
                    let td2=document.createElement("td")
                    td2.innerText=name
                    let td3=document.createElement("td")
                    td3.innerText=address
                    let showFl=document.createElement("button")
                    showFl.innerText="ShowFloor"
                    showFl.style.color="green"
                    let div=document.createElement("div")
                    div.id="list"
                    let div3=document.createElement("div")
                    showFl.addEventListener("click",function(){
                    div.innerHTML=[]
                    floorList.forEach(({name,floorNo,shiftList})=>{ 
                        let div2=document.createElement("div")
                        let fn=document.createElement("h3")
                        fn.innerText="Name : "+name
                        let fid=document.createElement("h4")
                        fid.innerText="Floor Id : "+floorNo
                        let showF=document.createElement("button")
                        showF.innerText="ShowShift"
                        showF.style.color="green"
                        showF.addEventListener("click",function(){
                        localStorage.setItem("shiftList",JSON.stringify(shiftList))
                        window.location.href="showShiftList.html"
                        })
                        div2.append(fn,fid,showF)
                        div.append(div2)
                    })
                    
                    })
            tr1.append(td1,td2,td3,showFl,div)
            table.append(tr1)
            document.querySelector("#lists").append(table)
})});   }else if(response.status == 401){
    alert("Session expired .")
    window.location.href="studentLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            window.location.reload()
        }
    })
}
let showShiftList=()=>{
    let data=JSON.parse(localStorage.getItem("shiftList"))
    console.log(data);
    let table=document.createElement("table")
    table.border="1"
    table.style.textAlign="center"
    let tr=document.createElement("tr")
    let th1=document.createElement("th")
    th1.innerText="shift Id"
    let th2=document.createElement("th")
    th2.innerText="shiftName"
    let th3=document.createElement("th")
    th3.innerText="startTime"
    let th4=document.createElement("th")
    th4.innerText="endTime"
    let th5=document.createElement("th")
    th5.innerText="GetAllFloor"
    tr.append(th1,th2,th3,th4,th5)
    table.append(tr)
    document.querySelector("#lists").innerHTML=[]
    document.querySelector("#size").innerText="Total : "+data.length
    data.forEach(({shiftName,shiftId,startTime,endTime,seatList},i)=> {
        let tr1=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=shiftId
        let td2=document.createElement("td")
        td2.innerText=shiftName
        let td3=document.createElement("td")
        td3.innerText=startTime
        let td4=document.createElement("td")
        td4.innerText=endTime
        let showFl=document.createElement("button")
        showFl.innerText="ShowSeats"
        showFl.style.color="green"
        let div=document.createElement("div")
        div.id="list"
        showFl.addEventListener("click",function(){
        div.innerHTML=[]
        seatList.forEach(({floor,seatNo})=>{ 
            let div2=document.createElement("div")
            let fn=document.createElement("h3")
            fn.innerText="Floor No : "+floor
            let sn=document.createElement("h4")
            sn.innerText="Seat No : "+seatNo
            div2.append(sn,fn)
            div.append(div2)
        })
        
        })
tr1.append(td1,td2,td3,td4,showFl,div)
table.append(tr1)
document.querySelector("#lists").append(table)
})
}