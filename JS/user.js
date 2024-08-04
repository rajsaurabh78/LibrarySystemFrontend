let allDetails=()=>{
    let token = JSON.parse(localStorage.getItem("UserToken"));
let url = `http://localhost:8080/students/allDetails`;

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

            data.forEach(({ name, address, labId, floorList }, i) => {
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

                let showFl = document.createElement("button");
                showFl.innerText = "Show Floor";
                showFl.className = "show-floor-btn";
                showFl.addEventListener("click", function() {
                    let floorListRow = row.nextSibling;
                    if (floorListRow && floorListRow.className === "floor-list-row") {
                        floorListRow.remove();
                    } else {
                        let floorRow = document.createElement("tr");
                        floorRow.className = "floor-list-row";
                        let floorCell = document.createElement("td");
                        floorCell.colSpan = 5;

                        let floorTable = document.createElement("table");
                        floorTable.border = "1";
                        floorTable.style.margin = "10px 0";
                        floorTable.style.width = "100%";

                        let floorThead = document.createElement("thead");
                        let floorHeaderRow = document.createElement("tr");

                        let floorTh0 = document.createElement("th");
                        floorTh0.innerText = "S.No";
                        let floorTh1 = document.createElement("th");
                        floorTh1.innerText = "Floor No";
                        let floorTh2 = document.createElement("th");
                        floorTh2.innerText = "Floor Name";
                        let floorTh3 = document.createElement("th");
                        floorTh3.innerText = "Actions";
                        
                        let closeTh = document.createElement("th");
                        let closeBtn = document.createElement("button");
                        closeBtn.innerHTML = "&times;";
                        closeBtn.className = "close-btn";
                        closeBtn.addEventListener("click", function() {
                            floorRow.remove();
                        });
                        closeTh.appendChild(closeBtn);

                        floorHeaderRow.append(floorTh0, floorTh1, floorTh2, floorTh3, closeTh);
                        floorThead.append(floorHeaderRow);
                        floorTable.append(floorThead);

                        let floorTbody = document.createElement("tbody");

                        floorList.forEach(({ name, floorNo, shiftList }, j) => {
                            let floorDataRow = document.createElement("tr");

                            let floorSerialNoCell = document.createElement("td");
                            floorSerialNoCell.innerText = j + 1;

                            let floorNoCell = document.createElement("td");
                            floorNoCell.innerText = floorNo;

                            let floorNameCell = document.createElement("td");
                            floorNameCell.innerText = name;

                            let floorActionsCell = document.createElement("td");

                            let showShift = document.createElement("button");
                            showShift.innerText = "Show Shift";
                            showShift.style.color = "green";

                            showShift.addEventListener("click", function() {
                                localStorage.setItem("shiftList", JSON.stringify(shiftList));
                                window.location.href = "showShiftList.html";
                            });

                            floorActionsCell.append(showShift);
                            floorDataRow.append(floorSerialNoCell, floorNoCell, floorNameCell, floorActionsCell);
                            floorTbody.append(floorDataRow);
                        });

                        floorTable.append(floorTbody);
                        floorCell.append(floorTable);
                        floorRow.append(floorCell);
                        row.parentNode.insertBefore(floorRow, row.nextSibling);
                    }
                });

                actionsCell.append(showFl);
                row.append(serialNoCell, nameCell, labIdCell, addressCell, actionsCell);
                tbody.append(row);
            });
        });
    } else if (response.status == 401) {
        alert("Session expired.");
        window.location.href = "studentLogin.html";
    } else {
        response.json().then(data => alert(data.message));
        window.location.reload();
    }
});

}
let showShiftList=()=>{
    let data = JSON.parse(localStorage.getItem("shiftList"));
    let table = document.createElement("table");
    table.id = "libraryTable";

    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.innerText = "Shift Id";
    let th2 = document.createElement("th");
    th2.innerText = "Shift Name";
    let th3 = document.createElement("th");
    th3.innerText = "Start Time";
    let th4 = document.createElement("th");
    th4.innerText = "End Time";
    let th5 = document.createElement("th");
    th5.innerText = "Actions";
    tr.append(th1, th2, th3, th4, th5);
    table.append(tr);

    document.querySelector("#lists").innerHTML = "";
    document.querySelector("#size").innerText = "Total: " + data.length;

    data.forEach(({ shiftName, shiftId, startTime, endTime, seatList }, i) => {
        let tr1 = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = shiftId;
        let td2 = document.createElement("td");
        td2.innerText = shiftName;
        let td3 = document.createElement("td");
        td3.innerText = startTime;
        let td4 = document.createElement("td");
        td4.innerText = endTime;
        let actionsCell = document.createElement("td");

        let showFl = document.createElement("button");
        showFl.innerText = "Show Seats";
        showFl.style.color = "green";

        let div = document.createElement("div");
        div.id = `seatList_${shiftId}`;
        div.style.display = "none";
        div.className = "seat-list";

        showFl.addEventListener("click", function() {
            div.innerHTML = "";
            if (div.style.display === "none") {
                div.style.display = "block";
                let nestedTable = document.createElement("table");
                nestedTable.className = "nested-table";
                nestedTable.border = "1";

                let nestedTr = document.createElement("tr");
                let nth1 = document.createElement("th");
                nth1.innerText = "Serial No.";
                let nth2 = document.createElement("th");
                nth2.innerText = "Floor No.";
                let nth3 = document.createElement("th");
                nth3.innerText = "Seat No.";
                nestedTr.append(nth1, nth2, nth3);
                nestedTable.append(nestedTr);

                seatList.forEach(({ floor, seatNo }, index) => {
                    let nestedTr1 = document.createElement("tr");
                    let ntd1 = document.createElement("td");
                    ntd1.innerText = index + 1;
                    let ntd2 = document.createElement("td");
                    ntd2.innerText = floor;
                    let ntd3 = document.createElement("td");
                    ntd3.innerText = seatNo;
                    nestedTr1.append(ntd1, ntd2, ntd3);
                    nestedTable.append(nestedTr1);
                });

                let closeBtn = document.createElement("button");
                closeBtn.innerText = "×";
                closeBtn.className = "close-btn";
                closeBtn.addEventListener("click", function() {
                    div.style.display = "none";
                });

                div.append(closeBtn, nestedTable);
            } else {
                div.style.display = "none";
            }
        });

        actionsCell.append(showFl);
        tr1.append(td1, td2, td3, td4, actionsCell);
        table.append(tr1);

        let tr2 = document.createElement("tr");
        let tdNested = document.createElement("td");
        tdNested.colSpan = 5;
        tdNested.append(div);
        tr2.append(tdNested);
        table.append(tr2);

        document.querySelector("#lists").append(table);
    });

}