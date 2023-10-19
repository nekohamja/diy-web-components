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
      <div class="carousel-item"></div>
      <div class="carousel-item"></div>
      <div class="carousel-item"></div>
      <div class="carousel-item"></div>`;
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
        { threshold: 1 }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGl5LXdlYi1jb21wb25lbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RpeS13ZWItY29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGl5LXdlYi1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGl5LXdlYi1jb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGl5LXdlYi1jb21wb25lbnRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50cyB7XG4gIHN0YXRpYyBsb2FkQ29tcG9uZW50cygpIHtcbiAgICAvLyBpbXBsZW1lbnQgaW50ZXJzZWN0aW9uIG9ic2VydmVyIG9uIHdob2xlIGdyaWQgKyBhbmltYXRpb25cbiAgICBDb21wb25lbnRzLmRyb3BEb3duTWVudSgpO1xuICAgIENvbXBvbmVudHMubW9iaWxlTmF2QmFyKCk7XG4gICAgQ29tcG9uZW50cy5jYXJvdXNlbCgpO1xuXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lcj5zZWN0aW9uXCIpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB7IHRocmVzaG9sZDogMC41IH1cbiAgICApO1xuICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZHJvcERvd25NZW51KCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW1lbnVcIik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWNvbnRhaW5lclwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duXCIpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tY29udGVudFwiKTtcblxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgPGlvbi1pY29uIG5hbWU9XCJlbGxpcHNpcy12ZXJ0aWNhbFwiPjwvaW9uLWljb24+YDtcbiAgICBuYXYuaW5uZXJIVE1MID0gYFxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJwZW5jaWwtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPHA+RWRpdDwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiZHVwbGljYXRlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxwPkR1cGxpY2F0ZTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwic2hhcmUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPHA+U2hhcmU8L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImFyY2hpdmUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPHA+QXJjaGl2ZTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwidHJhc2gtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPHA+RGVsZXRlPC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5gO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgbW9iaWxlTmF2QmFyKCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXYtYmFyXCIpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW5hdi1jb250YWluZXJcIik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbmF2XCIpO1xuICAgIG5hdi5pbm5lckhUTUwgPSBgXG4gICAgPGxpIGNsYXNzPVwiYWN0aXZlXCIgbW9iaWxlLW5hdi1idXR0b24+XG4gICAgICA8aW9uLWljb24gbmFtZT1cImJhZy1oYW5kbGVcIj48L2lvbi1pY29uPlxuICAgICAgPHA+U2hvcDwvcD5cbiAgICA8L2xpPlxuICAgIDxsaSBtb2JpbGUtbmF2LWJ1dHRvbj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwic2VhcmNoXCI+PC9pb24taWNvbj5cbiAgICAgIDxwPlNlYXJjaDwvcD5cbiAgICA8L2xpPlxuICAgIDxsaSBtb2JpbGUtbmF2LWJ1dHRvbj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwiY2FydFwiPjwvaW9uLWljb24+XG4gICAgICA8cD5DYXJ0PC9wPlxuICAgIDwvbGk+XG4gICAgPGxpIG1vYmlsZS1uYXYtYnV0dG9uPlxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJwZXJzb25cIj48L2lvbi1pY29uPlxuICAgICAgPHA+UHJvZmlsZTwvcD5cbiAgICA8L2xpPmA7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHIpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW21vYmlsZS1uYXYtYnV0dG9uXVwiKTtcbiAgICBuYXZCdXR0b25zLmZvckVhY2goKG5hdkJ1dHRvbikgPT4ge1xuICAgICAgbmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVVSSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gaGFuZGxlVUkoKSB7XG4gICAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIlttb2JpbGUtbmF2LWJ1dHRvbl1cIik7XG4gICAgICBuYXZCdXR0b25zLmZvckVhY2goKG5hdkJ1dHRvbikgPT4ge1xuICAgICAgICBuYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgaWYgKG5hdkJ1dHRvbiA9PT0gdGhpcykgbmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2Fyb3VzZWwoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWxcIik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJ1dHRvbkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ1dHRvblJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1jb250YWluZXJcIik7XG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1zbGlkZXJcIik7XG4gICAgYnV0dG9uTGVmdC5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtYnV0dG9uLWxlZnRcIik7XG4gICAgYnV0dG9uUmlnaHQuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWJ1dHRvbi1yaWdodFwiKTtcbiAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWluZGljYXRvclwiKTtcblxuICAgIGJ1dHRvbkxlZnQuaW5uZXJIVE1MID0gYDxpb24taWNvbiBuYW1lPVwiY2hldnJvbi1iYWNrXCI+PC9pb24taWNvbj5gO1xuICAgIGJ1dHRvblJpZ2h0LmlubmVySFRNTCA9IGAgPGlvbi1pY29uIG5hbWU9XCJjaGV2cm9uLWZvcndhcmRcIj48L2lvbi1pY29uPmA7XG4gICAgc2xpZGVyLmlubmVySFRNTCA9IGAgICAgICAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj48L2Rpdj5gO1xuICAgIGluZGljYXRvci5pbm5lckhUTUwgPSBgIFxuICAgIDxkaXYgY2xhc3M9XCJpbmRpY2F0b3JcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZGljYXRvclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmRpY2F0b3JcIj48L2Rpdj5gO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkxlZnQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25SaWdodCk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKTtcblxuICAgIC8vIGFkZCBtb3VzZSBldmVudCB0byBwcmV2ZW50IGRyYWcgY29uZmxpY3RcbiAgICBjb25zdCBzbGlkZXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2Fyb3VzZWwtaXRlbVwiKTtcbiAgICBoYW5kbGVVSSgpO1xuICAgIGJ1dHRvbkxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNsaWRlci5zY3JvbGxMZWZ0ID0gc2xpZGVyLnNjcm9sbExlZnQgLSBzbGlkZXJJdGVtc1swXS5vZmZzZXRXaWR0aDtcbiAgICAgIGhhbmRsZVVJKCk7XG4gICAgfSk7XG4gICAgYnV0dG9uUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNsaWRlci5zY3JvbGxMZWZ0ID0gc2xpZGVyLnNjcm9sbExlZnQgKyBzbGlkZXJJdGVtc1swXS5vZmZzZXRXaWR0aDtcbiAgICAgIGhhbmRsZVVJKCk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gaGFuZGxlVUkoKSB7XG4gICAgICBjb25zdCBpbmRpY2F0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbmRpY2F0b3JcIik7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgICAgICAgICBpbmRpY2F0b3JzLmZvckVhY2goKGluZGljYXRvcikgPT4ge1xuICAgICAgICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2xpZGVySXRlbXMuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgaW5kaWNhdG9yc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHsgdGhyZXNob2xkOiAxIH1cbiAgICAgICk7XG5cbiAgICAgIHNsaWRlckl0ZW1zLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjYXJkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzaWRlQmFyKCkge1xuICAgIC8vIGFkZCBoYW1idXJnZXIgaWNvbiBhbmltYXRpb24gKD0gdG8geClcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBDb21wb25lbnRzLmxvYWRDb21wb25lbnRzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==