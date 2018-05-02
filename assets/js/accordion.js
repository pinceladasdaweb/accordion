/*---------------
* Accordion
* Simple Accordion done in Vanilla JS
* Example and documentation at: https://github.com/pinceladasdaweb/accordion
* Copyright (c) 2013
* Version: 1.0.0 (27-JUN-2013)
* Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
---------------*/
window.onload = function () {
    let acc = document.getElementsByClassName("js-accordion");

    for(let i = 0; i < acc.length; i++) {
      let titles = acc[i].getElementsByTagName("h2");

      for (let j = 0; j < titles.length; j++) {
          let title = titles[j];

          title.setAttribute("class", "toggle");
          title.nextElementSibling.setAttribute("class", "closed");

          title.onclick = function () {
              let cur = this;

              if (cur.getAttribute("class") == "toggle") {
                cur.setAttribute("class", "toggle-active");
                cur.nextElementSibling.setAttribute("class", "");
              }
              else {
                cur.setAttribute("class", "toggle");
                cur.nextElementSibling.setAttribute("class", "closed");
              }
          }
      }

    }
}
