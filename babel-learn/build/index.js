"use strict";

function Point(x, y) {
  this.x = x, this.y = y, toString = function toString() {
    console.log(aaa);
  };
}

var p = new Point(1, 2);
console.log(p.toString());