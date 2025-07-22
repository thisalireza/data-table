//call fetch api data
$(document).ready(function () {
    getData();
});

//fetch api data
async function getData() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();

    // Initialize DataTable
    $('#userTable').DataTable({
        data: data.users,
        responsive: true,
        columns: [
            { data: 'id' , class: 'text-center' },
            { data: 'firstName' , class: 'text-center' },
            { data: 'lastName' , class: 'text-center' },
            { data: 'gender' , class: 'text-center' },
            { data: 'age' , class: 'text-center' },
            { data: 'birthDate' , class: 'text-center' },
            { data: 'email' , class: 'text-center' },
            { data: 'phone' , class: 'text-center' },
            {
                data: null,
             class: 'text-center' ,
                render: function (data, type, row, meta) {
                    return `<button class="btn btn-primary btn-sm view-btn" data-id="${row.id}">View More
<svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eye-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 18c-.328 0 -.652 -.017 -.97 -.05c-3.172 -.332 -5.85 -2.315 -8.03 -5.95c2.4 -4 5.4 -6 9 -6c3.465 0 6.374 1.853 8.727 5.558" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>
</button>`;
                }
            }
        ],
        destroy: true // Allow reinitialization
    });

    // Button click handler
    $('#userTable tbody').on('click', '.view-btn', function () {
        const table = $('#userTable').DataTable();
        const rowData = table.row($(this).parents('tr')).data();

        // Store data in localStorage
        localStorage.setItem('selectedUser', JSON.stringify(rowData));

        // Navigate to detail page
        window.location.href = 'detail.html';
    });
}
