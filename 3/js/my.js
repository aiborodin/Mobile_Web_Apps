let editType = '';
let id = '';
document.addEventListener("DOMContentLoaded", function (event) {
    var rowText;
    var list = document.getElementById('list');
    for (let department of departments) {
        let depRow = document.createElement('ion-item');
        depRow.innerHTML = `<ion-label>${department.name}</ion-label>
                            <ion-button class="edit" color="primary" size="medium" dep_id="${department.id}">
                                <ion-icon name="create"></ion-icon>
                            </ion-button>
                            <ion-button class="delete" color="danger" size="medium" dep_id="${department.id}">
                                <ion-icon name="trash"></ion-icon>
                            </ion-button>`;
        list.appendChild(depRow);
    }
    document.querySelector('#main').style.display = "";
    document.querySelector('#edit').style.display = 'none';

    document.querySelectorAll('.edit').forEach(input => input.addEventListener('click', ({target}) => {
        editType = "edit";
        id =  parseInt(target.getAttribute('dep_id'), 10);
        let department = departments.find(d => d.id === id);
        document.getElementById('dep_id').value = department.id;
        document.getElementById('dep_name').value = department.name;
        document.querySelector("#main").style.display = "none";
        document.querySelector("#edit").style.display = "";
    }));

    document.querySelectorAll('.delete').forEach(input => input.addEventListener('click', ({target}) => {
        id =  parseInt(target.getAttribute('dep_id'), 10);
        saveDepartments(departments.filter(d => d.id !== id));
        location.reload();
    }));

    document.querySelector("#save").addEventListener('click', () => {
        if (editType === "add") {
            departments.push({
                id: parseInt(document.getElementById("dep_id").value, 10),
                name: document.getElementById("dep_name").value
            });
        } else {
            let department = departments.find(d => d.id === id);
            department.id = document.getElementById("dep_id").value;
            department.name = document.getElementById("dep_name").value;
        }
        saveDepartments(departments);
        location.reload();
    });

    document.querySelector("#add").addEventListener('click', () => {
        document.querySelector('#main').style.display = 'none';
        document.querySelector("#edit").style.display = "";
        document.getElementById("dep_id").value = "";
        document.getElementById("dep_name").value = "";
        editType = "add";
    })
});


