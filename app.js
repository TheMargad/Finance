// Modules
// uiController module , financeController module , appController module
var uiController = (function () {})();

var financeController = (function () {})();

var appController = (function (uiController, financeController) {
  var cntrlAddItem = function () {
    // 1. oruulah ugugdliig delgetsees olj avna
    console.log("delgetsenees ugugdul avah heseg");
    // 2 olj avsan ugugdluudee sanhuugiin kontrollort damjuulan hadgalna
    // 3. olj avsan ugugdluudiig web deeree tohiroh hesegt gargana
    // 4. tusuviin tootsolno
    // etsesiin uldegdlee , tootsoog delgetsend gargana
  };

  document.querySelector(".add__btn").addEventListener("click", function () {});
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      cntrlAddItem();
    } else {
    }
  });
})(uiController, financeController);
