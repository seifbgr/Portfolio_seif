(function ($) {
  "use strict";

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $(".social-links a").tooltip();
})(jQuery);

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_ves2x5j", "template_h38ey4d", params)
    .then(() => {
      alert("Email envoyé avec succès !");
    })
    .catch((error) => {
      alert("Erreur lors de l'envoi de l'email : " + error);
    });
}

function openModal(modalId) {
  // Afficher la modale
  document.getElementById(modalId).style.display = "block";

  // Démarrer la vidéo automatiquement
  const video = document.querySelector(`#${modalId} video`);
  if (video) {
      video.play();
  }
}

function closeModal(modalId) {
  // Masquer la modale
  document.getElementById(modalId).style.display = "none";

  // Mettre la vidéo en pause
  const video = document.querySelector(`#${modalId} video`);
  if (video) {
      video.pause();
  }
}