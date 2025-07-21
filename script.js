//call fetch api data
$(document).ready(function () {
    getData();
});

//fetch api data
async function getData() {
    const records = await fetch('https://dummyjson.com/users');
    const data = await records.json();

    let tab = '';
    data.users.forEach(function (user) {
        tab += `<tr>
<td>${user.firstName}</td>
<td>${user.lastName}</td>
<td>${user.gender}</td>
<td>${user.age}</td>
<td>${user.birthDate}</td>
<td>${user.email}</td>

<td>${user.phone}</td>
</tr>
`;
    });

    document.getElementById('tbody').innerHTML = tab;

    $('#userTable').DataTable({
        "data": data.users,
        "columns": [
            {'data': 'firstName'},
            {'data': 'lastName'},
            {'data': 'gender'},
            {'data': 'age'},
            {'data': 'birthDate'},
            {'data': 'email'},
            {'data': 'phone'},
        ]
    });
}