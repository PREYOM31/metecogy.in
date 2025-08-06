
      function makeEmergencyCall() {
        if (confirm("Call emergency number now?")) {
          window.location.href = "tel:+919395996449";
        }
      }
     document.querySelector('.login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const postal = document.getElementById('postal').value;
  const contact = document.getElementById('contact').value;
  const city = document.getElementById('city').value;

  const res = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, postal, contact, city })
  });

  const data = await res.json();
  alert(data.message || data.error);
});

    