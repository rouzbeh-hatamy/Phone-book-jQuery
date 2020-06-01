// render table
function renderTable() {
  const contacts = JSON.parse(localStorage.getItem('contacts'));
  if (!contacts) {
    localStorage.setItem('contacts', JSON.stringify([]));
    return;
  }
  contacts.map(contact => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${contact.id}</td>
    <td>${contact.name}</td>
    <td>${contact.surname}</td>
    <td>${contact.phoneNumber}</td>
    <td>${contact.email}</td>
    <td>${contact.address}</td>
    <td>${contact.birthday}</td>
    <td>${contact.details}</td>
    <td> 
    <button type="button" 
    onclick="deletItem(${contact.id})" class="btn btn-danger"><i
  class="fa fa-trash" aria-hidden="true"></i></button>
<button type="button" onclick="toggleForm()" class="btn btn-primary"><i
  class="fa fa-pencil-square" aria-hidden="true"></i></button> </td>`;
    return $('tbody').append(tr);
  });
}

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
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    const newContactData = new FormData(event.target).entries();
    const newContact = Object.fromEntries(newContactData);
    if (newContact.id === '') {
      Swal.fire({
        icon: 'error',
        title: 'Empty contact can not be added',
      });
      return;
    }
    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    $('tbody').html('');
    renderTable();
    hideForm();
  });
  renderTable();
});
// delete item
function deleteContact(id) {
  let contacts = JSON.parse(localStorage.getItem('contacts'));
  contacts = contacts.filter(item => item.id != id);
  localStorage.setItem('contacts', JSON.stringify(contacts));
  $('tbody').html('');
  renderTable();
}
function deletItem(id) {
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
      deleteContact(id);
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    }
  });
}
