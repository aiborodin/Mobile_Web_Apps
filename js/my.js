$(() => {
    let table = $("#departments_table");
    let depRow;
    for (let department of departments) {
        depRow = `<tr>
                        <td>${department.name}</td>
                        <td class="text-right">
                            <a href="department.html?id=${department.id}" class="btn btn-outline-secondary">
                                <i class="fa fa-fw fa-edit"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger rem-row" dep_id="${department.id}">
                                <i class="fa fa-fw fa-trash"></i>
                            </button>
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


