"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var t = e(require("react"));
!(function (e, t) {
  void 0 === t && (t = {});
  var n = t.insertAt;
  if (e && "undefined" != typeof document) {
    var o = document.head || document.getElementsByTagName("head")[0],
      c = document.createElement("style");
    (c.type = "text/css"),
      "top" === n && o.firstChild
        ? o.insertBefore(c, o.firstChild)
        : o.appendChild(c),
      c.styleSheet
        ? (c.styleSheet.cssText = e)
        : c.appendChild(document.createTextNode(e));
  }
})(
  ".test-component {\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n  color: gray;\n}\n.test-component .heading {\n  font-size: 64px;\n}\n.test-component.test-component-secondary {\n  background-color: black;\n  color: white;\n}"
);
module.exports = function (e) {
  var n = e.theme,
    o = e.children;
  return t.default.createElement(
    "div",
    {
      "data-testid": "test-component",
      className: "test-component test-component-".concat(n),
    },
    t.default.createElement(
      "h1",
      { className: "heading" },
      "I'm the test component"
    ),
    t.default.createElement("h2", null, "Made with love by Harvey"),
    o
  );
};
