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
