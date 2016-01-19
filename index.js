'use strict';

let clock_nodes = document.getElementsByClassName('clock');
Array.prototype.forEach.call(clock_nodes, function(node, index) {
  new Clock(node, node.dataset.timezone).start();
})
