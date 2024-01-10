const workers = [
  {
    name: "Alice",
    surname: "Johnson",
    isSuccessful: true,
    age: 52,
    department: "Managment",
    onDuty: true,
    maritalStatus: "Married",
    performance: "90%",
  },
  {
    name: "Bob",
    surname: "Smith",
    isSuccessful: false,
    age: 21,
    department: "Mechanical Engineer",
    onDuty: true,
    maritalStatus: "Married",
    performance: "54%",
  },
  {
    name: "Charlie",
    surname: "Brown",
    isSuccessful: true,
    age: 38,
    department: "Mechanical Engineer",
    onDuty: true,
    maritalStatus: "Married",
    performance: "80%",
  },

  {
    name: "Karen",
    surname: "Moore",
    isSuccessful: false,
    age: 43,
    department: "Software Developer",
    onDuty: true,
    maritalStatus: "Single",
    performance: "46%",
  },
  {
    name: "Sarah",
    surname: "Anderson",
    isSuccessful: true,
    age: 25,
    department: "Software Developer",
    onDuty: false,
    maritalStatus: "Married",
    performance: "82%",
  },
  {
    name: "Linda",
    surname: "Williams",
    isSuccessful: true,
    age: 36,
    department: "Software Developer",
    onDuty: true,
    maritalStatus: "Single",
    performance: "86%",
  },
  {
    name: "Michael",
    surname: "Jones",
    isSuccessful: true,
    age: 22,
    department: "Engineer",
    onDuty: false,
    maritalStatus: "Single",
    performance: "79%",
  },
  {
    name: "David",
    surname: "Taylor",
    isSuccessful: false,
    age: 29,
    department: "Engineer",
    onDuty: true,
    maritalStatus: "Married",
    performance: "61%",
  },
  {
    name: "Rober",
    surname: "Hernandez",
    isSuccessful: true,
    age: 29,
    department: "Architect",
    onDuty: false,
    maritalStatus: "Single",
    performance: "81%",
  },
  {
    name: "Susan",
    surname: "Lopez",
    isSuccessful: true,
    age: 33,
    department: "Architect",
    onDuty: true,
    maritalStatus: "Married",
    performance: "80%",
  },
  {
    name: "Richard",
    surname: "Thomas",
    isSuccessful: true,
    age: 33,
    department: "Architect",
    onDuty: false,
    maritalStatus: "Married",
    performance: "85%",
  },
  {
    name: "Mary",
    surname: "Jackson",
    isSuccessful: false,
    age: 29,
    department: "Accountant",
    onDuty: true,
    maritalStatus: "Married",
    performance: "63%",
  },
  {
    name: "Charles",
    surname: "Jackson",
    isSuccessful: false,
    age: 30,
    department: "Accountant",
    onDuty: true,
    maritalStatus: "Married",
    performance: "55%",
  },
  {
    name: "Jessica",
    surname: "Garcia",
    isSuccessful: true,
    age: 28,
    department: "Software Developer",
    onDuty: true,
    maritalStatus: "Single",
    performance: "86%",
  },
  {
    name: "Barbara",
    surname: "Martin",
    isSuccessful: true,
    age: 37,
    department: "Lawyer",
    onDuty: true,
    maritalStatus: "Single",
    performance: "89%",
  },
  {
    name: "Amelia",
    surname: "Gray",
    isSuccessful: true,
    age: 49,
    department: "Managment",
    onDuty: true,
    maritalStatus: "Single",
    performance: "92%",
  },
  {
    name: "Logan",
    surname: "Harris",
    isSuccessful: true,
    age: 55,
    department: "Lawyer",
    onDuty: true,
    maritalStatus: "Single",
    performance: "83%",
  },
  {
    name: "Mia",
    surname: "White",
    isSuccessful: true,
    age: 22,
    department: "Lawyer",
    onDuty: false,
    maritalStatus: "Single",
    performance: "80%",
  },
  {
    name: "Linda",
    surname: "Anderson",
    isSuccessful: false,
    age: 23,
    department: "Chef",
    onDuty: false,
    maritalStatus: "Single",
    performance: "35%",
  },
  {
    name: "Elizabeth",
    surname: "Martin",
    isSuccessful: true,
    age: 40,
    department: "Chef",
    onDuty: false,
    maritalStatus: "Married",
    performance: "82%",
  },
];

