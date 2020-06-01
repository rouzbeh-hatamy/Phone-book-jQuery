/* eslint-disable */
// globals
const contacts = [
  {
    id: '1',
    name: 'rouzbeh',
    surname: 'hatamy',
    phoneNumber: '09339994444',
    email: 'roozbeh.hatamy@gmail.com',
    address: 'No.1 Hashemi st. Tehran IR',
    birthday: '1996/06/11',
    details: 'still a good friend',
  },
  {
    id: '2',
    name: 'sara',
    surname: 'kamali',
    phoneNumber: '09120000000',
    email: 'sara.Oops@gmail.com',
    address: 'unknown',
    birthday: '1998/09/11',
    details: 'hotie',
  },
];
// show form
function showForm() {
  $('#form').css('width', '20%');
  $('#form').css('visibility', 'visible');
  $('#form').css('padding', '0 20px');
}
// hide form
function hideForm() {
  $('#form').css('width', '0px');
  $('#form').css('visibility', 'hidden');
  $('#form').css('padding', '0');
}
// toggle form
function toggleForm() {
  const el = $('#form').css('width');
  if (el === '0px') {
    showForm();
  } else {
    hideForm();
  }
}
// on load data
$(document).ready(function() {
  // on submit
  $('#form_contact').on('submit', function(event) {
    event.preventDefault();
    hideForm();
  });
  renderTable();
});
// delete item
function deletItem() {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then(result => {
    if (result.value) {
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    }
  });
}
// render table
function renderTable() {
  contacts.map((contact) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${contact.id}</td>
    <td>${contact.name}</td>
    <td>${contact.surname}</td>
  <td>${contact.phoneNumber}</td>
  <td>${contact.email}</td>
  <td>${contact.address}</td>
  <td>${contact.birthday}</td>
  <td>${contact.details}</td>
  <td> <button type="button" onclick="deletItem()" class="btn btn-danger"><i
  class="fa fa-trash" aria-hidden="true"></i></button>
<button type="button" onclick="toggleForm()" class="btn btn-primary"><i
  class="fa fa-pencil-square" aria-hidden="true"></i></button> </td>`;
    return $('tbody').append(tr);
  });
}
