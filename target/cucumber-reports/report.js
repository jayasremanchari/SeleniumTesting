$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BookFlight.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Booking Action",
  "description": "Description: This feature will select the flight based on the search results.",
  "id": "flight-booking-action",
  "keyword": "Feature"
});
formatter.before({
  "duration": 46060779072,
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
  "duration": 20025862377,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 3120811906,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_User_enters_the_search_Criteria()"
});
formatter.result({
  "duration": 18114240806,
  "status": "passed"
});
formatter.match({
  "location": "Steps.available_flight_status_displayed_Successfully()"
});
formatter.result({
  "duration": 10913178977,
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
  "duration": 6570601204,
  "status": "passed"
});
formatter.match({
  "location": "Steps.flight_Details_Page_Displayed_Successfully()"
});
formatter.result({
  "duration": 3458615553,
  "status": "passed"
});
formatter.after({
  "duration": 1089985967,
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
  "duration": 18401941209,
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
  "duration": 17586431262,
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
  "duration": 2186078278,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Successfull()"
});
formatter.result({
  "duration": 2000252718,
  "status": "passed"
});
formatter.after({
  "duration": 440110374,
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
  "duration": 14808107547,
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
  "duration": 16095703986,
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
  "duration": 2458428171,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 808133024,
  "status": "passed"
});
formatter.after({
  "duration": 475402655,
  "status": "passed"
});
formatter.before({
  "duration": 12251043030,
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
  "duration": 16049833267,
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
  "duration": 2429009651,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 678286936,
  "status": "passed"
});
formatter.after({
  "duration": 449912165,
  "status": "passed"
});
formatter.before({
  "duration": 16505585496,
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
  "duration": 16398635729,
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
  "duration": 1967550087,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 692677935,
  "status": "passed"
});
formatter.after({
  "duration": 388330556,
  "status": "passed"
});
formatter.before({
  "duration": 11682647260,
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
  "duration": 18522945427,
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
  "duration": 2177381053,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 685256221,
  "status": "passed"
});
formatter.after({
  "duration": 434214425,
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
        "24",
        "5",
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
  "duration": 12195578860,
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
  "duration": 15574355413,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 2289813790,
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
  "name": "the user enters the \"24\" \"5\" \"2018\" \"1\"",
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
  "duration": 14427747700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 21
    },
    {
      "val": "5",
      "offset": 26
    },
    {
      "val": "2018",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "Steps.the_user_enters_the_traveldate_passengerno(String,String,String,String)"
});
formatter.result({
  "duration": 4000977179,
  "status": "passed"
});
formatter.match({
  "location": "Steps.available_flight_status_displayed_Successfully()"
});
formatter.result({
  "duration": 11136354727,
  "status": "passed"
});
formatter.after({
  "duration": 475342249,
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
  "duration": 12773509318,
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
  "duration": 15336238435,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 2608925698,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_User_enters_the_search_Criteria()"
});
formatter.result({
  "duration": 18173725876,
  "status": "passed"
});
formatter.match({
  "location": "Steps.available_flight_status_displayed_Successfully()"
});
formatter.result({
  "duration": 11033365865,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_User_selects_the_flight()"
});
formatter.result({
  "duration": 5697091680,
  "status": "passed"
});
formatter.match({
  "location": "Steps.flight_Details_Page_Displayed_Successfully()"
});
formatter.result({
  "duration": 3597956881,
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
  "duration": 4545762029,
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
  "duration": 6146642641,
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
  "duration": 10227622369,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: input[ng-model\u003d\u0027traveller.passportNumber\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027JAY-PC\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 59.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 20984, moz:profile: C:\\Users\\manchari\\AppData\\L..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 6.1, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: adb029a4-69f9-456e-a4f7-1138c6e1875e\n*** Element info: {Using\u003dcss selector, value\u003dinput[ng-model\u003d\u0027traveller.passportNumber\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\r\n\tat stepDefinition.TravelDetails.enterPassportDetails(TravelDetails.java:76)\r\n\tat stepDefinition.Steps.the_user_enters_the_passport_details_and_date_of_expiry(Steps.java:160)\r\n\tat ✽.And the user enters the passport_details \"K8347229\" and date_of_expiry \"09\"\"04\"\"2020\"(TravelDetails.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.the_user_proceed_to_payment_gateway()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 492447407,
  "status": "passed"
});
});