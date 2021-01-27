$(() => {
    let table = $("#departments_table");
    let depRow;
    for (let department of departments) {
        depRow = `<tr>
                        <td><h5>${department.name}</h5></td>
                        <td class="right-align">
                            <a href="department.html?id=${department.id}" class="btn-floating waves-effect waves-light blue" style="margin-right: 10px;">
                                <i class="material-icons">edit</i>
                            </a>
                            <a class="rem-row btn-floating waves-effect waves-light red" dep_id="${department.id}">
                                <i class="material-icons">delete</i>
                            </a>
                        </td>
                  </tr>`;
        table.append(depRow);
    }
    $('.rem-row').on('click', function () {
        let removed_id = parseInt($(this).attr("dep_id"), 10);
        saveDepartments(departments.filter(dep => dep.id !== removed_id));
        location.reload();
    })
});