function tabloyaVeriEkle() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  workers.forEach((veri) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${veri.name}</td>
            <td>${veri.surname}</td>
            <td>${veri.isSuccessful}</td>
            <td>${veri.age}</td>
            <td>${veri.department}</td>
            <td>${veri.onDuty}</td>
            <td>${veri.maritalStatus}</td>
            <td>${veri.performance}</td>
        `;
    tbody.appendChild(tr);
  });
}

tabloyaVeriEkle(workers);

function filterworkersAndDisplay() {
  const resultElement = document.getElementById("ciktiAlani");
  resultElement.innerHTML = "";

  const successfulworkers = workers.filter((student) => student.isSuccessful);

  successfulworkers.forEach(function (student) {
    let listItem = document.createElement("li");
    listItem.textContent = student.name + " " + student.surname;
    resultElement.appendChild(listItem);
  });
}

const filterButton1 = document.getElementById("button1");
filterButton1.addEventListener("click", filterworkersAndDisplay);

function filterworkersAndDisplay1() {
  const resultElement = document.getElementById("ciktiAlani");
  resultElement.innerHTML = "";

  const marriedworkers = workers.filter(
    (student) => student.maritalStatus === "Married"
  );

  marriedworkers.forEach(function (student) {
    let listItem = document.createElement("li");
    listItem.textContent = student.name + " " + student.surname;
    resultElement.appendChild(listItem);
  });
}

const filterButton2 = document.getElementById("button2");
filterButton2.addEventListener("click", filterworkersAndDisplay1);

function filterworkersAndDisplay2() {
  const resultElement = document.getElementById("ciktiAlani");
  resultElement.innerHTML = "";

  const singleworkers = workers.filter(
    (student) => student.maritalStatus === "Single"
  );

  singleworkers.forEach(function (student) {
    let listItem = document.createElement("li");
    listItem.textContent = student.name + " " + student.surname;
    resultElement.appendChild(listItem);
  });
}

const filterButton3 = document.getElementById("button3");
filterButton3.addEventListener("click", filterworkersAndDisplay2);

function filterworkersAndDisplay3() {
  const resultElement = document.getElementById("ciktiAlani");
  resultElement.innerHTML = "";

  const onDutyworkers = workers.filter((student) => student.onDuty === true);

  onDutyworkers.forEach(function (student) {
    let listItem = document.createElement("li");
    listItem.textContent = student.name + " " + student.surname;
    resultElement.appendChild(listItem);
  });
}

const filterButton4 = document.getElementById("button4");
filterButton4.addEventListener("click", filterworkersAndDisplay3);

function filterworkersAndDisplay4() {
  const resultElement = document.getElementById("ciktiAlani");
  resultElement.innerHTML = "";

  const onDutyworkers = workers.filter((student) => student.onDuty === false);

  onDutyworkers.forEach(function (student) {
    let listItem = document.createElement("li");
    listItem.textContent = student.name + " " + student.surname;
    resultElement.appendChild(listItem);
  });
}

const filterButton5 = document.getElementById("button5");
filterButton5.addEventListener("click", filterworkersAndDisplay4);

function filterworkersAndDisplay5() {
  const resultElement = document.getElementById("ciktiAlani");
  resultElement.innerHTML = "";

  const yasAraligiworkers = workers.filter(
    (student) => student.age >= 20 && student.age < 30
  );

  yasAraligiworkers.forEach(function (student) {
    let listItem = document.createElement("li");
    listItem.textContent = student.name + " " + student.surname;
    resultElement.appendChild(listItem);
  });
}

const filterButton6 = document.getElementById("button6");
filterButton6.addEventListener("click", filterworkersAndDisplay5);

function filterworkersAndDisplay6() {
  const resultElement = document.getElementById("ciktiAlani");
  resultElement.innerHTML = "";

  const yasAraligiworkers = workers.filter(
    (student) => student.age >= 30 && student.age < 40
  );

  yasAraligiworkers.forEach(function (student) {
    let listItem = document.createElement("li");
    listItem.textContent = student.name + " " + student.surname;
    resultElement.appendChild(listItem);
  });
}

const filterButton7 = document.getElementById("button7");
filterButton7.addEventListener("click", filterworkersAndDisplay6);

function filterworkersAndDisplay7() {
  const resultElement = document.getElementById("ciktiAlani");
  resultElement.innerHTML = "";

  const yasAraligiworkers = workers.filter(
    (student) => student.age >= 40 && student.age < 65
  );

  yasAraligiworkers.forEach(function (student) {
    let listItem = document.createElement("li");
    listItem.textContent = student.name + " " + student.surname;
    resultElement.appendChild(listItem);
  });
}

const filterButton8 = document.getElementById("button8");
filterButton8.addEventListener("click", filterworkersAndDisplay7);

function sortByPerformance() {
  workers.sort((a, b) => {
    let percentageA = parseInt(a.performance, 10);
    let percentageB = parseInt(b.performance, 10);
    return percentageB - percentageA;
  });

  updateTable();
}

function updateTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  workers.forEach((worker) => {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    cell1.textContent = worker.name;
    cell2.textContent = worker.surname;
    cell3.textContent = worker.isSuccessful;
    cell4.textContent = worker.age;
    cell5.textContent = worker.department;
    cell6.textContent = worker.onDuty;
    cell7.textContent = worker.maritalStatus;
    cell8.textContent = worker.performance;
  });
}

const sortButton9 = document.getElementById("button9");
sortButton9.addEventListener("click", sortByPerformance);

function createTop5Table() {
  let top5Workers = workers.slice(0, 5);
  let ayinElemani = document.getElementById("eOfThe");
  ayinElemani.textContent = "EMPLOYEES OF THE MONTH";

  const newTable = document.createElement("table");
  newTable.id = "myNewTable";
  const tableHead = newTable.createTHead();
  tableHead.id = "myTableHeadId";
  const headRow = tableHead.insertRow(0);

  let header1 = headRow.insertCell(0);
  let header2 = headRow.insertCell(1);
  let header3 = headRow.insertCell(2);
  let header4 = headRow.insertCell(3);
  let header5 = headRow.insertCell(4);
  let header6 = headRow.insertCell(5);
  let header7 = headRow.insertCell(6);
  let header8 = headRow.insertCell(7);
  header1.textContent = "Name";
  header1.className = "theadClass";
  header2.textContent = "Surname";
  header2.className = "theadClass";
  header3.textContent = "Succesful";
  header3.className = "theadClass";
  header4.textContent = "Age";
  header4.className = "theadClass";
  header5.textContent = "Department";
  header5.className = "theadClass";
  header6.textContent = "On Duty";
  header6.className = "theadClass";
  header7.textContent = "Marital Status";
  header7.className = "theadClass";
  header8.textContent = "Performance";
  header8.className = "theadClass";

  const tableBody = document.createElement("tbody");
  newTable.appendChild(tableBody);

  top5Workers.forEach((worker) => {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    cell1.textContent = worker.name;
    cell2.textContent = worker.surname;
    cell3.textContent = worker.isSuccessful;
    cell4.textContent = worker.age;
    cell5.textContent = worker.department;
    cell6.textContent = worker.onDuty;
    cell7.textContent = worker.maritalStatus;
    cell8.textContent = worker.performance;
  });

  const container = document.getElementById("newTableContainer");
  container.innerHTML = "";
  container.appendChild(newTable);
}

document.getElementById("button10").addEventListener("click", createTop5Table);

function createLast5Table() {
  let top5Workers = workers.slice(15, 20);
  let ayinElemani = document.getElementById("eOfThe");
  ayinElemani.textContent = `"NEEDS A BOOST!" EMPLOYEES `;

  const newTable = document.createElement("table");
  newTable.id = "myNewTable";
  const tableHead = newTable.createTHead();
  tableHead.id = "myTableHeadId";
  const headRow = tableHead.insertRow(0);

  let header1 = headRow.insertCell(0);
  let header2 = headRow.insertCell(1);
  let header3 = headRow.insertCell(2);
  let header4 = headRow.insertCell(3);
  let header5 = headRow.insertCell(4);
  let header6 = headRow.insertCell(5);
  let header7 = headRow.insertCell(6);
  let header8 = headRow.insertCell(7);
  header1.textContent = "Name";
  header1.className = "theadClass";
  header2.textContent = "Surname";
  header2.className = "theadClass";
  header3.textContent = "Succesful";
  header3.className = "theadClass";
  header4.textContent = "Age";
  header4.className = "theadClass";
  header5.textContent = "Department";
  header5.className = "theadClass";
  header6.textContent = "On Duty";
  header6.className = "theadClass";
  header7.textContent = "Marital Status";
  header7.className = "theadClass";
  header8.textContent = "Performance";
  header8.className = "theadClass";

  const tableBody = document.createElement("tbody");
  newTable.appendChild(tableBody);

  top5Workers.forEach((worker) => {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    cell1.textContent = worker.name;
    cell2.textContent = worker.surname;
    cell3.textContent = worker.isSuccessful;
    cell4.textContent = worker.age;
    cell5.textContent = worker.department;
    cell6.textContent = worker.onDuty;
    cell7.textContent = worker.maritalStatus;
    cell8.textContent = worker.performance;
  });

  const container = document.getElementById("newTableContainer");
  container.innerHTML = "";
  container.appendChild(newTable);
}

document.getElementById("button11").addEventListener("click", createLast5Table);



/*
function filterworkersAndDisplay() {
    
    const resultElement = document.getElementById('ciktiAlani');
    
    const successfulworkers = workers.filter(student => student.isSuccessful);

    // Filtrelenen öğrencilerin adlarını bir string'e dönüştür
    const names = successfulworkers.map(student => student.name + " " + student.surname )

    


    successfulworkers.forEach(function(student) {
        let  listItem = document.createElement('li');
        listItem.textContent = names;
        resultElement.appendChild(listItem);

    });
    
    // Sonucu h1 etiketine yaz
    //resultElement.textContent = names;
}
*/
// Butona olay dinleyici ekle
//const filterButton = document.getElementById('button');
//filterButton.addEventListener('click', filterworkersAndDisplay);
