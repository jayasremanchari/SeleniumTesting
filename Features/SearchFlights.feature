Feature: Flight Search Action
Description: This feature will search search the flight provided with the "from" and "to" destinations 
along with the "date of travel"

Background: 

   Given User navigates to Login Page
   And User enters valid credentials
   
Scenario Outline: Search for the available flights with Valid Inputs
	 
	When User enters "<From>" "<To>" destinations
	And the user enters the "<date>" "<month>" "<year>" "<no_of_passengers>"
	Then available flight status displayed Successfully
	
	Examples: 
	  | From | To |	date | month | year | no_of_passengers |
      | Chennai | Sydney | 24 | 5 | 2018 | 1 |
    
      






	