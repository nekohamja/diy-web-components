export default class Components {
  static loadComponents() {
    // implement intersection observer on whole grid + animation
    Components.dropDownMenu();
    Components.mobileNavBar();
    Components.carousel();

    const sections = document.querySelectorAll(".container>section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  static dropDownMenu() {
    const section = document.querySelector(".dropdown-menu");
    const container = document.createElement("div");
    const button = document.createElement("button");
    const nav = document.createElement("nav");

    container.classList.add("dropdown-container");
    button.classList.add("dropdown");
    nav.classList.add("dropdown-content");

    button.innerHTML = `<ion-icon name="ellipsis-vertical"></ion-icon>`;
    nav.innerHTML = `
      <ul>
        <li>
          <ion-icon name="pencil-outline"></ion-icon>
          <p>Edit</p>
        </li>
        <li>
          <ion-icon name="duplicate-outline"></ion-icon>
          <p>Duplicate</p>
        </li>
        <li>
          <ion-icon name="share-outline"></ion-icon>
          <p>Share</p>
        </li>
        <li>
          <ion-icon name="archive-outline"></ion-icon>
          <p>Archive</p>
        </li>
        <li>
          <ion-icon name="trash-outline"></ion-icon>
          <p>Delete</p>
        </li>
      </ul>`;

    container.appendChild(button);
    container.appendChild(nav);
    section.appendChild(container);

    document.querySelector(".dropdown").addEventListener("click", () => {
      button.classList.toggle("active");
    });
  }

  static mobileNavBar() {
    const section = document.querySelector(".mobile-nav-bar");
    const container = document.createElement("div");
    const nav = document.createElement("nav");
    const hr = document.createElement("hr");

    container.classList.add("mobile-nav-container");
    nav.classList.add("mobile-nav");
    nav.innerHTML = `
    <li class="active" mobile-nav-button>
      <ion-icon name="bag-handle"></ion-icon>
      <p>Shop</p>
    </li>
    <li mobile-nav-button>
      <ion-icon name="search"></ion-icon>
      <p>Search</p>
    </li>
    <li mobile-nav-button>
      <ion-icon name="cart"></ion-icon>
      <p>Cart</p>
    </li>
    <li mobile-nav-button>
      <ion-icon name="person"></ion-icon>
      <p>Profile</p>
    </li>`;

    container.appendChild(nav);
    container.appendChild(hr);
    section.appendChild(container);

    const navButtons = document.querySelectorAll("[mobile-nav-button]");
    navButtons.forEach((navButton) => {
      navButton.addEventListener("click", handleUI);
    });
    function handleUI() {
      const navButtons = document.querySelectorAll("[mobile-nav-button]");
      navButtons.forEach((navButton) => {
        navButton.classList.remove("active");
        if (navButton === this) navButton.classList.add("active");
      });
    }
  }

  static carousel() {
    const section = document.querySelector(".carousel");
    const container = document.createElement("div");
    const slider = document.createElement("div");
    const buttonLeft = document.createElement("button");
    const buttonRight = document.createElement("button");
    const indicator = document.createElement("div");

    container.classList.add("carousel-container");
    slider.classList.add("carousel-slider");
    buttonLeft.classList.add("carousel-button-left");
    buttonRight.classList.add("carousel-button-right");
    indicator.classList.add("carousel-indicator");

    buttonLeft.innerHTML = `<ion-icon name="chevron-back"></ion-icon>`;
    buttonRight.innerHTML = ` <ion-icon name="chevron-forward"></ion-icon>`;
    slider.innerHTML = `           
      <div class="carousel-item">
        <div>
          <div>
            <p class="carousel-title">Court Legacy Lift</p>
            <p class="carousel-description">Women's Shoes</p>
          </div>
          <p class="carousel-amount"><b>$120</b></p>
        </div>
      </div>

      <div class="carousel-item">
        <div>
          <div>
            <p class="carousel-title">Court Legacy Lift</p>
            <p class="carousel-description">Women's Shoes</p>
          </div>
          <p class="carousel-amount"><b>$120</b></p>
        </div>
      </div>

      <div class="carousel-item">
        <div></div>
      </div>

      <div class="carousel-item">
        <div></div>
      </div>`;

    indicator.innerHTML = ` 
    <div class="indicator"></div>
    <div class="indicator"></div>
    <div class="indicator"></div>
    <div class="indicator"></div>`;

    container.appendChild(buttonLeft);
    container.appendChild(slider);
    container.appendChild(buttonRight);
    section.appendChild(container);
    section.appendChild(indicator);

    // add mouse event to prevent drag conflict
    const sliderItems = document.querySelectorAll(".carousel-item");
    handleUI();
    buttonLeft.addEventListener("click", () => {
      slider.scrollLeft = slider.scrollLeft - sliderItems[0].offsetWidth;
      handleUI();
    });
    buttonRight.addEventListener("click", () => {
      slider.scrollLeft = slider.scrollLeft + sliderItems[0].offsetWidth;
      handleUI();
    });
    function handleUI() {
      const indicators = document.querySelectorAll(".indicator");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle("active", entry.isIntersecting);
            indicators.forEach((indicator) => {
              indicator.classList.remove("active");
            });
            sliderItems.forEach((card, index) => {
              if (card.classList.contains("active")) {
                indicators[index].classList.add("active");
              }
            });
          });
        },
        { threshold: 0.7 }
      );

      sliderItems.forEach((card) => {
        observer.observe(card);
      });
    }
  }

  static sideBar() {
    // add hamburger icon animation (= to x)
  }
}

document.addEventListener("DOMContentLoaded", Components.loadComponents);
