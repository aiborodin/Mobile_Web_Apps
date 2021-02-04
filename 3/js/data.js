let departments_json = localStorage.getItem("departments_json");
let departments;
if (!departments_json || departments_json === '[]') {
    departments = [
        {
            id: 1,
            name: 'Sales'
        },
        {
            id: 2,
            name: "Marketing"
        },
        {
            id: 3,
            name: "Software Development"
        }
    ];
    saveDepartments(departments);
} else {
    departments = JSON.parse(departments_json);
}

function saveDepartments(departments) {
    localStorage.setItem("departments_json", JSON.stringify(departments));
}