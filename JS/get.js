let currentLabId;
let currentShiftId;
let currentToken;
let currentAdminId;
let currentUserId;
const defaultUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAZlBMVEX///9mZmZgYGDl5eVTU1OsrKxcXFxkZGSxsbFXV1dhYWHe3t5aWlpWVlbq6upzc3OTk5OJiYn4+PjNzc3CwsJubm59fX27u7uWlpaFhYXR0dH09PSmpqbKysrh4eGUlJRKSkqfn5/yIy7PAAAIRklEQVR4nO2ca3ejIBCGBQ1eI8Z4STVm6///kyso4gVMPM1uQjrPh/acaHsyr8PMMCCWBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBx2Zesv3krvHmX4/77rP6L1id9qrp1pRPA9CKHn//qNn07mI4Sii/LahV17ANdX/70pJAGzgqiMuEaPScD+/vrfv/gTueDeiGR1JXzQCzhHk4NC5QxPcuUJp2CHBsHpFV/+WZRHpPSE+LhDgs4RNpLL+1MOw34RGC973KBzBLPDYqkaDjXeJUH31/XLDHgGoydMhoO3VwN8eJ0Bz2DtCWm+UwKE8vSVJvyccsiDY2C0H68NBFH2UhN+DhfBnXhCSPY7wksteAJjivwzfBDu9gS/eqkFT0AERukJe6Mioi814BmsAmPoLI0Mgm6W2E0VXbUGylmHWawC48wTcBTQ5FpmTVZekyIgKi8hJ7OLhI4MLz1BTJtcJ79WU/vq6po7a3cI0ME2MkWGSY47L8fyyUpPIMzOgCSqaWGY4LUzBH4k2yv5HzPCZFz465nBLEX6l1j3t62vCQ2jIl8GjI4YKedGMkU6dGtGaNM7dUSAdAK+D1QX48VwuGdCeafV4r59xsy0ldDDiS7UpcqBqPynFvycjamRor1m1bewCu3FEK/pdqvhzWvoelUG6T0hbf7kOPL9Y4TzJJvqkG6L4Lx3WLS3NJh5gn2JiLQ0wH5ykxfrlTu5E1Wc926zbWsgs4N1OS4fdXBMZLiM59mBoNMpGD8yW4NJsaQoBAIiOwbVNLaSa1crpq34yHANNHMHwVEu0l3lddFeFV1ZczUYDJDFkqoOIHJZQX6IB5ttYrgGpHNld2am0hOkCJXUSMyakNkauIWVLRdflO01udJYiIjhDhqk2GwNyLmrIUVTZVMER0wNK3GVNP0HjeFjgdd22bqpoiqLhevLqQdPmvaokpkaYI9fXg8HRWAk3nCxFAHDdUvb9gIhiaEaiPI2G9x5MzDiwREmhTd2HHmjoRqIaU42jvHRE9YTzXFiSDWCGqkBFsFeWiU9gaxigugQHNTdeDM18IdNVvVk+G9UjP4wcTirmxFmakAGo5ppMpwMh4UniHlDrO6rmamBSHftbLKoDYzBMG1I1f/MTA1ESDzNH7guMI6bkdRB0UgNukK5Z9lwnXiCq7q/UHYWjdQg+BouzzVwtWWz8Juvz9HAFRrkK5tGT7hNU+QnaqAbC0idIsclhA8aC2PRo3quowi3MTCOfvNBMVGTG4UIqxT5kbkRDzVSqSx+V4ERDxOG+KNq5aEvotmvKwNjnyJFrVyplx7N1GBsCSivrjxBpAXNvk4zNRgTw0Gzso7HwEgmiqnTgqEaIEe0RXTL0tITgnGncqr7Z2ZqMK4gtboNelIERyy0ZBqnMVQDJAZDrV1RlilSLCsXmjtN1SASm7Ay7asceLE/Qbux1VQN5Ls5iXa7Kpm/v3PSbUcxVQPkC0fY2GAx26kSah3GWA3kVqo0f0gETVPZZA1k1rfqQrv/Tg4HT79Hz1wNEJGbbdqjbqxvr0UarwFy5V6qsNDtQpzMHT5Rg7GlxmioMwkLbuBQscF7c6eK6RogPEt+t5aSAUyvN+ssFmTFXfaH1YnCvPlG/DpsyrJshsqw8RdSaTzBbA0QplvblRUiqGKn4RogF2+9gdAclyIEChFM1wC50WXjxZQzXoqgiAnGa9DZR0qdCmk53rRor32YBi4iuafadl17SD71jcD4ARpwC/1TM5ehzr78mbVYuQL1QRp0+IRevKYKb2GVeRcaLTch6D3hzTWIH9eAWYlFjaScSepSpPPmbzTtf719SyN1YIxeauF9dh388rgI0xT59sfF3Pad/HJXBDHNsmVg9G+b3+AN2HEQ1EMirAJjZMDxUfr+yG5cNIsJ/DPtWWxvRUOd+wfDPcLKEzA50ualtj3OLTs8ATGqpAjXDzhWcCeVmEV+3b/3Y1lNpX8jZx88QXaWfrMI52Vg/I2M3ebf7AmrRutvxPQUmbb9VsNwo8hv7xU+jWO0J6Qo4i2zZuPsimDdbT/Nj8wzO0WmLuVL7ueNg1zQWoOvxZEnZ80ZrUaQRpXPfjcbGrgKDZZHJ4rA+P3ex4AoSY9xwezhGtRXSscHXB/SBJ1YdxRVZZFzb4lbyu8u6clLu18FbYXNgyd8v3c7VUmnQYWsfiykNAmrXEz/Yz8v4wN7/zWniV0dO3HSoL1V7BjVhrZZal1RFSbjy8/93MF5kR0/odOAxzzmB5nbfVB/D03h2GEuUXT5ImeDPOtu8NgmRvu7s5p5Q38nHUdFFRHim3i8KNOgLHoNEu7vwqiYm1jSISZWXeIo+EBhkjEN+hDiyXxol56BI6HXIHVsblDOY18yVAox38IckkGDc6dBv4+T5QSmwZWPmq2kaghMA+uacA0wN/EyBIT4yH7anRKjBv36UXLoNbhwsSr8ku/9TLgG3SNnMZHMNeArJTMN+qDPHIVpkHyUBt2jrZgfLMYC+xn6Uw34wsGXN/hBPxbQK772U+k1uBEeD3hLuBi2asYs/vPhPmpAuEjsNqbBgdeE5dufFHiXXgOrKLrc0DKjUmdYJYq/mcXss1GDE3MRnhKZBhVht50MP3XdYiZzDc5Op0HIfN0TcT6OaNoVA9VEg4oFxZYVCczylL3dFn6/+RrzA6TDW33MD6zMoSgQNsXHklCHPXmeM1nAsLzuhpxVx5WDa+uGXHo0ZUnlYVJbFjnxt5XeljOg8YaUX4nNPFf4YfqY+LsBDdhZJ6ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8JH8BVNXbnf1x5bcAAAAAElFTkSuQmCC"
const baseUrlPath="http://localhost:8080";

let aLogin=()=>{
    let url = `${baseUrlPath}/logIn`;
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
    let url=`${baseUrlPath}/admin/students?field=${f}&direction=${d} `
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
                seatM.innerText = "Set Full Seat";
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

let removebtnfunc=(userId,token)=>{
    
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch(`${baseUrlPath}/admin/studentdel/${userId}`, {

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
    }
})
    }

}

