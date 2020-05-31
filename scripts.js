/* eslint-disable*/
// show form
function showForm() {
  $('#form').css('width', '20%');
  $('#form').css('visibility', 'visible');
}
// hide form
function hideForm() {
  $('#form').css('width', '0px');
  $('#form').css('visibility', 'hidden');
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
$(document).onLoad(
  document
    .getElementById('form_contact')
    .addEventListener('submit', function(event) {
      event.preventDefault();
      hideForm();
    })
);
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
