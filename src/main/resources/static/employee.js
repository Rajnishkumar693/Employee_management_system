// Load data when page opens
window.onload = function () {
    loadEmployees();
};


// Add Employee
document.getElementById("employeeForm")
.addEventListener("submit", async function (e) {

    e.preventDefault();

    const employee = {

        name:
        document.getElementById("name").value,

        department:
        document.getElementById("department").value,

        email:
        document.getElementById("email").value,

        salary:
        document.getElementById("salary").value
    };

    const response =
        await fetch(
            "http://localhost:8080/api/employees",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body:
                JSON.stringify(employee)
            }
        );

    if (response.ok) {

        alert(
            "Employee Added Successfully"
        );

        document
        .getElementById("employeeForm")
        .reset();

        loadEmployees();

    }

    else {

        alert(
            "Error while adding employee"
        );

    }

});



// Load Employees
async function loadEmployees() {

    try {

        const response =
            await fetch(
                "http://localhost:8080/api/employees"
            );

        const employees =
            await response.json();

        let rows = "";

        employees.forEach(emp => {

            rows += `
            <tr>

                <td>${emp.id}</td>

                <td>${emp.name}</td>

                <td>${emp.department}</td>

                <td>${emp.email}</td>

                <td>${emp.salary}</td>

                <td>

                    <button onclick="editEmployee(${emp.id})">
                        Edit
                    </button>

                    <button onclick="deleteEmployee(${emp.id})">
                        Delete
                    </button>

                </td>

            </tr>
            `;

        });

        document
        .getElementById("employeeTable")
        .innerHTML = rows;

    }

    catch(error){

        console.log(error);

    }

}



// Delete
async function deleteEmployee(id) {

    const ok =
        confirm(
            "Delete Employee?"
        );

    if(!ok){
        return;
    }

    const response =
        await fetch(
            `http://localhost:8080/api/employees/${id}`,
            {
                method: "DELETE"
            }
        );

    if(response.ok){

        alert("Deleted");

        loadEmployees();

    }

}



// Edit
async function editEmployee(id) {

try{

const res =
await fetch(
`http://localhost:8080/api/employees/${id}`
);

const emp =
await res.json();


const name =
prompt(
"Enter Name",
emp.name
);

if(name===null) return;


const department =
prompt(
"Enter Department",
emp.department
);

if(department===null) return;


const email =
prompt(
"Enter Email",
emp.email
);

if(email===null) return;


const salary =
prompt(
"Enter Salary",
emp.salary
);

if(salary===null) return;


const employee = {

name:name,

department:department,

email:email,

salary:Number(salary)

};


const response =
await fetch(

`http://localhost:8080/api/employees/${id}`,

{

method:"PUT",

headers:{

"Content-Type":
"application/json"

},

body:
JSON.stringify(employee)

}

);


if(response.ok){

alert(
"Employee Updated Successfully"
);

loadEmployees();

}

else{

alert(
"Update Failed"
);

}

}

catch(error){

console.log(error);

}

}