let removeSeat=(userId,token)=>{
    
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch(`${baseUrlPath}/admin/upseat/${userId}`, {

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
    fetch(`${baseUrlPath}/admin/studentseat/${userId}`, {

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
    fetch(`${baseUrlPath}/students/student`, {

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
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let p = document.getElementById("page").value;
    let s = document.getElementById("size").value;
    let f = document.getElementById("field").value;
    let d = document.getElementById("dirn").value;

    let url = `${baseUrlPath}/admin/stu/${p}/${s}?field=${f}&direction=${d}`;

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                document.querySelector("#list").innerHTML = "";

                let table = document.createElement("table");
                table.className = "student-table";

                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");

                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thName = document.createElement("th");
                thName.innerText = "Name";
                let thId = document.createElement("th");
                thId.innerText = "User ID";
                let thPhoto = document.createElement("th");
                thPhoto.innerText = "Photo";
                let thEmail = document.createElement("th");
                thEmail.innerText = "Email";
                let thMobile = document.createElement("th");
                thMobile.innerText = "Mobile";
                let thDOB = document.createElement("th");
                thDOB.innerText = "DOB";
                let thAddress = document.createElement("th");
                thAddress.innerText = "Address";
                let thPayment = document.createElement("th");
                thPayment.innerText = "Payment";
                let thWantedShift = document.createElement("th");
                thWantedShift.innerText = "Wanted Shift";
                let thProvidedShift = document.createElement("th");
                thProvidedShift.innerText = "Provided Shift";
                let thActions = document.createElement("th");
                thActions.innerText = "Actions";

                trHead.append(thIndex, thName, thId, thPhoto, thEmail, thMobile, thDOB, thAddress, thPayment, thWantedShift, thProvidedShift, thActions);
                thead.append(trHead);
                table.append(thead);

                let tbody = document.createElement("tbody");

                data.forEach(({ name, DOB, address, email, mobile, payment, wantedShift, providedShift, userId, photoUrl }, i) => {
                    let tr = document.createElement("tr");

                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdName = document.createElement("td");
                    tdName.innerText = name;
                    let tdId = document.createElement("td");
                    tdId.innerText = userId;
                    let tdPhoto = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = photoUrl || defaultUrl;
                    img.alt = "User Photo";
                    img.className = "student-photo";
                    tdPhoto.appendChild(img);
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = email;
                    let tdMobile = document.createElement("td");
                    tdMobile.innerText = mobile;
                    let tdDOB = document.createElement("td");
                    tdDOB.innerText = DOB;
                    let tdAddress = document.createElement("td");
                    tdAddress.innerText = address;
                    let tdPayment = document.createElement("td");
                    tdPayment.innerText = payment;
                    let tdWantedShift = document.createElement("td");
                    tdWantedShift.innerText = wantedShift;
                    let tdProvidedShift = document.createElement("td");
                    tdProvidedShift.innerText = providedShift;

                    let tdActions = document.createElement("td");
                    let removeBtn = document.createElement("button");
                    removeBtn.innerText = "Remove";
                    removeBtn.className = "action-btn remove-btn";
                    removeBtn.addEventListener("click", function () {
                        removebtnfunc(userId, token);
                    });

                    let seatBtn = document.createElement("button");
                    seatBtn.innerText = "Set Seat";
                    seatBtn.className = "action-btn set-seat-btn";
                    seatBtn.addEventListener("click", function () {
                        setSeat(userId, token);
                    });

                    let removeSeatBtn = document.createElement("button");
                    removeSeatBtn.innerText = "Remove Seat";
                    removeSeatBtn.className = "action-btn remove-seat-btn";
                    removeSeatBtn.addEventListener("click", function () {
                        removeSeat(userId, token);
                    });

                    let seatMBtn = document.createElement("button");
                    seatMBtn.innerText = "Set Full Seat";
                    seatMBtn.className = "action-btn set-seat-manual-btn";
                    seatMBtn.addEventListener("click", function () {
                        setSeatManual(userId, token);
                    });

                    tdActions.append(removeBtn, seatBtn, removeSeatBtn, seatMBtn);
                    tr.append(tdIndex, tdName, tdId, tdPhoto, tdEmail, tdMobile, tdDOB, tdAddress, tdPayment, tdWantedShift, tdProvidedShift, tdActions);
                    tbody.append(tr);
                });

                table.append(tbody);
                document.querySelector("#list").append(table);
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
//================================================================
let getStudentById=()=>{
    let token = JSON.parse(localStorage.getItem("jwtToken"));
let user = document.getElementById("id").value;
let url = `${baseUrlPath}/admin/students/${user}`;

fetch(url, {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`
    }
})
.then(response => {
    if(response.status == 200){
        response.json().then(data => {
            document.querySelector("#list").innerHTML = "";
            
            let table = document.createElement("table");
            table.className = "student-table";
            
            let thead = document.createElement("thead");
            let trHead = document.createElement("tr");
            
            let thIndex = document.createElement("th");
            thIndex.innerText = "S.No";
            let thName = document.createElement("th");
            thName.innerText = "Name";
            let thId = document.createElement("th");
            thId.innerText = "User ID";
            let thPhoto = document.createElement("th");
            thPhoto.innerText = "Photo";
            let thEmail = document.createElement("th");
            thEmail.innerText = "Email";
            let thMobile = document.createElement("th");
            thMobile.innerText = "Mobile";
            let thDOB = document.createElement("th");
            thDOB.innerText = "DOB";
            let thAddress = document.createElement("th");
            thAddress.innerText = "Address";
            let thPayment = document.createElement("th");
            thPayment.innerText = "Payment";
            let thWantedShift = document.createElement("th");
            thWantedShift.innerText = "Wanted Shift";
            let thProvidedShift = document.createElement("th");
            thProvidedShift.innerText = "Provided Shift";
            let thActions = document.createElement("th");
            thActions.innerText = "Actions";
            
            trHead.append(thIndex, thName, thId, thPhoto, thEmail, thMobile, thDOB, thAddress, thPayment, thWantedShift, thProvidedShift, thActions);
            thead.append(trHead);
            table.append(thead);
            
            let tbody = document.createElement("tbody");
            
            [data].forEach(({ name, DOB, address, email, mobile, payment, wantedShift, providedShift, userId, photoUrl }, i) => {
                let tr = document.createElement("tr");
                
                let tdIndex = document.createElement("td");
                tdIndex.innerText = i + 1;
                let tdName = document.createElement("td");
                tdName.innerText = name;
                let tdId = document.createElement("td");
                tdId.innerText = userId;
                let tdPhoto = document.createElement("td");
                let img = document.createElement("img");
                img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                img.alt = "User Photo";
                img.className = "student-photo";
                tdPhoto.appendChild(img);
                let tdEmail = document.createElement("td");
                tdEmail.innerText = email;
                let tdMobile = document.createElement("td");
                tdMobile.innerText = mobile;
                let tdDOB = document.createElement("td");
                tdDOB.innerText = DOB;
                let tdAddress = document.createElement("td");
                tdAddress.innerText = address;
                let tdPayment = document.createElement("td");
                tdPayment.innerText = payment;
                let tdWantedShift = document.createElement("td");
                tdWantedShift.innerText = wantedShift;
                let tdProvidedShift = document.createElement("td");
                tdProvidedShift.innerText = providedShift;
                
                let tdActions = document.createElement("td");
                let removeBtn = document.createElement("button");
                removeBtn.innerText = "Remove";
                removeBtn.className = "remove-btn";
                removeBtn.addEventListener("click", function(){
                    removebtnfunc(userId, token);
                });

                let setSeatBtn = document.createElement("button");
                setSeatBtn.innerText = "Set Seat";
                setSeatBtn.className = "set-seat-btn";
                setSeatBtn.addEventListener("click", function(){
                    setSeat(userId, token);
                });

                let removeSeatBtn = document.createElement("button");
                removeSeatBtn.innerText = "Remove Seat";
                removeSeatBtn.className = "remove-seat-btn";
                removeSeatBtn.addEventListener("click", function(){
                    removeSeat(userId, token);
                });

                let setSeatManualBtn = document.createElement("button");
                setSeatManualBtn.innerText = "Set Full Seat";
                setSeatManualBtn.className = "set-seat-manual-btn";
                setSeatManualBtn.addEventListener("click", function(){
                    setSeatManual(userId, token);
                });

                tdActions.append(removeBtn, setSeatBtn, removeSeatBtn, setSeatManualBtn);
                tr.append(tdIndex, tdName, tdId, tdPhoto, tdEmail, tdMobile, tdDOB, tdAddress, tdPayment, tdWantedShift, tdProvidedShift, tdActions);
                tbody.append(tr);
            });
            
            table.append(tbody);
            document.querySelector("#list").append(table);
        });
    } else if(response.status == 401){
        alert("Session expired.");
        window.location.href = "adminLogin.html";
    } else {
        response.json().then(data => alert(data.message));
        // window.location.reload();
    }
});

}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let getStudentBySeat=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let user=document.getElementById("id").value
    let url=`${baseUrlPath}/admin/getstudent/${user}`
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
           document.querySelector("#list").innerHTML = "";
            
           let table = document.createElement("table");
           table.className = "student-table";
           
           let thead = document.createElement("thead");
           let trHead = document.createElement("tr");
           
           let thIndex = document.createElement("th");
           thIndex.innerText = "S.No";
           let thName = document.createElement("th");
           thName.innerText = "Name";
           let thId = document.createElement("th");
           thId.innerText = "User ID";
           let thPhoto = document.createElement("th");
           thPhoto.innerText = "Photo";
           let thEmail = document.createElement("th");
           thEmail.innerText = "Email";
           let thMobile = document.createElement("th");
           thMobile.innerText = "Mobile";
           let thDOB = document.createElement("th");
           thDOB.innerText = "DOB";
           let thAddress = document.createElement("th");
           thAddress.innerText = "Address";
           let thPayment = document.createElement("th");
           thPayment.innerText = "Payment";
           let thWantedShift = document.createElement("th");
           thWantedShift.innerText = "Wanted Shift";
           let thProvidedShift = document.createElement("th");
           thProvidedShift.innerText = "Provided Shift";
           let thActions = document.createElement("th");
           thActions.innerText = "Actions";
           
           trHead.append(thIndex, thName, thId, thPhoto, thEmail, thMobile, thDOB, thAddress, thPayment, thWantedShift, thProvidedShift, thActions);
           thead.append(trHead);
           table.append(thead);
           
           let tbody = document.createElement("tbody");
           
           [data].forEach(({ name, DOB, address, email, mobile, payment, wantedShift, providedShift, userId, photoUrl }, i) => {
               let tr = document.createElement("tr");
               
               let tdIndex = document.createElement("td");
               tdIndex.innerText = i + 1;
               let tdName = document.createElement("td");
               tdName.innerText = name;
               let tdId = document.createElement("td");
               tdId.innerText = userId;
               let tdPhoto = document.createElement("td");
               let img = document.createElement("img");
               img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
               img.alt = "User Photo";
               img.className = "student-photo";
               tdPhoto.appendChild(img);
               let tdEmail = document.createElement("td");
               tdEmail.innerText = email;
               let tdMobile = document.createElement("td");
               tdMobile.innerText = mobile;
               let tdDOB = document.createElement("td");
               tdDOB.innerText = DOB;
               let tdAddress = document.createElement("td");
               tdAddress.innerText = address;
               let tdPayment = document.createElement("td");
               tdPayment.innerText = payment;
               let tdWantedShift = document.createElement("td");
               tdWantedShift.innerText = wantedShift;
               let tdProvidedShift = document.createElement("td");
               tdProvidedShift.innerText = providedShift;
               
               let tdActions = document.createElement("td");
               let removeBtn = document.createElement("button");
               removeBtn.innerText = "Remove";
               removeBtn.className = "remove-btn";
               removeBtn.addEventListener("click", function(){
                   removebtnfunc(userId, token);
               });

               let setSeatBtn = document.createElement("button");
               setSeatBtn.innerText = "Set Seat";
               setSeatBtn.className = "set-seat-btn";
               setSeatBtn.addEventListener("click", function(){
                   setSeat(userId, token);
               });

               let removeSeatBtn = document.createElement("button");
               removeSeatBtn.innerText = "Remove Seat";
               removeSeatBtn.className = "remove-seat-btn";
               removeSeatBtn.addEventListener("click", function(){
                   removeSeat(userId, token);
               });

               let setSeatManualBtn = document.createElement("button");
               setSeatManualBtn.innerText = "Set Full Seat";
               setSeatManualBtn.className = "set-seat-manual-btn";
               setSeatManualBtn.addEventListener("click", function(){
                   setSeatManual(userId, token);
               });

               tdActions.append(removeBtn, setSeatBtn, removeSeatBtn, setSeatManualBtn);
               tr.append(tdIndex, tdName, tdId, tdPhoto, tdEmail, tdMobile, tdDOB, tdAddress, tdPayment, tdWantedShift, tdProvidedShift, tdActions);
               tbody.append(tr);
           });
           
           table.append(tbody);
           document.querySelector("#list").append(table);
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
    let url=`${baseUrlPath}/admin/studentfl/${user}`
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
           document.querySelector("#list").innerHTML = "";

                let table = document.createElement("table");
                table.className = "student-table";

                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");

                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thName = document.createElement("th");
                thName.innerText = "Name";
                let thId = document.createElement("th");
                thId.innerText = "User ID";
                let thPhoto = document.createElement("th");
                thPhoto.innerText = "Photo";
                let thEmail = document.createElement("th");
                thEmail.innerText = "Email";
                let thMobile = document.createElement("th");
                thMobile.innerText = "Mobile";
                let thDOB = document.createElement("th");
                thDOB.innerText = "DOB";
                let thAddress = document.createElement("th");
                thAddress.innerText = "Address";
                let thPayment = document.createElement("th");
                thPayment.innerText = "Payment";
                let thWantedShift = document.createElement("th");
                thWantedShift.innerText = "Wanted Shift";
                let thProvidedShift = document.createElement("th");
                thProvidedShift.innerText = "Provided Shift";
                let thActions = document.createElement("th");
                thActions.innerText = "Actions";

                trHead.append(thIndex, thName, thId, thPhoto, thEmail, thMobile, thDOB, thAddress, thPayment, thWantedShift, thProvidedShift, thActions);
                thead.append(trHead);
                table.append(thead);

                let tbody = document.createElement("tbody");

                data.forEach(({ name, DOB, address, email, mobile, userId, photoUrl, payment, wantedShift, providedShift }, i) => {
                    let tr = document.createElement("tr");

                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdName = document.createElement("td");
                    tdName.innerText = name;
                    let tdId = document.createElement("td");
                    tdId.innerText = userId;
                    let tdPhoto = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                    img.alt = "User Photo";
                    img.className = "student-photo";
                    tdPhoto.appendChild(img);
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = email;
                    let tdMobile = document.createElement("td");
                    tdMobile.innerText = mobile;
                    let tdDOB = document.createElement("td");
                    tdDOB.innerText = DOB;
                    let tdAddress = document.createElement("td");
                    tdAddress.innerText = address;
                    let tdPayment = document.createElement("td");
                    tdPayment.innerText = payment;
                    let tdWantedShift = document.createElement("td");
                    tdWantedShift.innerText = wantedShift;
                    let tdProvidedShift = document.createElement("td");
                    tdProvidedShift.innerText = providedShift;

                    let tdActions = document.createElement("td");
                    let removeBtn = document.createElement("button");
                    removeBtn.innerText = "Remove";
                    removeBtn.className = "action-btn remove-btn";
                    removeBtn.addEventListener("click", function () {
                        removebtnfunc(userId, token);
                    });

                    let seatBtn = document.createElement("button");
                    seatBtn.innerText = "Set Seat";
                    seatBtn.className = "action-btn seat-btn";
                    seatBtn.addEventListener("click", function () {
                        setSeat(userId, token);
                    });

                    let rseatBtn = document.createElement("button");
                    rseatBtn.innerText = "Remove Seat";
                    rseatBtn.className = "action-btn remove-seat-btn";
                    rseatBtn.addEventListener("click", function () {
                        removeSeat(userId, token);
                    });

                    let seatMBtn = document.createElement("button");
                    seatMBtn.innerText = "Set Full Seat";
                    seatMBtn.className = "action-btn set-seat-manual-btn";
                    seatMBtn.addEventListener("click", function () {
                        setSeatManual(userId, token);
                    });

                    tdActions.append(removeBtn, seatBtn, rseatBtn, seatMBtn);
                    tr.append(tdIndex, tdName, tdId, tdPhoto, tdEmail, tdMobile, tdDOB, tdAddress, tdPayment, tdWantedShift, tdProvidedShift, tdActions);
                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                document.querySelector("#list").appendChild(table);
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
//'''''''''''''''''''''''''''''''''''
let getStudentByShift=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let user=document.getElementById("id").value
   // const studentTableBody = document.getElementById('student-table-body');
    let url=`${baseUrlPath}/admin/studentshift/${user}`
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
                
                document.querySelector("#list").innerHTML = "";

                let table = document.createElement("table");
                table.className = "student-table";

                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");

                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thName = document.createElement("th");
                thName.innerText = "Name";
                let thId = document.createElement("th");
                thId.innerText = "User ID";
                let thPhoto = document.createElement("th");
                thPhoto.innerText = "Photo";
                let thEmail = document.createElement("th");
                thEmail.innerText = "Email";
                let thMobile = document.createElement("th");
                thMobile.innerText = "Mobile";
                let thDOB = document.createElement("th");
                thDOB.innerText = "DOB";
                let thAddress = document.createElement("th");
                thAddress.innerText = "Address";
                let thPayment = document.createElement("th");
                thPayment.innerText = "Payment";
                let thWantedShift = document.createElement("th");
                thWantedShift.innerText = "Wanted Shift";
                let thProvidedShift = document.createElement("th");
                thProvidedShift.innerText = "Provided Shift";
                let thActions = document.createElement("th");
                thActions.innerText = "Actions";

                trHead.append(thIndex, thName, thId, thPhoto, thEmail, thMobile, thDOB, thAddress, thPayment, thWantedShift, thProvidedShift, thActions);
                thead.append(trHead);
                table.append(thead);

                let tbody = document.createElement("tbody");

                data.forEach(({ name, DOB, address, email, mobile, userId, photoUrl, payment, wantedShift, providedShift }, i) => {
                    let tr = document.createElement("tr");

                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdName = document.createElement("td");
                    tdName.innerText = name;
                    let tdId = document.createElement("td");
                    tdId.innerText = userId;
                    let tdPhoto = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                    img.alt = "User Photo";
                    img.className = "student-photo";
                    tdPhoto.appendChild(img);
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = email;
                    let tdMobile = document.createElement("td");
                    tdMobile.innerText = mobile;
                    let tdDOB = document.createElement("td");
                    tdDOB.innerText = DOB;
                    let tdAddress = document.createElement("td");
                    tdAddress.innerText = address;
                    let tdPayment = document.createElement("td");
                    tdPayment.innerText = payment;
                    let tdWantedShift = document.createElement("td");
                    tdWantedShift.innerText = wantedShift;
                    let tdProvidedShift = document.createElement("td");
                    tdProvidedShift.innerText = providedShift;

                    let tdActions = document.createElement("td");
                    let removeBtn = document.createElement("button");
                    removeBtn.innerText = "Remove";
                    removeBtn.className = "action-btn remove-btn";
                    removeBtn.addEventListener("click", function () {
                        removebtnfunc(userId, token);
                    });

                    let seatBtn = document.createElement("button");
                    seatBtn.innerText = "Set Seat";
                    seatBtn.className = "action-btn seat-btn";
                    seatBtn.addEventListener("click", function () {
                        setSeat(userId, token);
                    });

                    let rseatBtn = document.createElement("button");
                    rseatBtn.innerText = "Remove Seat";
                    rseatBtn.className = "action-btn remove-seat-btn";
                    rseatBtn.addEventListener("click", function () {
                        removeSeat(userId, token);
                    });

                    let seatMBtn = document.createElement("button");
                    seatMBtn.innerText = "Set Full Seat";
                    seatMBtn.className = "action-btn set-seat-manual-btn";
                    seatMBtn.addEventListener("click", function () {
                        setSeatManual(userId, token);
                    });

                    tdActions.append(removeBtn, seatBtn, rseatBtn, seatMBtn);
                    tr.append(tdIndex, tdName, tdId, tdPhoto, tdEmail, tdMobile, tdDOB, tdAddress, tdPayment, tdWantedShift, tdProvidedShift, tdActions);
                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                document.querySelector("#list").appendChild(table);
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
//////////////////////////////////////////////////////////////////////////
let allAvalibleSeats=()=>{
    let token = JSON.parse(localStorage.getItem("jwtToken"));
let url = `${baseUrlPath}/admin/seats`;

fetch(url, {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`
    }
})
.then(response => {
    if(response.status == 200){
        response.json().then(data => {
            document.querySelector("#list").innerHTML = "";
            document.getElementById("sum").innerText = `Total Seats: ${data.length}`;

            let table = document.createElement("table");
            table.className = "seat-table";
            
            let thead = document.createElement("thead");
            let trHead = document.createElement("tr");
            
            let thIndex = document.createElement("th");
            thIndex.innerText = "S.No";
            let thLibrary = document.createElement("th");
            thLibrary.innerText = "Library Name";
            let thFloor = document.createElement("th");
            thFloor.innerText = "Floor Name";
            let thShift = document.createElement("th");
            thShift.innerText = "Shift Name";
            let thSeat = document.createElement("th");
            thSeat.innerText = "Seat No.";
            let thActions = document.createElement("th");
            thActions.innerText = "Actions";
            
            trHead.append(thIndex,thLibrary, thFloor, thShift, thSeat, thActions);
            thead.append(trHead);
            table.append(thead);
            
            let tbody = document.createElement("tbody");
            
            data.forEach(({library,floor, seatNo, shift}, i) => {
                let tr = document.createElement("tr");
                
                let tdIndex = document.createElement("td");
                tdIndex.innerText = i + 1;
                let tdLibrary = document.createElement("td");
                tdLibrary.innerText = library;
                let tdFloor = document.createElement("td");
                tdFloor.innerText = floor;
                let tdShift = document.createElement("td");
                tdShift.innerText = shift;
                let tdSeat = document.createElement("td");
                tdSeat.innerText = seatNo;
                
                let tdActions = document.createElement("td");
                let removeBtn = document.createElement("button");
                removeBtn.innerText = "Remove";
                removeBtn.className = "remove-btn";
                removeBtn.addEventListener("click", function(){
                    deleteSeat(seatNo, token);
                });
                
                tdActions.append(removeBtn);
                tr.append(tdIndex,tdLibrary, tdFloor, tdShift, tdSeat, tdActions);
                tbody.append(tr);
            });
            
            table.append(tbody);
            document.querySelector("#list").append(table);
        });
    } else if(response.status == 401){
        alert("Session expired.");
        window.location.href = "adminLogin.html";
    } else {
        response.json().then(data => alert(data.message));
        window.location.reload();
    }
});

}
let allSeats=()=>{
    let token = JSON.parse(localStorage.getItem("UserToken"));
    let url = `${baseUrlPath}/admin/seats`;

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
                document.querySelector("#list").innerHTML = "";
                document.getElementById("sum").innerText = `Total Seats: ${data.length}`;

                let table = document.createElement("table");
                table.className = "seat-table";
                
                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");
                
                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thLibrary = document.createElement("th");
                thLibrary.innerText = "Library Name";
                let thFloor = document.createElement("th");
                thFloor.innerText = "Floor Name";
                let thShift = document.createElement("th");
                thShift.innerText = "Shift Name";
                let thSeat = document.createElement("th");
                thSeat.innerText = "Seat No.";
                
                trHead.append(thIndex, thLibrary,thFloor, thShift, thSeat);
                thead.append(trHead);
                table.append(thead);
                
                let tbody = document.createElement("tbody");
                
                data.forEach(({floor, seatNo, shift,library}, i) => {
                    let tr = document.createElement("tr");
                    
                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdLibrary = document.createElement("td");
                    tdLibrary.innerText = library;
                    let tdFloor = document.createElement("td");
                    tdFloor.innerText = floor;
                    let tdShift = document.createElement("td");
                    tdShift.innerText = shift;
                    let tdSeat = document.createElement("td");
                    tdSeat.innerText = seatNo;
                    tr.append(tdIndex,tdLibrary, tdFloor, tdShift, tdSeat);
                    tbody.append(tr);
                });
                
                table.append(tbody);
                document.querySelector("#list").append(table);
            });
        } else if(response.status == 401){
            alert("Session expired.");
            window.location.href = "studentLogin.html";
        } else {
            response.json().then(data => alert(data.message));
            window.location.reload();
        }
});

}
//====================================================================

let getStudentAreaWise=()=>{
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let user = document.getElementById("id").value;
    let url = `${baseUrlPath}/admin/studentlist?address=${user}`;

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                document.querySelector("#list").innerHTML = "";

                let table = document.createElement("table");
                table.className = "student-table";

                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");

                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thName = document.createElement("th");
                thName.innerText = "Name";
                let thId = document.createElement("th");
                thId.innerText = "User ID";
                let thPhoto = document.createElement("th");
                thPhoto.innerText = "Photo";
                let thEmail = document.createElement("th");
                thEmail.innerText = "Email";
                let thMobile = document.createElement("th");
                thMobile.innerText = "Mobile";
                let thDOB = document.createElement("th");
                thDOB.innerText = "DOB";
                let thAddress = document.createElement("th");
                thAddress.innerText = "Address";
                let thPayment = document.createElement("th");
                thPayment.innerText = "Payment";
                let thWantedShift = document.createElement("th");
                thWantedShift.innerText = "Wanted Shift";
                let thProvidedShift = document.createElement("th");
                thProvidedShift.innerText = "Provided Shift";
                let thActions = document.createElement("th");
                thActions.innerText = "Actions";

                trHead.append(thIndex, thName, thId, thPhoto, thEmail, thMobile, thDOB, thAddress, thPayment, thWantedShift, thProvidedShift, thActions);
                thead.append(trHead);
                table.append(thead);

                let tbody = document.createElement("tbody");

                data.forEach(({ name, DOB, address, email, mobile, userId, photoUrl, payment, wantedShift, providedShift }, i) => {
                    let tr = document.createElement("tr");

                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdName = document.createElement("td");
                    tdName.innerText = name;
                    let tdId = document.createElement("td");
                    tdId.innerText = userId;
                    let tdPhoto = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                    img.alt = "User Photo";
                    img.className = "student-photo";
                    tdPhoto.appendChild(img);
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = email;
                    let tdMobile = document.createElement("td");
                    tdMobile.innerText = mobile;
                    let tdDOB = document.createElement("td");
                    tdDOB.innerText = DOB;
                    let tdAddress = document.createElement("td");
                    tdAddress.innerText = address;
                    let tdPayment = document.createElement("td");
                    tdPayment.innerText = payment;
                    let tdWantedShift = document.createElement("td");
                    tdWantedShift.innerText = wantedShift;
                    let tdProvidedShift = document.createElement("td");
                    tdProvidedShift.innerText = providedShift;

                    let tdActions = document.createElement("td");
                    let removeBtn = document.createElement("button");
                    removeBtn.innerText = "Remove";
                    removeBtn.className = "action-btn remove-btn";
                    removeBtn.addEventListener("click", function () {
                        removebtnfunc(userId, token);
                    });

                    let seatBtn = document.createElement("button");
                    seatBtn.innerText = "Set Seat";
                    seatBtn.className = "action-btn seat-btn";
                    seatBtn.addEventListener("click", function () {
                        setSeat(userId, token);
                    });

                    let rseatBtn = document.createElement("button");
                    rseatBtn.innerText = "Remove Seat";
                    rseatBtn.className = "action-btn remove-seat-btn";
                    rseatBtn.addEventListener("click", function () {
                        removeSeat(userId, token);
                    });

                    let seatMBtn = document.createElement("button");
                    seatMBtn.innerText = "Set Full Seat";
                    seatMBtn.className = "action-btn set-seat-manual-btn";
                    seatMBtn.addEventListener("click", function () {
                        setSeatManual(userId, token);
                    });

                    tdActions.append(removeBtn, seatBtn, rseatBtn, seatMBtn);
                    tr.append(tdIndex, tdName, tdId, tdPhoto, tdEmail, tdMobile, tdDOB, tdAddress, tdPayment, tdWantedShift, tdProvidedShift, tdActions);
                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                document.querySelector("#list").appendChild(table);
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
//---------------------------------------------------------------------
let getAllStudentWithNoSeatNo=()=>{
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let url = `${baseUrlPath}/admin/studentno`;
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
                    seatM.innerText = "Set Full Seat";
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
    // let shift=prompt("Enter shift name");
    if(choice){
        fetch(`${baseUrlPath}/admin/studentseats/${userId}`, {

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
        let url = `${baseUrlPath}/admin/studentnopay`;
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
        fetch(`${baseUrlPath}/admin/uppay/${id}`, {

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
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let user = document.getElementById("id").value;
    let url = `${baseUrlPath}/admin/admins/${user}`;

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
                document.querySelector("#list").innerHTML = "";
                
                let table = document.createElement("table");
                table.className = "student-table";
                
                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");
                
                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thName = document.createElement("th");
                thName.innerText = "Name";
                let thId = document.createElement("th");
                thId.innerText = "User ID";
                let thPhoto = document.createElement("th");
                thPhoto.innerText = "Photo";
                let thEmail = document.createElement("th");
                thEmail.innerText = "Email";
                let thMobile = document.createElement("th");
                thMobile.innerText = "Mobile";
                let thDOB = document.createElement("th");
                thDOB.innerText = "DOB";
                let thAddress = document.createElement("th");
                thAddress.innerText = "Address";
                let thActions = document.createElement("th");
                thActions.innerText = "Actions";
                
                trHead.append(thIndex, thName, thId, thPhoto, thEmail, thMobile, thDOB, thAddress, thActions);
                thead.append(trHead);
                table.append(thead);
                
                let tbody = document.createElement("tbody");
                
                [data].forEach(({ name, DOB, address, email, mobile, id, photoUrl }, i) => {
                    let tr = document.createElement("tr");
                    
                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdName = document.createElement("td");
                    tdName.innerText = name;
                    let tdId = document.createElement("td");
                    tdId.innerText = id;
                    let tdPhoto = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                    img.alt = "User Photo";
                    img.className = "student-photo";
                    tdPhoto.appendChild(img);
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = email;
                    let tdMobile = document.createElement("td");
                    tdMobile.innerText = mobile;
                    let tdDOB = document.createElement("td");
                    tdDOB.innerText = DOB;
                    let tdAddress = document.createElement("td");
                    tdAddress.innerText = address;
        
                    let tdActions = document.createElement("td");
                    let removeBtn = document.createElement("button");
                    removeBtn.innerText = "Remove";
                    removeBtn.className = "remove-btn";
                    removeBtn.addEventListener("click", function(){
                        removeAdmin(id, token);
                    });

                    tdActions.append(removeBtn);
                    tr.append(tdIndex, tdName, tdId, tdPhoto, tdEmail, tdMobile, tdDOB, tdAddress, tdActions);
                    tbody.append(tr);
                });
                
                table.append(tbody);
                document.querySelector("#list").append(table);
            });
        } else if(response.status == 401){
            alert("Session expired.");
            window.location.href = "adminLogin.html";
        } else {
            response.json().then(data => alert(data.message));
            window.location.reload();
        }
    });

}

let updateAdminFun=(id)=>{
    localStorage.setItem("adminId",JSON.stringify(id))
    window.location.href="updateAdmin.html"
}

let removeAdmin=(userId,token)=>{
    
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch(`${baseUrlPath}/admin/deladmin/${userId}`, {

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
        // alert("Admin sucessfully deleted: ");
       
        //     location.reload();
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
    fetch(`${baseUrlPath}/admin/upadmin`, {

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
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let p = document.getElementById("page").value;
    let s = document.getElementById("size").value;
    let url = `${baseUrlPath}/admin/admin/${p}/${s}`;

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                document.querySelector("#list").innerHTML = "";

                let table = document.createElement("table");
                table.className = "student-table";

                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");

                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thName = document.createElement("th");
                thName.innerText = "Name";
                let thId = document.createElement("th");
                thId.innerText = "User ID";
                let thPhoto = document.createElement("th");
                thPhoto.innerText = "Photo";
                let thEmail = document.createElement("th");
                thEmail.innerText = "Email";
                let thMobile = document.createElement("th");
                thMobile.innerText = "Mobile";
                let thDOB = document.createElement("th");
                thDOB.innerText = "DOB";
                let thAddress = document.createElement("th");
                thAddress.innerText = "Address";
                let thActions = document.createElement("th");
                thActions.innerText = "Actions";

                trHead.append(thIndex, thName, thId, thPhoto, thEmail, thMobile, thDOB, thAddress, thActions);
                thead.append(trHead);
                table.append(thead);

                let tbody = document.createElement("tbody");

                data.forEach(({ name, DOB, address, email, mobile, id, photoUrl }, i) => {
                    let tr = document.createElement("tr");

                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdName = document.createElement("td");
                    tdName.innerText = name;
                    let tdId = document.createElement("td");
                    tdId.innerText = id;
                    let tdPhoto = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                    img.alt = "User Photo";
                    img.className = "student-photo";
                    tdPhoto.appendChild(img);
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = email;
                    let tdMobile = document.createElement("td");
                    tdMobile.innerText = mobile;
                    let tdDOB = document.createElement("td");
                    tdDOB.innerText = DOB;
                    let tdAddress = document.createElement("td");
                    tdAddress.innerText = address;

                    let tdActions = document.createElement("td");
                    let removeBtn = document.createElement("button");
                    removeBtn.innerText = "Remove";
                    removeBtn.className = "action-btn remove-btn";
                    removeBtn.addEventListener("click", function () {
                        removeAdmin(id, token);
                    });

                    tdActions.appendChild(removeBtn);
                    tr.append(tdIndex, tdName, tdId, tdPhoto, tdEmail, tdMobile, tdDOB, tdAddress, tdActions);
                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                document.querySelector("#list").appendChild(table);
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

/////////////////////////???????????????????????????????????????????????????????????
let addFloor=()=>{
    let token=JSON.parse(localStorage.getItem("jwtToken"))
    let lid=currentLabId;
    let name=document.getElementById("Fname").value
   console.log(lid);
   // console.log(dob)
    fetch(`${baseUrlPath}/admin/addfloor/${lid}`, {

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
    fetch(`${baseUrlPath}/admin/addlibrary`, {

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
    let url = `${baseUrlPath}/admin/librarys`;

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

                data.forEach(({ name, address, labId }, i) => {
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

    fetch(`${baseUrlPath}/admin/library/${currentLabId}`, {
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
    let lid = JSON.parse(localStorage.getItem("labId"));
let token = JSON.parse(localStorage.getItem("jwtToken"));
let url = `${baseUrlPath}/admin/floors/${lid}`;

fetch(url, {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`
    }
})
.then(response => {
    if (response.status == 200) {

        response.json().then(data => {
            document.querySelector("#size").innerText = `Total Floors : ${data.length}`;
            document.querySelector("#list").innerHTML = "";

            let table = document.createElement("table");
            table.className = "floor-table";

            let thead = document.createElement("thead");
            let trHead = document.createElement("tr");

            let thIndex = document.createElement("th");
            thIndex.innerText = "S.No";
            let thName = document.createElement("th");
            thName.innerText = "Name";
            let thId = document.createElement("th");
            thId.innerText = "Floor ID";
            let thActions = document.createElement("th");
            thActions.innerText = "Actions";

            trHead.append(thIndex, thName, thId, thActions);
            thead.append(trHead);
            table.append(thead);

            let tbody = document.createElement("tbody");

            data.forEach(({ name, floorNo }, i) => {
                let tr = document.createElement("tr");

                let tdIndex = document.createElement("td");
                tdIndex.innerText = i + 1;
                let tdName = document.createElement("td");
                tdName.innerText = name;
                let tdId = document.createElement("td");
                tdId.innerText = floorNo;

                let tdActions = document.createElement("td");
                let removeBtn = document.createElement("button");
                removeBtn.innerText = "Remove";
                removeBtn.className = "action-btn remove-btn";
                removeBtn.addEventListener("click", function () {
                    removeFloor(floorNo, token);
                });

                let updateBtn = document.createElement("button");
                updateBtn.innerText = "Edit Name";
                updateBtn.className = "action-btn update-btn";
                updateBtn.addEventListener("click", function () {
                    editName(floorNo, token);
                });

                let addShiftBtn = document.createElement("button");
                addShiftBtn.innerText = "Add Shift";
                addShiftBtn.className = "action-btn add-shift-btn";
                addShiftBtn.addEventListener("click", function () {
                    openAddShiftModal(floorNo, token);
                });

                let showShiftBtn = document.createElement("button");
                showShiftBtn.innerText = "Show Shifts";
                showShiftBtn.className = "action-btn show-shifts-btn";
                showShiftBtn.addEventListener("click", function () {
                    localStorage.setItem("floorNo", JSON.stringify(floorNo));
                    window.location.href = "showShifts.html";
                });

                let showStudentBtn = document.createElement("button");
                showStudentBtn.innerText = "Show Students";
                showStudentBtn.className = "action-btn show-students-btn";
                showStudentBtn.addEventListener("click", function () {
                    localStorage.setItem("floorNo", JSON.stringify(floorNo));
                    window.location.href = "showFloorStudent.html";
                });

                tdActions.append(removeBtn, updateBtn, addShiftBtn, showShiftBtn, showStudentBtn);
                tr.append(tdIndex, tdName, tdId, tdActions);
                tbody.appendChild(tr);
            });

            table.appendChild(tbody);
            document.querySelector("#list").appendChild(table);
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

let openAddShiftModal=(floorNo,token)=> {
    document.getElementById('addModal').style.display = "block";
    close("addModal","close");
}

let showFloorStudent=()=>{
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let floor = JSON.parse(localStorage.getItem("floorNo"));
    let url = `${baseUrlPath}/admin/studentfl/${floor}`;

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if(response.status == 200){
            response.json().then(data => {
                document.querySelector("#list").innerHTML = "";
                document.getElementById("sum").innerText = "Total students: " + data.length;

                let table = document.createElement("table");
                table.className = "student-table";
                
                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");
                
                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thName = document.createElement("th");
                thName.innerText = "Name";
                let thId = document.createElement("th");
                thId.innerText = "User ID";
                let thPhoto = document.createElement("th");
                thPhoto.innerText = "Photo";
                let thEmail = document.createElement("th");
                thEmail.innerText = "Email";
                let thMobile = document.createElement("th");
                thMobile.innerText = "Mobile";
                let thDOB = document.createElement("th");
                thDOB.innerText = "DOB";
                let thAddress = document.createElement("th");
                thAddress.innerText = "Address";
                let thPayment = document.createElement("th");
                thPayment.innerText = "Payment";
                let thWantedShift = document.createElement("th");
                thWantedShift.innerText = "Wanted Shift";
                let thProvidedShift = document.createElement("th");
                thProvidedShift.innerText = "Provided Shift";
                let thActions = document.createElement("th");
                thActions.innerText = "Actions";
                
                trHead.append(thIndex, thName, thId, thPhoto, thEmail, thMobile, thDOB, thAddress, thPayment, thWantedShift, thProvidedShift, thActions);
                thead.append(trHead);
                table.append(thead);
                
                let tbody = document.createElement("tbody");
                
                data.forEach(({name, DOB, address, email, mobile, payment, wantedShift, providedShift, userId, photoUrl}, i) => {
                    let tr = document.createElement("tr");
                    
                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdName = document.createElement("td");
                    tdName.innerText = name;
                    let tdId = document.createElement("td");
                    tdId.innerText = userId;
                    let tdPhoto = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                    img.alt = "User Photo";
                    img.className = "user-photo";
                    tdPhoto.appendChild(img);
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = email;
                    let tdMobile = document.createElement("td");
                    tdMobile.innerText = mobile;
                    let tdDOB = document.createElement("td");
                    tdDOB.innerText = DOB;
                    let tdAddress = document.createElement("td");
                    tdAddress.innerText = address;
                    let tdPayment = document.createElement("td");
                    tdPayment.innerText = payment;
                    let tdWantedShift = document.createElement("td");
                    tdWantedShift.innerText = wantedShift;
                    let tdProvidedShift = document.createElement("td");
                    tdProvidedShift.innerText = providedShift;
                    
                    let tdActions = document.createElement("td");
                    let removeBtn = document.createElement("button");
                    removeBtn.innerText = "Remove";
                    removeBtn.className = "remove-btn";
                    removeBtn.addEventListener("click", function(){
                        removebtnfunc(userId, token);
                    });

                    let setSeatBtn = document.createElement("button");
                    setSeatBtn.innerText = "Set Seat";
                    setSeatBtn.className = "set-seat-btn";
                    setSeatBtn.addEventListener("click", function(){
                        setSeat(userId, token);
                    });

                    let removeSeatBtn = document.createElement("button");
                    removeSeatBtn.innerText = "Remove Seat";
                    removeSeatBtn.className = "remove-seat-btn";
                    removeSeatBtn.addEventListener("click", function(){
                        removeSeat(userId, token);
                    });

                    let setSeatManualBtn = document.createElement("button");
                    setSeatManualBtn.innerText = "Set Full Seat";
                    setSeatManualBtn.className = "set-seat-manual-btn";
                    setSeatManualBtn.addEventListener("click", function(){
                        setSeatManual(userId, token);
                    });

                    tdActions.append(removeBtn, setSeatBtn, removeSeatBtn, setSeatManualBtn);
                    tr.append(tdIndex, tdName, tdId, tdPhoto, tdEmail, tdMobile, tdDOB, tdAddress, tdPayment, tdWantedShift, tdProvidedShift, tdActions);
                    tbody.append(tr);
                });
                
                table.append(tbody);
                document.querySelector("#list").append(table);
            });
        } else if(response.status == 401){
            alert("Session expired.");
            window.location.href = "adminLogin.html";
        } else {
            response.json().then(data => alert(data.message));
            window.location.href = "showFloor.html";
        }
    });

}

let removeLibrary=(id,token)=>{
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch(`${baseUrlPath}/admin/delLibrary/${id}`, {

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
    fetch(`${baseUrlPath}/admin/delfloor/${id}`, {

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
        fetch(`${baseUrlPath}/admin/upfloor/${fl}?name=${userInput}`, {

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

//    console.log(fn)
    fetch(`${baseUrlPath}/admin/addshift/${fn}`, {

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
    let floorNo = JSON.parse(localStorage.getItem("floorNo"));
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let url = `${baseUrlPath}/admin/shifts/${floorNo}`;

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                document.querySelector("#list").innerHTML = "";
                document.querySelector("#size").innerText = `Total Shifts : ${data.length}`;

                let table = document.createElement("table");
                table.className = "shift-table";

                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");

                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thName = document.createElement("th");
                thName.innerText = "Name";
                let thId = document.createElement("th");
                thId.innerText = "Shift ID";
                let thStart = document.createElement("th");
                thStart.innerText = "Start Time";
                let thEnd = document.createElement("th");
                thEnd.innerText = "End Time";
                let thActions = document.createElement("th");
                thActions.innerText = "Actions";

                trHead.append(thIndex, thName, thId, thStart, thEnd, thActions);
                thead.append(trHead);
                table.append(thead);

                let tbody = document.createElement("tbody");

                data.forEach(({ shiftName, startTime, endTime, shiftId }, i) => {
                    let tr = document.createElement("tr");

                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdName = document.createElement("td");
                    tdName.innerText = shiftName;
                    let tdId = document.createElement("td");
                    tdId.innerText = shiftId;
                    let tdStart = document.createElement("td");
                    tdStart.innerText = startTime;
                    let tdEnd = document.createElement("td");
                    tdEnd.innerText = endTime;

                    let tdActions = document.createElement("td");
                    let removeBtn = document.createElement("button");
                    removeBtn.innerText = "Remove";
                    removeBtn.className = "action-btn remove-btn";
                    removeBtn.addEventListener("click", function () {
                        removeShift(shiftId, token);
                    });

                    let updateBtn = document.createElement("button");
                    updateBtn.innerText = "Update";
                    updateBtn.className = "action-btn update-btn";
                    updateBtn.addEventListener("click", function () {
                        openShiftUpdateModal(shiftId, token, shiftName, startTime, endTime);
                    });

                    let addSeatBtn = document.createElement("button");
                    addSeatBtn.innerText = "Add Seat";
                    addSeatBtn.className = "action-btn add-seat-btn";
                    addSeatBtn.addEventListener("click", function () {
                        addSeat(shiftId, token);
                    });

                    let showSeatBtn = document.createElement("button");
                    showSeatBtn.innerText = "Show Seats";
                    showSeatBtn.className = "action-btn show-seats-btn";
                    showSeatBtn.addEventListener("click", function () {
                        localStorage.setItem("ShiftNo", JSON.stringify(shiftId));
                        window.location.href = "showSeats.html";
                    });

                    let showStudentBtn = document.createElement("button");
                    showStudentBtn.innerText = "Show Students";
                    showStudentBtn.className = "action-btn show-students-btn";
                    showStudentBtn.addEventListener("click", function () {
                        localStorage.setItem("ShiftNo", JSON.stringify(shiftId));
                        window.location.href = "showStudent.html";
                    });

                    tdActions.append(removeBtn, updateBtn, addSeatBtn, showSeatBtn, showStudentBtn);
                    tr.append(tdIndex, tdName, tdId, tdStart, tdEnd, tdActions);
                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                document.querySelector("#list").appendChild(table);
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
    let url=`${baseUrlPath}/admin/student/shift/${shift}`
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
                
                document.querySelector("#list").innerHTML = "";
                document.getElementById("sum").innerText = "Total students: " + data.length;

                let table = document.createElement("table");
                table.className = "student-table";
                
                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");
                
                let thIndex = document.createElement("th");
                thIndex.innerText = "S.No";
                let thName = document.createElement("th");
                thName.innerText = "Name";
                let thId = document.createElement("th");
                thId.innerText = "User ID";
                let thPhoto = document.createElement("th");
                thPhoto.innerText = "Photo";
                let thEmail = document.createElement("th");
                thEmail.innerText = "Email";
                let thMobile = document.createElement("th");
                thMobile.innerText = "Mobile";
                let thDOB = document.createElement("th");
                thDOB.innerText = "DOB";
                let thAddress = document.createElement("th");
                thAddress.innerText = "Address";
                let thPayment = document.createElement("th");
                thPayment.innerText = "Payment";
                let thWantedShift = document.createElement("th");
                thWantedShift.innerText = "Wanted Shift";
                let thProvidedShift = document.createElement("th");
                thProvidedShift.innerText = "Provided Shift";
                let thActions = document.createElement("th");
                thActions.innerText = "Actions";
                
                trHead.append(thIndex, thName, thId, thPhoto, thEmail, thMobile, thDOB, thAddress, thPayment, thWantedShift, thProvidedShift, thActions);
                thead.append(trHead);
                table.append(thead);
                
                let tbody = document.createElement("tbody");
                
                data.forEach(({name, DOB, address, email, mobile, payment, wantedShift, providedShift, userId, photoUrl}, i) => {
                    let tr = document.createElement("tr");
                    
                    let tdIndex = document.createElement("td");
                    tdIndex.innerText = i + 1;
                    let tdName = document.createElement("td");
                    tdName.innerText = name;
                    let tdId = document.createElement("td");
                    tdId.innerText = userId;
                    let tdPhoto = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                    img.alt = "User Photo";
                    img.className = "user-photo";
                    tdPhoto.appendChild(img);
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = email;
                    let tdMobile = document.createElement("td");
                    tdMobile.innerText = mobile;
                    let tdDOB = document.createElement("td");
                    tdDOB.innerText = DOB;
                    let tdAddress = document.createElement("td");
                    tdAddress.innerText = address;
                    let tdPayment = document.createElement("td");
                    tdPayment.innerText = payment;
                    let tdWantedShift = document.createElement("td");
                    tdWantedShift.innerText = wantedShift;
                    let tdProvidedShift = document.createElement("td");
                    tdProvidedShift.innerText = providedShift;
                    
                    let tdActions = document.createElement("td");
                    let removeBtn = document.createElement("button");
                    removeBtn.innerText = "Remove";
                    removeBtn.className = "remove-btn";
                    removeBtn.addEventListener("click", function(){
                        removebtnfunc(userId, token);
                    });

                    let setSeatBtn = document.createElement("button");
                    setSeatBtn.innerText = "Set Seat";
                    setSeatBtn.className = "set-seat-btn";
                    setSeatBtn.addEventListener("click", function(){
                        setSeat(userId, token);
                    });

                    let removeSeatBtn = document.createElement("button");
                    removeSeatBtn.innerText = "Remove Seat";
                    removeSeatBtn.className = "remove-seat-btn";
                    removeSeatBtn.addEventListener("click", function(){
                        removeSeat(userId, token);
                    });

                    let setSeatManualBtn = document.createElement("button");
                    setSeatManualBtn.innerText = "Set Full Seat";
                    setSeatManualBtn.className = "set-seat-manual-btn";
                    setSeatManualBtn.addEventListener("click", function(){
                        setSeatManual(userId, token);
                    });

                    tdActions.append(removeBtn, setSeatBtn, removeSeatBtn, setSeatManualBtn);
                    tr.append(tdIndex, tdName, tdId, tdPhoto, tdEmail, tdMobile, tdDOB, tdAddress, tdPayment, tdWantedShift, tdProvidedShift, tdActions);
                    tbody.append(tr);
                });
                
                table.append(tbody);
                document.querySelector("#list").append(table);
            });
    }else if(response.status == 401){
        alert("Session expired .")
        window.location.href="adminLogin.html"
        }else{
            response.json().then(data => alert(data.message));
            // window.location.href="showShifts.html"
        }
    })
}

let removeShift=(id,token)=>{
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch(`${baseUrlPath}/admin/delshift/${id}`, {

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
        // window.location.reload()
    }
})
    }
}
let addSeat=(shiftId,token)=>{
    let userInput = prompt("Please enter no of seats.");
    if (userInput != "" && userInput != null) {
        fetch(`${baseUrlPath}/admin/seats/${shiftId}?noOfSeats=${userInput}`, {

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

    fetch(`${baseUrlPath}/admin/upshift`, {

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
    let url=`${baseUrlPath}/admin/seats/${ShiftNo}`
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

               document.querySelector("#list").innerHTML = "";
               document.getElementById("size").innerText = `Total Seats: ${data.length}`;
   
               let table = document.createElement("table");
               table.className = "seat-table";
               
               let thead = document.createElement("thead");
               let trHead = document.createElement("tr");
               
               let thIndex = document.createElement("th");
               thIndex.innerText = "S.No";
               let thLibrary = document.createElement("th");
               thLibrary.innerText = "Library Name";
               let thFloor = document.createElement("th");
               thFloor.innerText = "Floor Name";
               let thShift = document.createElement("th");
               thShift.innerText = "Shift Name";
               let thSeat = document.createElement("th");
               thSeat.innerText = "Seat No.";
               let thStudent = document.createElement("th");
               thStudent.innerText = "Student Name.";
               let thActions = document.createElement("th");
               thActions.innerText = "Actions";
               
               trHead.append(thIndex,thLibrary, thFloor, thShift, thSeat,thStudent, thActions);
               thead.append(trHead);
               table.append(thead);
               
               let tbody = document.createElement("tbody");
               
               data.forEach(({seat,student}, i) => {

                   let tr = document.createElement("tr");
                   let tdIndex = document.createElement("td");
                   tdIndex.innerText = i + 1;
                   let tdLibrary = document.createElement("td");
                   tdLibrary.innerText = seat.library;
                   let tdFloor = document.createElement("td");
                   tdFloor.innerText = seat.floor;
                   let tdShift = document.createElement("td");
                   tdShift.innerText = seat.shift;
                   let tdSeat = document.createElement("td");
                   tdSeat.innerText = seat.seatNo;
                   let tdStudent = document.createElement("td");
                   let sname;
                   if(student==null){
                       sname="Empty Seat"
                       tdStudent.style.color="Green"
                   }else{
                       sname=student.name
                        tdStudent.style.color="Red"
                   }
                   tdStudent.innerText = sname;
                   
                   let tdActions = document.createElement("td");
                   let removeBtn = document.createElement("button");
                   removeBtn.innerText = "Remove";
                   removeBtn.className = "remove-btn";
                   removeBtn.addEventListener("click", function(){
                       deleteSeat(seat.seatNo, token);
                   });

                   let showStuBtn = document.createElement("button");
                   showStuBtn.innerText = "Studfent Details";
                   showStuBtn.className = "set-seat-btn";
                   showStuBtn.addEventListener("click",function(){
                        if(student!=null){
                            studentDetails(student,token);
                        }else{
                            alert("Seat is empty.")
                        }
                    })                
                   tdActions.append(removeBtn,showStuBtn);
                   tr.append(tdIndex,tdLibrary, tdFloor, tdShift, tdSeat,tdStudent, tdActions);
                   tbody.append(tr);
               });
               
               table.append(tbody);
               document.querySelector("#list").append(table);
        });
        }else if(response.status == 401){
            alert("Session expired .")
            window.location.href="adminLogin.html"
            }else{
                response.json().then(data => alert(data.message));
            }
        })
}

let deleteSeat=(seatNo,token)=>{
    let choice= confirm("Are You Sure ?");

    if(choice){
    fetch(`${baseUrlPath}/admin/seats/${seatNo}`, {

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

let studentDetails=(data,token)=>{
    // console.log(data);
    document.getElementById("size").innerText = `Total Student: 1`;
    document.querySelector("#back").href="showSeats.html"

    document.querySelector("#list").innerHTML = "";
            
            let table = document.createElement("table");
            table.className = "student-table";
            
            let thead = document.createElement("thead");
            let trHead = document.createElement("tr");
            let thName = document.createElement("th");
            thName.innerText = "Name";
            let thId = document.createElement("th");
            thId.innerText = "User ID";
            let thPhoto = document.createElement("th");
            thPhoto.innerText = "Photo";
            let thEmail = document.createElement("th");
            thEmail.innerText = "Email";
            let thMobile = document.createElement("th");
            thMobile.innerText = "Mobile";
            let thDOB = document.createElement("th");
            thDOB.innerText = "DOB";
            let thAddress = document.createElement("th");
            thAddress.innerText = "Address";
            let thPayment = document.createElement("th");
            thPayment.innerText = "Payment";
            let thWantedShift = document.createElement("th");
            thWantedShift.innerText = "Wanted Shift";
            let thProvidedShift = document.createElement("th");
            thProvidedShift.innerText = "Provided Shift";
            let thSeat = document.createElement("th");
            thSeat.innerText = "Seat No.";
            let thActions = document.createElement("th");
            thActions.innerText = "Actions";
            
            trHead.append( thName, thId, thPhoto,thEmail, thMobile, thDOB, thAddress, thPayment, thWantedShift, thProvidedShift,thSeat, thActions);
            thead.append(trHead);
            table.append(thead);
            
            let tbody = document.createElement("tbody");
            
                let tr = document.createElement("tr");
                let tdName = document.createElement("td");
                tdName.innerText = data.name;
                let tdId = document.createElement("td");
                tdId.innerText = data.userId;
                let tdPhoto = document.createElement("td");
                let img = document.createElement("img");
                img.src = data.photoUrl || defaultUrl; // Use a default photo URL if photoUrl is not available
                img.alt = "User Photo";
                img.className = "student-photo";
                tdPhoto.appendChild(img);
                let tdEmail = document.createElement("td");
                tdEmail.innerText = data.email;
                let tdMobile = document.createElement("td");
                tdMobile.innerText = data.mobile;
                let tdDOB = document.createElement("td");
                tdDOB.innerText = data.DOB;
                let tdAddress = document.createElement("td");
                tdAddress.innerText = data.address;
                let tdPayment = document.createElement("td");
                tdPayment.innerText = data.payment;
                let tdWantedShift = document.createElement("td");
                tdWantedShift.innerText = data.wantedShift;
                let tdProvidedShift = document.createElement("td");
                tdProvidedShift.innerText = data.providedShift;
                let tdSeat = document.createElement("td");
                tdSeat.innerText = data.seats[0].seatNo;
                
                let tdActions = document.createElement("td");
                let removeBtn = document.createElement("button");
                removeBtn.innerText = "Remove";
                removeBtn.className = "remove-btn";
                removeBtn.addEventListener("click", function(){
                    removebtnfunc(data.userId, token);
                });

                let setSeatBtn = document.createElement("button");
                setSeatBtn.innerText = "Set Seat";
                setSeatBtn.className = "set-seat-btn";
                setSeatBtn.addEventListener("click", function(){
                    setSeat(data.userId, token);
                });

                let removeSeatBtn = document.createElement("button");
                removeSeatBtn.innerText = "Remove Seat";
                removeSeatBtn.className = "remove-seat-btn";
                removeSeatBtn.addEventListener("click", function(){
                    removeSeat(data.userId, token);
                });

                let setSeatManualBtn = document.createElement("button");
                setSeatManualBtn.innerText = "Set Full Seat";
                setSeatManualBtn.className = "set-seat-manual-btn";
                setSeatManualBtn.addEventListener("click", function(){
                    setSeatManual(data.userId, token);
                });

                tdActions.append(removeBtn, setSeatBtn, removeSeatBtn, setSeatManualBtn);
                tr.append( tdName, tdId, tdPhoto, tdEmail, tdMobile, tdDOB, tdAddress, tdPayment, tdWantedShift, tdProvidedShift,tdSeat, tdActions);
                tbody.append(tr);
                table.append(tbody);
                document.querySelector("#list").append(table);
}

let getAdminProfile=()=>{
    let token = JSON.parse(localStorage.getItem("jwtToken"));
    let url = `${baseUrlPath}/admin/profile`;

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
    let url = `${baseUrlPath}/students/profile`;

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
    fetch(`${baseUrlPath}/students/student`, {

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
let openForgetPasswordModal=()=> {
    document.getElementById('updateModal').style.display = "block";
    document.getElementById('userName').value = "xyz@email.com";
    close("updateModal","close");
}
let forgetPassword=(user)=>{
    let userName=document.getElementById('userName').value;
    let dob=document.getElementById('dob').value;
    let password=document.getElementById('pass').value;
    // console.log(dob);
    
    if(userName=="" || dob== "" || password==""){
        alert("Fill all three details.")
    }

    fetch(`${baseUrlPath}/register/${user}/password`, {

        method: "PATCH",
        headers: {
            // "Authorization": `Bearer ${currentToken}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "userName":userName,
            "dob":dob,
            "password":password
        })
        
    }).then(response => {
        if(response.status == 200){
            response.json().then(data => alert(data.message));
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
let sLogin=()=>{
    let url = `${baseUrlPath}/signIn`;
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
               // localStorage.setItem("data",JSON.stringify(data));
              //  localStorage.setItem("userId",JSON.stringify(data.userId));
                window.location.href="UserMethod.html"
              });    
        } else {
            alert("Authentication failed" );
        }
    })

}