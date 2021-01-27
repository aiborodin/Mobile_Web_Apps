$(() => {
    let searchParams = new URLSearchParams(window.location.search);
    let id = -1;
    if (searchParams.has('id')) {
        id = parseInt(searchParams.get('id'));
        let department = departments.find(dep => dep.id === id);
        $('#id').val(department.id);
        $('#dep_name').val(department.name);
    }
    $('#save').on('click', () => {
        if (id === -1) {
            departments.push({
                id: parseInt($('#id').val()),
                name: $('#dep_name').val()
            })
        } else {
            let department = departments.find(dep => dep.id === id);
            department.id = parseInt($('#id').val());
            department.name = $('#dep_name').val();
        }
        saveDepartments(departments);
        $(location).attr('href', 'index.html');
    });
});