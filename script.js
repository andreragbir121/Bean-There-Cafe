const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('main-menu');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));  // tells screen readers
  menu.classList.toggle('open');
});

// Activity 4: Student ID error msg
const studentIdInput = document.getElementById('student-id');
const studentIdError = document.getElementById('student-id-error');

studentIdInput.addEventListener('blur', function () {
  const value = studentIdInput.value.trim();
  
  // Only validate if user typed something (since field is optional)
  if (value.length > 0 && !/^\d{8}$/.test(value)) {
    studentIdError.removeAttribute('hidden');
    studentIdInput.setAttribute('aria-invalid', 'true');
  } else {
    studentIdError.setAttribute('hidden', '');
    studentIdInput.removeAttribute('aria-invalid');
  }
});
