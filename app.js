// Modules
// uiController module , financeController module , appController module
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();

var appController = (function (uiController, financeController) {
  var cntrlAddItem = function () {
    // 1. oruulah ugugdliig delgetsees olj avna
    console.log(uiController.getInput());
    // 2 olj avsan ugugdluudee sanhuugiin kontrollort damjuulan hadgalna
    // 3. olj avsan ugugdluudiig web deeree tohiroh hesegt gargana
    // 4. tusuviin tootsolno
    // etsesiin uldegdlee , tootsoog delgetsend gargana
  };

  // event listeners

  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();

    document
      .querySelector(DOM.addBtn)
      .addEventListener("click", function () {});

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        cntrlAddItem();
      } else {
      }
    });
  };

  return {
    init: function () {
      console.log("application started ....");
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
