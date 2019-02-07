// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(document).scrollTop() > 50) {
//       $('.slideleft').addClass('moveleft');
//     } else {
//       $('.slideleft').removeClass('moveleft');
//     }
//   });
// });

// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(document).scrollTop() > 50) {
//       $('.slideright').addClass('moveright');
//     } else {
//       $('.slideright').removeClass('moveright');
//     }
//   });
// });

window.sr = ScrollReveal();

// sr.reveal('.maintitle', {
//   duration: 2000,
//   origin: 'top',
//   distance: '300px'
// });

sr.reveal('.slideright', {
  duration: 2500,
  origin: 'right',
  distance: '300px',
  viewFactor: 0.8
});

// sr.reveal('.slideright', {
//       duration: 2000,
//       origin: 'bottom',

//     });

sr.reveal('.slideleft', {
  duration: 2500,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.8
});

// scale up

ScrollReveal().reveal('.maintitle', {
  scale: 0.4,
  duration: 2500,
  viewFactor: 1
});

// opacity 0 to 1 on scroll
// ScrollReveal().reveal('.maintitle', {
//   distance: '0px',
//   opacity: 0,
//   duration: 2500,
//   viewFactor: 1
// });

sr.reveal('.slidebottom', {
  duration: 2000,
  delay: 2000,
  origin: 'bottom',
  distance: '20px'
});
