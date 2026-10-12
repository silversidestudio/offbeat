const menu = document.querySelector('#menu');
const details = document.querySelector('#details');
const toggle = document.querySelector('.menu-toggle');
const content = document.querySelector('#detail-content');
const motionButton = document.querySelector('.motion-toggle');
const recordScene = document.querySelector('.record-scene');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let returnFocus;

function openDialog(dialog) {
  returnFocus = document.activeElement;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}
function closeDialog(dialog) { dialog.close(); }

[menu, details].forEach(dialog => {
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
    returnFocus?.focus({ preventScroll: true });
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog || dialog === menu) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
});
toggle.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'true');
  openDialog(menu);
});
document.querySelector('.menu-close').addEventListener('click', () => closeDialog(menu));
document.querySelector('.detail-close').addEventListener('click', () => closeDialog(details));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeDialog(menu)));

function conceptLink() {
  const link = content.querySelector('[data-concept-link]');
  link?.addEventListener('click', () => closeDialog(details));
}
const sessions = [
  {
    description: 'A late-night journey through deep dub, warm jazz and the records that connect them. The room starts quietly; by the last side, the whole space is listening.',
    place: 'The Old Printworks, Peckham', time: '19:00–23:00',
    atmosphere: 'Walnut speakers, low lamps, and enough room to find your own corner.'
  },
  {
    description: 'A gentle afternoon of ambient textures and soul. Long tracks, soft light and an unhurried change of pace. In the world of Offbeat, Sunday has its own frequency.',
    place: 'The Glasshouse, Hackney', time: '14:00–18:00',
    atmosphere: 'Daylight through the glass, a seat by the plants, a record you haven’t heard before.'
  },
  {
    description: 'Hidden gems, broken rhythms and the kind of B-sides that deserve the whole room. A selector follows the connections between records, rather than a familiar playlist.',
    place: 'Upstairs at No. 9, Brixton', time: '19:00–23:00',
    atmosphere: 'A small upstairs room, a generous sound system, and a few unexpected turns.'
  }
];
document.querySelectorAll('.session').forEach((button, index) => {
  button.addEventListener('click', () => {
    const session = sessions[index];
    content.innerHTML = `
      <span class="eyebrow">THE IMAGINED SEASON / ${button.dataset.date.toUpperCase()}</span>
      <h2 id="detail-title">${button.dataset.session}</h2>
      <p>${session.description}</p>
      <p><strong>${session.place}</strong><br>${session.time} · London time</p>
      <p>${session.atmosphere}</p>
      <div class="dialog-note"><strong>A session in the Offbeat concept.</strong>
      <p>This programme and its venues are fictional, created to explore how an independent music brand could feel online. There are no tickets or bookings.</p></div>
      <a class="solid-button" href="#concept" data-concept-link>THE IDEA BEHIND OFFBEAT ↗</a>`;
    openDialog(details);
    conceptLink();
  });
});

const articles = {
  rooms: {
    title: 'A room can be an instrument.', tag: 'SPACES / FIELD NOTE 001',
    paragraphs: [
      'Before the first record, listen to the room. A wooden floor has a different voice from a concrete wall. Low ceilings hold a conversation close. Glass lets a little of the outside in.',
      'We look for rooms with a history, a little friction, and enough space to sit together. The sound system matters. So does the way the light falls at eight o’clock.',
      'Our imagined printworks session starts quietly. A bass line rolls around the pillars. Somewhere between the second track and the last, an old working room becomes a place to belong.',
      'That is the thought behind Offbeat: let the space shape the selection. A record heard in a room full of people can feel completely different from the same record heard alone. The walls, the pauses, the person beside you — they become part of the arrangement.'
    ]
  },
  records: {
    title: 'The beauty of the B-side.', tag: 'DEEP CUTS / FIELD NOTE 002',
    paragraphs: [
      'Turn the record over. The song you came for is finished, but the story isn’t. On the other side you might find a rougher take, an unlikely collaboration, or something that didn’t quite fit.',
      'That’s the part we love. A listening session isn’t a greatest-hits list. It’s a conversation between records — and sometimes the awkward, overlooked one is what makes it interesting.',
      'A dub version leaves room where a voice used to be. A longer cut gives a rhythm time to settle. A quiet instrumental turns out to be the link between two tracks that seemed to have nothing in common.',
      'Next time you’re digging, give the other side a chance. Surprises sound better when you haven’t asked for them. In the imagined world of Offbeat, curiosity gets the best seat in the room.'
    ]
  }
};
document.querySelectorAll('[data-article]').forEach(button => {
  button.addEventListener('click', () => {
    const article = articles[button.dataset.article];
    content.innerHTML = `<span class="eyebrow">${article.tag}</span>
      <h2 id="detail-title">${article.title}</h2>
      ${article.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
      <p class="article-colophon">From the Offbeat concept journal. Words and spaces imagined for this independent design project.</p>`;
    openDialog(details);
  });
});

document.querySelector('#open-contact').addEventListener('click', () => {
  content.innerHTML = `<span class="eyebrow">GOOD IDEAS START WITH A CONVERSATION.</span>
    <h2 id="detail-title">A different<br>kind of brief.</h2>
    <p>Offbeat is a fictional listening club with a real design ambition: to make the feeling of music visible on a screen.</p>
    <p>The imagined rooms, programme and journal are part of an independent concept by Silverside Web Solutions. This site isn’t an operating club or a booking service.</p>
    <p>Have a music, culture or creative project in mind? Meet the studio behind Offbeat and start a conversation about your own idea.</p>
    <a class="solid-button" href="https://www.silverside.co/">MEET SILVERSIDE WEB SOLUTIONS ↗</a>`;
  openDialog(details);
});

function updateMotion(paused) {
  if (paused) recordScene.style.transform = '';
  document.body.classList.toggle('motion-paused', paused);
  document.documentElement.classList.toggle('motion-paused', paused);
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.setAttribute('aria-label', paused ? 'Resume decorative motion' : 'Pause decorative motion');
  motionButton.textContent = paused ? '▷' : 'Ⅱ';
}
motionButton.addEventListener('click', () => updateMotion(!document.body.classList.contains('motion-paused')));
reduced.addEventListener('change', event => updateMotion(event.matches));
updateMotion(reduced.matches);

if ('IntersectionObserver' in window) {
  if (!reduced.matches) document.body.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
let ticking = false;
addEventListener('scroll', () => {
  if (ticking || reduced.matches || document.body.classList.contains('motion-paused')) return;
  if (scrollY > document.querySelector('.hero').offsetHeight) return;
  ticking = true;
  requestAnimationFrame(() => {
    const distance = Math.min(scrollY * 0.05, innerWidth < 641 ? 18 : 42);
    recordScene.style.transform = `translateY(${distance}px) rotate(${-15 + Math.min(scrollY, 900) * 0.015}deg)`;
    ticking = false;
  });
}, { passive: true });
