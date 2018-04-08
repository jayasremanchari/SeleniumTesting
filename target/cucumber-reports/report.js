$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BookFlight.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Booking Action",
  "description": "Description: This feature will select the flight based on the search results.",
  "id": "flight-booking-action",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14163483574,
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
  "duration": 14089555318,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 1750474516,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_User_enters_the_search_Criteria()"
});
formatter.result({
  "duration": 16491862661,
  "status": "passed"
});
formatter.match({
  "location": "Steps.available_flight_status_displayed_Successfully()"
});
formatter.result({
  "duration": 9535662729,
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
  "duration": 4417248981,
  "status": "passed"
});
formatter.match({
  "location": "Steps.flight_Details_Page_Displayed_Successfully()"
});
formatter.result({
  "duration": 3391267847,
  "status": "passed"
});
formatter.after({
  "duration": 472259080,
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
  "duration": 13915817936,
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
  "duration": 13102052364,
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
  "duration": 1597779362,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Successfull()"
});
formatter.result({
  "duration": 1591657814,
  "status": "passed"
});
formatter.after({
  "duration": 321020244,
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
  "duration": 11959641427,
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
  "duration": 14070581274,
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
  "duration": 2198249871,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 636119883,
  "status": "passed"
});
formatter.after({
  "duration": 291616105,
  "status": "passed"
});
formatter.before({
  "duration": 19004287179,
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
  "duration": 13453180250,
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
  "duration": 4610939642,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 455492114,
  "status": "passed"
});
formatter.after({
  "duration": 363230033,
  "status": "passed"
});
formatter.before({
  "duration": 15530704099,
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
  "duration": 18176268268,
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
  "duration": 1365719827,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 422537584,
  "status": "passed"
});
formatter.after({
  "duration": 607663338,
  "status": "passed"
});
formatter.before({
  "duration": 43835264337,
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
  "duration": 18334118063,
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
  "duration": 1546878923,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_Failure()"
});
formatter.result({
  "duration": 478508425,
  "status": "passed"
});
formatter.after({
  "duration": 301532955,
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
  "duration": 15672842183,
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
  "duration": 13997014631,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 603726677,
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
  "duration": 13812493348,
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
  "duration": 3085725087,
  "status": "passed"
});
formatter.match({
  "location": "Steps.available_flight_status_displayed_Successfully()"
});
formatter.result({
  "duration": 8894939666,
  "status": "passed"
});
formatter.after({
  "duration": 540277415,
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
  "duration": 12993306445,
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
  "duration": 13641368626,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 2238922802,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_User_enters_the_search_Criteria()"
});
formatter.result({
  "duration": 16183055924,
  "status": "passed"
});
formatter.match({
  "location": "Steps.available_flight_status_displayed_Successfully()"
});
formatter.result({
  "duration": 8680060899,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_User_selects_the_flight()"
});
formatter.result({
  "duration": 4446400401,
  "status": "passed"
});
formatter.match({
  "location": "Steps.flight_Details_Page_Displayed_Successfully()"
});
formatter.result({
  "duration": 4045999338,
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
  "duration": 3760745171,
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
  "duration": 4985408058,
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
  "duration": 1555696959,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_user_proceed_to_payment_gateway()"
});
formatter.result({
  "duration": 32874,
  "status": "passed"
});
formatter.after({
  "duration": 374124063,
  "status": "passed"
});
});