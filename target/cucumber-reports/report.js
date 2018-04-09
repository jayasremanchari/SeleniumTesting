$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BookFlight.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Booking Action",
  "description": "Description: This feature will select the flight based on the search results.",
  "id": "flight-booking-action",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11811706301,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User navigates to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters valid credentials",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the User enters the search Criteria",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "available flight status displayed Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 12640937250,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 1851591342,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_User_enters_the_search_Criteria()"
});
formatter.result({
  "duration": 15486937159,
  "status": "passed"
});
formatter.match({
  "location": "Steps.available_flight_status_displayed_Successfully()"
});
formatter.result({
  "duration": 4857420289,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Select the flight to book",
  "description": "",
  "id": "flight-booking-action;select-the-flight-to-book",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@BookTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the User selects the flight",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Flight Details Page Displayed Successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_User_selects_the_flight()"
});
formatter.result({
  "duration": 9374174455,
  "status": "passed"
});
formatter.match({
  "location": "Steps.flight_Details_Page_Displayed_Successfully()"
});
formatter.result({
  "duration": 6724835055,
  "status": "passed"
});
formatter.after({
  "duration": 267819279,
  "status": "passed"
});
formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "Description: This feature will test the LogIn functionality",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User navigates to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters credentials\"\u003cusername\u003e\"\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Login Successfull",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "login-action;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "fiyazhbasha@gmail.com",
        "Allah@786"
      ],
      "line": 17,
      "id": "login-action;successful-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6661466158,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "\n User navigates to MakeMyTrip Website",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User navigates to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters credentials\"fiyazhbasha@gmail.com\"\"Allah@786\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Login Successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 11072025819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fiyazhbasha@gmail.com",
      "offset": 24
    },
    {
      "val": "Allah@786",
      "offset": 47
    }
  ],
  "location": "Steps.user_enters_credentials(String,String)"
});
formatter.result({
  "duration": 1215959933,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Successfull()"
});
formatter.result({
  "duration": 1504314284,
  "status": "passed"
});
formatter.after({
  "duration": 242812129,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Login Failure with InValid Credentials",
  "description": "",
  "id": "login-action;login-failure-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigates to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters credentials\"\u003cusername\u003e\"\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Login Failure",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-action;login-failure-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "login-action;login-failure-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "jayasremanchari@gmail.com",
        "ThisIsNotAPassword"
      ],
      "line": 28,
      "id": "login-action;login-failure-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "John Doe",
        ""
      ],
      "line": 29,
      "id": "login-action;login-failure-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "",
        "Hii"
      ],
      "line": 30,
      "id": "login-action;login-failure-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "121333",
        "*******"
      ],
      "line": 31,
      "id": "login-action;login-failure-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5539353305,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "\n User navigates to MakeMyTrip Website",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 28,
  "name": "Login Failure with InValid Credentials",
  "description": "",
  "id": "login-action;login-failure-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigates to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters credentials\"jayasremanchari@gmail.com\"\"ThisIsNotAPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Login Failure",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 10773407015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jayasremanchari@gmail.com",
      "offset": 24
    },
    {
      "val": "ThisIsNotAPassword",
      "offset": 51
    }
  ],
  "location": "Steps.user_enters_credentials(String,String)"
});
formatter.result({
  "duration": 1288833898,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 278201258,
  "status": "passed"
});
formatter.after({
  "duration": 213353857,
  "status": "passed"
});
formatter.before({
  "duration": 4480117064,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "\n User navigates to MakeMyTrip Website",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 29,
  "name": "Login Failure with InValid Credentials",
  "description": "",
  "id": "login-action;login-failure-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigates to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters credentials\"John Doe\"\"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Login Failure",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 11890290868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 24
    },
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "Steps.user_enters_credentials(String,String)"
});
formatter.result({
  "duration": 1007149244,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 248832567,
  "status": "passed"
});
formatter.after({
  "duration": 232439603,
  "status": "passed"
});
formatter.before({
  "duration": 4533115900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "\n User navigates to MakeMyTrip Website",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 30,
  "name": "Login Failure with InValid Credentials",
  "description": "",
  "id": "login-action;login-failure-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigates to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters credentials\"\"\"Hii\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Login Failure",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 10711196099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    },
    {
      "val": "Hii",
      "offset": 26
    }
  ],
  "location": "Steps.user_enters_credentials(String,String)"
});
formatter.result({
  "duration": 927263695,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 333887532,
  "status": "passed"
});
formatter.after({
  "duration": 217841551,
  "status": "passed"
});
formatter.before({
  "duration": 7306063913,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "\n User navigates to MakeMyTrip Website",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 31,
  "name": "Login Failure with InValid Credentials",
  "description": "",
  "id": "login-action;login-failure-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigates to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters credentials\"121333\"\"*******\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Login Failure",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 11461208838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "121333",
      "offset": 24
    },
    {
      "val": "*******",
      "offset": 32
    }
  ],
  "location": "Steps.user_enters_credentials(String,String)"
});
formatter.result({
  "duration": 1046819371,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 277005059,
  "status": "passed"
});
formatter.after({
  "duration": 309829615,
  "status": "passed"
});
formatter.uri("SearchFlights.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Search Action",
  "description": "Description: This feature will search search the flight provided with the \"from\" and \"to\" destinations \nalong with the \"date of travel\"",
  "id": "flight-search-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Search for the available flights with Valid Inputs",
  "description": "",
  "id": "flight-search-action;search-for-the-available-flights-with-valid-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SearchTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enters \"\u003cFrom\u003e\" \"\u003cTo\u003e\" destinations",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the user enters the \"\u003cdate\u003e\" \"\u003cmonth\u003e\" \"\u003cyear\u003e\" \"\u003cno_of_passengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "available flight status displayed Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "flight-search-action;search-for-the-available-flights-with-valid-inputs;",
  "rows": [
    {
      "cells": [
        "From",
        "To",
        "date",
        "month",
        "year",
        "no_of_passengers"
      ],
      "line": 18,
      "id": "flight-search-action;search-for-the-available-flights-with-valid-inputs;;1"
    },
    {
      "cells": [
        "Chenn",
        "Sydne",
        "11",
        "11",
        "2018",
        "1"
      ],
      "line": 19,
      "id": "flight-search-action;search-for-the-available-flights-with-valid-inputs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5230809881,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User navigates to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 10618202506,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 1059069818,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search for the available flights with Valid Inputs",
  "description": "",
  "id": "flight-search-action;search-for-the-available-flights-with-valid-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SearchTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enters \"Chenn\" \"Sydne\" destinations",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the user enters the \"11\" \"11\" \"2018\" \"1\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "available flight status displayed Successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chenn",
      "offset": 13
    },
    {
      "val": "Sydne",
      "offset": 21
    }
  ],
  "location": "Steps.user_enters_destinations(String,String)"
});
formatter.result({
  "duration": 13165890980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 21
    },
    {
      "val": "11",
      "offset": 26
    },
    {
      "val": "2018",
      "offset": 31
    },
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "Steps.the_user_enters_the_traveldate_passengerno(String,String,String,String)"
});
formatter.result({
  "duration": 18186867384,
  "status": "passed"
});
formatter.match({
  "location": "Steps.available_flight_status_displayed_Successfully()"
});
formatter.result({
  "duration": 5033991578,
  "status": "passed"
});
formatter.after({
  "duration": 261188621,
  "status": "passed"
});
formatter.uri("TravelDetails.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Booking Action",
  "description": "Description: This feature will select the flight based on the search results.",
  "id": "flight-booking-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Provide Travel Details",
  "description": "",
  "id": "flight-booking-action;provide-travel-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@TravelTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the user is in TravellerDetail Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user enters the traveller_details \"\u003cname\u003e\"\"\u003csurname\u003e\"\"\u003cdate\u003e\"\"\u003cmonth\u003e\"\"\u003cyear\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the user enters the passport_details \"\u003cpassport_no\u003e\" and date_of_expiry \"\u003cpdate\u003e\"\"\u003cpmonth\u003e\"\"\u003cpyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user proceed to payment_gateway",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "flight-booking-action;provide-travel-details;",
  "rows": [
    {
      "cells": [
        "name",
        "surname",
        "date",
        "month",
        "year",
        "passport_no",
        "pdate",
        "pmonth",
        "pyear"
      ],
      "line": 23,
      "id": "flight-booking-action;provide-travel-details;;1"
    },
    {
      "cells": [
        "Jayasre",
        "Manchari",
        "09",
        "06",
        "1992",
        "K8347229",
        "09",
        "04",
        "2020"
      ],
      "line": 24,
      "id": "flight-booking-action;provide-travel-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5645832991,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User navigates to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters valid credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the User enters the search Criteria",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "available flight status displayed Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the User selects the flight",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Flight Details Page Displayed Successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 10557025473,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 1488340461,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_User_enters_the_search_Criteria()"
});
formatter.result({
  "duration": 15362211244,
  "status": "passed"
});
formatter.match({
  "location": "Steps.available_flight_status_displayed_Successfully()"
});
formatter.result({
  "duration": 5056441141,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_User_selects_the_flight()"
});
formatter.result({
  "duration": 8957642845,
  "status": "passed"
});
formatter.match({
  "location": "Steps.flight_Details_Page_Displayed_Successfully()"
});
formatter.result({
  "duration": 6162341425,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Provide Travel Details",
  "description": "",
  "id": "flight-booking-action;provide-travel-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@TravelTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the user is in TravellerDetail Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user enters the traveller_details \"Jayasre\"\"Manchari\"\"09\"\"06\"\"1992\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the user enters the passport_details \"K8347229\" and date_of_expiry \"09\"\"04\"\"2020\"",
  "matchedColumns": [
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user proceed to payment_gateway",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_user_is_in_TravellerDetail_Page()"
});
formatter.result({
  "duration": 691279878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jayasre",
      "offset": 39
    },
    {
      "val": "Manchari",
      "offset": 48
    },
    {
      "val": "09",
      "offset": 58
    },
    {
      "val": "06",
      "offset": 62
    },
    {
      "val": "1992",
      "offset": 66
    }
  ],
  "location": "Steps.the_user_enters_the_traveller_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 4463675199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "K8347229",
      "offset": 38
    },
    {
      "val": "09",
      "offset": 68
    },
    {
      "val": "04",
      "offset": 72
    },
    {
      "val": "2020",
      "offset": 76
    }
  ],
  "location": "Steps.the_user_enters_the_passport_details_and_date_of_expiry(String,String,String,String)"
});
formatter.result({
  "duration": 80622650752,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_user_proceed_to_payment_gateway()"
});
formatter.result({
  "duration": 71500,
  "status": "passed"
});
formatter.after({
  "duration": 314526880,
  "status": "passed"
});
});