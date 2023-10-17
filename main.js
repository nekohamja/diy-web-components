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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RpeS13ZWItY29tcG9uZW50cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kaXktd2ViLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RpeS13ZWItY29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RpeS13ZWItY29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RpeS13ZWItY29tcG9uZW50cy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudHMge1xuICBzdGF0aWMgbG9hZENvbXBvbmVudHMoKSB7XG4gICAgQ29tcG9uZW50cy5kcm9wRG93bk1lbnUoKTtcbiAgICBDb21wb25lbnRzLm1vYmlsZU5hdkJhcigpO1xuICB9XG5cbiAgc3RhdGljIGRyb3BEb3duTWVudSgpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1tZW51XCIpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1jb250YWluZXJcIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93blwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWNvbnRlbnRcIik7XG5cbiAgICBidXR0b24uaW5uZXJIVE1MID0gYDxpb24taWNvbiBuYW1lPVwiZWxsaXBzaXMtdmVydGljYWxcIj48L2lvbi1pY29uPmA7XG4gICAgbmF2LmlubmVySFRNTCA9IGBcbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwicGVuY2lsLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxwPkVkaXQ8L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImR1cGxpY2F0ZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8cD5EdXBsaWNhdGU8L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInNoYXJlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxwPlNoYXJlPC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhcmNoaXZlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxwPkFyY2hpdmU8L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInRyYXNoLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxwPkRlbGV0ZTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+YDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG1vYmlsZU5hdkJhcigpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2LWJhclwiKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1uYXYtY29udGFpbmVyXCIpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW5hdlwiKTtcbiAgICBuYXYuaW5uZXJIVE1MID0gYFxuICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiIG1vYmlsZS1uYXYtYnV0dG9uPlxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJiYWctaGFuZGxlXCI+PC9pb24taWNvbj5cbiAgICAgIDxwPlNob3A8L3A+XG4gICAgPC9saT5cbiAgICA8bGkgbW9iaWxlLW5hdi1idXR0b24+XG4gICAgICA8aW9uLWljb24gbmFtZT1cInNlYXJjaFwiPjwvaW9uLWljb24+XG4gICAgICA8cD5TZWFyY2g8L3A+XG4gICAgPC9saT5cbiAgICA8bGkgbW9iaWxlLW5hdi1idXR0b24+XG4gICAgICA8aW9uLWljb24gbmFtZT1cImNhcnRcIj48L2lvbi1pY29uPlxuICAgICAgPHA+Q2FydDwvcD5cbiAgICA8L2xpPlxuICAgIDxsaSBtb2JpbGUtbmF2LWJ1dHRvbj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwicGVyc29uXCI+PC9pb24taWNvbj5cbiAgICAgIDxwPlByb2ZpbGU8L3A+XG4gICAgPC9saT5gO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhyKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIlttb2JpbGUtbmF2LWJ1dHRvbl1cIik7XG4gICAgbmF2QnV0dG9ucy5mb3JFYWNoKChuYXZCdXR0b24pID0+IHtcbiAgICAgIG5hdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVUkpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVVJKCkge1xuICAgICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbW9iaWxlLW5hdi1idXR0b25dXCIpO1xuICAgICAgbmF2QnV0dG9ucy5mb3JFYWNoKChuYXZCdXR0b24pID0+IHtcbiAgICAgICAgbmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmIChuYXZCdXR0b24gPT09IHRoaXMpIG5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIENvbXBvbmVudHMubG9hZENvbXBvbmVudHMpO1xuXG4vLyB0cnkgdG8gaW1wbGVtZW50IG1hc29ucnkgZ3JpZCBBUEk/XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=