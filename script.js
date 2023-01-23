// ContactForm

((d) => {
  const $form = d.querySelector('.form'),
    $response = d.querySelector('.contact-form-response');

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('https://formsubmit.co/ajax/moleradani@gmail.com', {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = '#gracias';
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText || 'Ha ocurrido un error';
        $response.querySelector(
          'h3'
        ).innerHTML = `Error ${err.status}:${message}`;
      })
      .finally(() => {
        setTimeout(() => {
          location.hash = '#contact';
        }, 3000);
      });
  });
})(document);
