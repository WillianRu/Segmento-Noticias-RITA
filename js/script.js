document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = encodeURIComponent(window.location.href);

  // Facebook
  document.getElementById("facebook").addEventListener("click", function () {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    window.open(url, "_blank");
  });

  // Twitter
  document.getElementById("twitter").addEventListener("click", function () {
    const url = `https://twitter.com/intent/tweet?url=${currentUrl}`;
    window.open(url, "_blank");
  });

  // LinkedIn
  document.getElementById("linkedin").addEventListener("click", function () {
    const url = `https://www.linkedin.com/shareArticle?url=${currentUrl}`;
    window.open(url, "_blank");
  });

  // WhatsApp
  document.getElementById("whatsapp").addEventListener("click", function () {
    const url = `https://api.whatsapp.com/send?text=${currentUrl}`;
    window.open(url, "_blank");
  });

  // Copiar link
  document.getElementById("copiarLink").addEventListener("click", function () {
    navigator.clipboard
      .writeText(currentUrl)
      .then(function () {
        alert("Enlace copiado");
      })
      .catch(function () {
        alert("No se pudo copiar el enlace al portapapeles");
      });
  });
});
