// // Menu

((d) => {
  const $btnMenu = d.querySelector('.btn-menu'),
    $menu = d.querySelector('.menu'),
    $firstLine = d.querySelector('.btn-menu div:first-child'),
    $middleLine = d.querySelector('div:nth-child(2)'),
    $thirdLine = d.querySelector('div:last-child');

  $btnMenu.addEventListener('click', (e) => {
    $menu.classList.toggle('is-active');
    $firstLine.classList.toggle('activeFL');
    $middleLine.classList.toggle('activeML');
    $thirdLine.classList.toggle('activeTL');
  });

  d.addEventListener('click', (e) => {
    if (!e.target.matches('.menu a')) return false;
    $menu.classList.remove('is-active');
    $firstLine.classList.remove('activeFL');
    $middleLine.classList.remove('activeML');
    $thirdLine.classList.remove('activeTL');
  });
})(document);
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
