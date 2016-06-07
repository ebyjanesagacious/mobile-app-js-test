'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "paradite",
      "pasdite"
    ],
    "DAY": [
      "e diel",
      "e h\u00ebn\u00eb",
      "e mart\u00eb",
      "e m\u00ebrkur\u00eb",
      "e enjte",
      "e premte",
      "e shtun\u00eb"
    ],
    "ERANAMES": [
      "para er\u00ebs s\u00eb re",
      "er\u00ebs s\u00eb re"
    ],
    "ERAS": [
      "p.e.r.",
      "e.r."
    ],
    "MONTH": [
      "janar",
      "shkurt",
      "mars",
      "prill",
      "maj",
      "qershor",
      "korrik",
      "gusht",
      "shtator",
      "tetor",
      "n\u00ebntor",
      "dhjetor"
    ],
    "SHORTDAY": [
      "Die",
      "H\u00ebn",
      "Mar",
      "M\u00ebr",
      "Enj",
      "Pre",
      "Sht"
    ],
    "SHORTMONTH": [
      "Jan",
      "Shk",
      "Mar",
      "Pri",
      "Maj",
      "Qer",
      "Kor",
      "Gsh",
      "Sht",
      "Tet",
      "N\u00ebn",
      "Dhj"
    ],
    "fullDate": "EEEE, d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "d.M.yy HH:mm",
    "shortDate": "d.M.yy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "din",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": "\u00a0",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "sq-mk",
  "pluralCat": function(n, opt_precision) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
