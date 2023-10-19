/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Components)
/* harmony export */ });
class Components {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXktd2ViLWNvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGl5LXdlYi1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kaXktd2ViLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kaXktd2ViLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kaXktd2ViLWNvbXBvbmVudHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRzIHtcbiAgc3RhdGljIGxvYWRDb21wb25lbnRzKCkge1xuICAgIC8vIGltcGxlbWVudCBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXIgb24gd2hvbGUgZ3JpZCArIGFuaW1hdGlvblxuICAgIENvbXBvbmVudHMuZHJvcERvd25NZW51KCk7XG4gICAgQ29tcG9uZW50cy5tb2JpbGVOYXZCYXIoKTtcbiAgICBDb21wb25lbnRzLmNhcm91c2VsKCk7XG5cbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGFpbmVyPnNlY3Rpb25cIik7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIiwgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHsgdGhyZXNob2xkOiAwLjUgfVxuICAgICk7XG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkcm9wRG93bk1lbnUoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbWVudVwiKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tY29udGFpbmVyXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25cIik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1jb250ZW50XCIpO1xuXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IGA8aW9uLWljb24gbmFtZT1cImVsbGlwc2lzLXZlcnRpY2FsXCI+PC9pb24taWNvbj5gO1xuICAgIG5hdi5pbm5lckhUTUwgPSBgXG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlbmNpbC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8cD5FZGl0PC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJkdXBsaWNhdGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPHA+RHVwbGljYXRlPC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJzaGFyZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8cD5TaGFyZTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYXJjaGl2ZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8cD5BcmNoaXZlPC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJ0cmFzaC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8cD5EZWxldGU8L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPmA7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBtb2JpbGVOYXZCYXIoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW5hdi1iYXJcIik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbmF2LWNvbnRhaW5lclwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1uYXZcIik7XG4gICAgbmF2LmlubmVySFRNTCA9IGBcbiAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIiBtb2JpbGUtbmF2LWJ1dHRvbj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwiYmFnLWhhbmRsZVwiPjwvaW9uLWljb24+XG4gICAgICA8cD5TaG9wPC9wPlxuICAgIDwvbGk+XG4gICAgPGxpIG1vYmlsZS1uYXYtYnV0dG9uPlxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJzZWFyY2hcIj48L2lvbi1pY29uPlxuICAgICAgPHA+U2VhcmNoPC9wPlxuICAgIDwvbGk+XG4gICAgPGxpIG1vYmlsZS1uYXYtYnV0dG9uPlxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJjYXJ0XCI+PC9pb24taWNvbj5cbiAgICAgIDxwPkNhcnQ8L3A+XG4gICAgPC9saT5cbiAgICA8bGkgbW9iaWxlLW5hdi1idXR0b24+XG4gICAgICA8aW9uLWljb24gbmFtZT1cInBlcnNvblwiPjwvaW9uLWljb24+XG4gICAgICA8cD5Qcm9maWxlPC9wPlxuICAgIDwvbGk+YDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChocik7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbW9iaWxlLW5hdi1idXR0b25dXCIpO1xuICAgIG5hdkJ1dHRvbnMuZm9yRWFjaCgobmF2QnV0dG9uKSA9PiB7XG4gICAgICBuYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVVJKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBoYW5kbGVVSSgpIHtcbiAgICAgIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW21vYmlsZS1uYXYtYnV0dG9uXVwiKTtcbiAgICAgIG5hdkJ1dHRvbnMuZm9yRWFjaCgobmF2QnV0dG9uKSA9PiB7XG4gICAgICAgIG5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBpZiAobmF2QnV0dG9uID09PSB0aGlzKSBuYXZCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjYXJvdXNlbCgpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbFwiKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYnV0dG9uTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgYnV0dG9uUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWNvbnRhaW5lclwiKTtcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLXNsaWRlclwiKTtcbiAgICBidXR0b25MZWZ0LmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1idXR0b24tbGVmdFwiKTtcbiAgICBidXR0b25SaWdodC5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtYnV0dG9uLXJpZ2h0XCIpO1xuICAgIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtaW5kaWNhdG9yXCIpO1xuXG4gICAgYnV0dG9uTGVmdC5pbm5lckhUTUwgPSBgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWJhY2tcIj48L2lvbi1pY29uPmA7XG4gICAgYnV0dG9uUmlnaHQuaW5uZXJIVE1MID0gYCA8aW9uLWljb24gbmFtZT1cImNoZXZyb24tZm9yd2FyZFwiPjwvaW9uLWljb24+YDtcbiAgICBzbGlkZXIuaW5uZXJIVE1MID0gYCAgICAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcm91c2VsLXRpdGxlXCI+Q291cnQgTGVnYWN5IExpZnQ8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcm91c2VsLWRlc2NyaXB0aW9uXCI+V29tZW4ncyBTaG9lczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImNhcm91c2VsLWFtb3VudFwiPjxiPiQxMjA8L2I+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcm91c2VsLXRpdGxlXCI+Q291cnQgTGVnYWN5IExpZnQ8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcm91c2VsLWRlc2NyaXB0aW9uXCI+V29tZW4ncyBTaG9lczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImNhcm91c2VsLWFtb3VudFwiPjxiPiQxMjA8L2I+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuXG4gICAgaW5kaWNhdG9yLmlubmVySFRNTCA9IGAgXG4gICAgPGRpdiBjbGFzcz1cImluZGljYXRvclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmRpY2F0b3JcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZGljYXRvclwiPjwvZGl2PmA7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uTGVmdCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvblJpZ2h0KTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChpbmRpY2F0b3IpO1xuXG4gICAgLy8gYWRkIG1vdXNlIGV2ZW50IHRvIHByZXZlbnQgZHJhZyBjb25mbGljdFxuICAgIGNvbnN0IHNsaWRlckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJvdXNlbC1pdGVtXCIpO1xuICAgIGhhbmRsZVVJKCk7XG4gICAgYnV0dG9uTGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2xpZGVyLnNjcm9sbExlZnQgPSBzbGlkZXIuc2Nyb2xsTGVmdCAtIHNsaWRlckl0ZW1zWzBdLm9mZnNldFdpZHRoO1xuICAgICAgaGFuZGxlVUkoKTtcbiAgICB9KTtcbiAgICBidXR0b25SaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2xpZGVyLnNjcm9sbExlZnQgPSBzbGlkZXIuc2Nyb2xsTGVmdCArIHNsaWRlckl0ZW1zWzBdLm9mZnNldFdpZHRoO1xuICAgICAgaGFuZGxlVUkoKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBoYW5kbGVVSSgpIHtcbiAgICAgIGNvbnN0IGluZGljYXRvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluZGljYXRvclwiKTtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICAoZW50cmllcykgPT4ge1xuICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICAgICAgICAgIGluZGljYXRvcnMuZm9yRWFjaCgoaW5kaWNhdG9yKSA9PiB7XG4gICAgICAgICAgICAgIGluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzbGlkZXJJdGVtcy5mb3JFYWNoKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgeyB0aHJlc2hvbGQ6IDAuNyB9XG4gICAgICApO1xuXG4gICAgICBzbGlkZXJJdGVtcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FyZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgc2lkZUJhcigpIHtcbiAgICAvLyBhZGQgaGFtYnVyZ2VyIGljb24gYW5pbWF0aW9uICg9IHRvIHgpXG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgQ29tcG9uZW50cy5sb2FkQ29tcG9uZW50cyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=