function menuNavMobile() {
  let btn = document.querySelector(".burger");
  let headers = document.querySelector(".header");
  let links = document.querySelectorAll(".navbar a");

  btn.addEventListener("click", () => {
    headers.classList.toggle("show-nav");
  });
  links.forEach((link) => {
    link.addEventListener("click", () => {
      headers.classList.remove("show-nav");
    });
  });
}
menuNavMobile();
function myfilter() {
  const tabs = document.querySelectorAll(".portofolio-filters a");
  const projets = document.querySelectorAll(".portofolio .card");

  const resetActivelinks = () => {
    tabs.forEach((monElement) => {
      monElement.classList.remove("active");
    });
  };

  const showProjet = (monElement) => {
    console.log(monElement);
    projets.forEach((projet) => {
      let filter = projet.getAttribute("data-category");
      if (monElement === "all") {
        projet.parentNode.classList.remove("mynone");
        return;
      }
      if (filter !== monElement) {
        projet.parentNode.classList.add("mynone");
      } else {
        projet.parentNode.classList.remove("mynone");
      }

      console.log(projet);
    });
  };
  tabs.forEach((monElement) => {
    monElement.addEventListener("click", (event) => {
      event.preventDefault();
      let filter = monElement.getAttribute("data-filter");
      console.log(filter);
      showProjet(filter);
      resetActivelinks();
      monElement.classList.add("active");
    });
  });
}
myfilter();

function showProjetLien() {
  const links = document.querySelectorAll(".card_link");
  const modals = document.querySelectorAll(".modal");
  const btns = document.querySelectorAll(".modal__close");
  const hideModals = () => {
    modals.forEach((modal) => {
      modal.classList.remove("show");
    });
  };
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(`[id=${link.dataset.id}]`).classList.add("show");
    });
  });
  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      hideModals();
    });
  });
}
showProjetLien();

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  // Crée le popup si il n'existe pas déjà
  let popup = document.getElementById('popupMessage');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'popupMessage';
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.top = '30%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%,-50%)';
    popup.style.background = '#27ae60'; // vert
    popup.style.color = '#fff';
    popup.style.padding = '2rem 3rem';
    popup.style.borderRadius = '10px';
    popup.style.zIndex = '9999';
    popup.style.textAlign = 'center';
    popup.style.fontWeight = 'bold';
    popup.textContent = 'Merci, votre message a bien été envoyé !';
    document.body.appendChild(popup);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        popup.style.display = 'block';
        form.reset();
        setTimeout(() => {
          popup.style.display = 'none';
        }, 4000);
      } else {
        alert("Une erreur est survenue. Merci de réessayer.");
      }
    }).catch(() => {
      alert("Une erreur est survenue. Merci de réessayer.");
    });
  });
});

