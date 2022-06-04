import './elements.ts'

window.addEventListener('load', () => {
  const form = document.forms[0];
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    fetch('api/email', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then(({ message }) => {
      alert(message);
      form.reset();
    });
  });
})
