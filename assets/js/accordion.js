/*---------------
* Accordion
* Simple Accordion done in Vanilla JS
* Example and documentation at: https://github.com/pinceladasdaweb/accordion
* Copyright (c) 2013
* Version: 1.0.0 (27-JUN-2013)
* Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
---------------*/
window.onload = function () {
    var acc = document.getElementById("accordion"),
        h2El = acc.getElementsByTagName("h2"),
        size = h2El.length, i, h2Node;

    for (i = 0; i < size; i++) {
        h2Node = h2El[i];

        h2Node.setAttribute("class", "toggle");
        h2Node.nextElementSibling.setAttribute("class", "closed");

        h2Node.onclick = function () {
            var h2 = this;

            if (h2.getAttribute("class") == "toggle") {
                h2.setAttribute("class", "toggle-active");
                h2.nextElementSibling.setAttribute("class", "");
            }
            else {
                h2.setAttribute("class", "toggle");
                h2.nextElementSibling.setAttribute("class", "closed");
            }
        }
    }
}