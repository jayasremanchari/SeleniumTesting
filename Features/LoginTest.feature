Feature: Login Action
Description: This feature will test the LogIn functionality

Background: 

   User navigates to MakeMyTrip Website


Scenario Outline: Successful Login with Valid Credentials
	
	Given User navigates to Login Page
	When User enters valid credentials"<username>""<password>"
	Then Login Successfull
	
	 Examples: 
	  | username | password |	
      | fiyazhbasha@gmail.com | Allah@786 |
      
 
Scenario Outline: Login Failure with InValid Credentials
	Given User navigates to Login Page
	When User enters invalid credentials "<username>""<password>"
	Then Login Failure
	
	Examples: 
      | username | password           |
      | jayasremanchari@gmail.com | ThisIsNotAPassword | 
      | John Doe |  |
      |  | Hii |
      | 121333 | ******* |
      
     
      
	
	  
