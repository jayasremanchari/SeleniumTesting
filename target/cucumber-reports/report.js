$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchFlights.feature");
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
    },
    {
      "cells": [
        "Chenn",
        "Melb",
        "09",
        "06",
        "2018",
        "1"
      ],
      "line": 20,
      "id": "flight-search-action;search-for-the-available-flights-with-valid-inputs;;3"
    },
    {
      "cells": [
        "Chenn",
        "Canad",
        "21",
        "09",
        "2018",
        "1"
      ],
      "line": 21,
      "id": "flight-search-action;search-for-the-available-flights-with-valid-inputs;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12891397905,
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
  "duration": 15675842756,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 3008382867,
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
  "duration": 14510044852,
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
  "duration": 23460135564,
  "status": "passed"
});
formatter.match({
  "location": "Steps.available_flight_status_displayed_Successfully()"
});
formatter.result({
  "duration": 11904943631,
  "status": "passed"
});
formatter.after({
  "duration": 502614509,
  "status": "passed"
});
formatter.before({
  "duration": 12558914501,
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
  "duration": 16067004584,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_credentials()"
});
formatter.result({
  "duration": 3341605525,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search for the available flights with Valid Inputs",
  "description": "",
  "id": "flight-search-action;search-for-the-available-flights-with-valid-inputs;;3",
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
  "name": "User enters \"Chenn\" \"Melb\" destinations",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the user enters the \"09\" \"06\" \"2018\" \"1\"",
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
      "val": "Melb",
      "offset": 21
    }
  ],
  "location": "Steps.user_enters_destinations(String,String)"
});
formatter.result({
  "duration": 14335903942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09",
      "offset": 21
    },
    {
      "val": "06",
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
  "duration": 117046917345,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027JAY-PC\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 59.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 16060, moz:profile: C:\\Users\\manchari\\AppData\\L..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 6.1, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 948303b1-1dd4-4c4e-bc4a-200c321c138e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:482)\r\n\tat stepDefinition.SearchFlights.enterTravelDetails(SearchFlights.java:81)\r\n\tat stepDefinition.Steps.the_user_enters_the_traveldate_passengerno(Steps.java:89)\r\n\tat ✽.And the user enters the \"09\" \"06\" \"2018\" \"1\"(SearchFlights.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.available_flight_status_displayed_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 81284633,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Tried to run command without establishing a connection\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027JAY-PC\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 59.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 16060, moz:profile: C:\\Users\\manchari\\AppData\\L..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 6.1, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 948303b1-1dd4-4c4e-bc4a-200c321c138e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:435)\r\n\tat stepDefinition.Steps.tearDown(Steps.java:174)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
