export default class Components {
  static loadComponents() {
    Components.dropDownMenu();
    Components.mobileNavBar();
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
}

document.addEventListener("DOMContentLoaded", Components.loadComponents);

// try to implement masonry grid API?
