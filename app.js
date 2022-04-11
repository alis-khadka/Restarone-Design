$(document).ready(() => {
  $('button.navbar-toggler').on('click', () => {
    $('a.navbar-brand').toggleClass('navbar-brand-centered');
  });

  $('.chatbot-btn').on('click', () => {
    $('.chatbot-container').toggleClass('chatbot-clicked');
  });
});
