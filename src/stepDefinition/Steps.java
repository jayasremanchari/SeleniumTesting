package stepDefinition;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



/**
 * @author manchari
 *
 */
public class Steps {

	WebDriver driver;
	Login login;
	SearchFlights search;
	BookFlight book;
	TravelDetails travel;
	WebDriverWait wait = null;
	
	
	@Before
	public void init() {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\manchari\\Desktop\\SAI\\Selenium\\geckodriver-v0.19.1-win64\\geckodriver.exe");
		driver = new FirefoxDriver();
	
		
	}

	
	@Given("^User navigates to Login Page$")
	public void user_navigates_to_Login_Page() {
	
		login = new Login(driver);
		login.navigateTo();
		
	}

	
	@When("^User enters credentials\"([^\"]*)\"\"([^\"]*)\"$")
	public void user_enters_credentials(String email, String password)  {
		
		login.enterCredentials(email,password);
	}

	@Then("^Login Successfull$")
	public void login_Successfull()  {
		
		login.sucess();
	
	}

	

	@Then("^Login Failure$")
	public void login_Failure()  {
		login.fail();
	}
	

	@Given("^User enters valid credentials$")
	public void user_enters_valid_credentials()  {

		login.enterCredentials("fiyazhbasha@gmail.com","Allah@786");
			   
	}

	
	@When("^User enters \"([^\"]*)\" \"([^\"]*)\" destinations$")
	public void user_enters_destinations(String from, String to) throws InterruptedException  {
		search = new SearchFlights(driver);
		search.enterDestination(from,to);
		
	}
	
	
	@When("^the user enters the \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void the_user_enters_the_traveldate_passengerno(String date, String month, String year, String no_of_passengers) {
	    
		try {
			search.enterTravelDetails( date,  month,  year,  no_of_passengers);
		} catch (InterruptedException e) {
			System.out.println("Exception caught!! in the_user_enters_the_traveldate_passengerno");
		}
		
	}

	
	@Then("^available flight status displayed Successfully$")
	public void available_flight_status_displayed_Successfully() {
		try {
			search.result();
		} catch (InterruptedException e) {
			System.out.println("Exception caught!! in available_flight_status_displayed_Successfully");
		}
	}
	
	@Given("^the User enters the search Criteria$")
	public void the_User_enters_the_search_Criteria()  {
		
		try {
			search = new SearchFlights(driver);
			search.enterDestination("Chenn", "Sydne");
			search.enterTravelDetails("24", "5", "2018", "1");
			
		} catch (InterruptedException e) {
		System.out.println("Exception caught!! in the_User_enters_the_search_Criteria");
		}
		
	}
	
	@When("^the User selects the flight$")
	public void the_User_selects_the_flight()  {
	
	book = new BookFlight(driver);
	book.bookFlight();
		
	}

	@Then("^Flight Details Page Displayed Successfully\\.$")
	public void flight_Details_Page_Displayed_Successfully()  {
		try {
			book.result();
		} catch (InterruptedException e) {
			System.out.println("Exception caught!! in flight_Details_Page_Displayed_Successfully");
		}
		
		
	}
	
	@Given("^the user is in TravellerDetail Page$")
	public void the_user_is_in_TravellerDetail_Page()   {
		
		travel = new TravelDetails(driver);
		try {
			travel.goToTravellerDetailsPage();
		} catch (InterruptedException e) {
			System.out.println("Exception caught!! in the_user_is_in_TravellerDetail_Page");
		}
		
	   
	}

	@When("^the user enters the traveller_details \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_user_enters_the_traveller_details(String name, String surname, String date, String month, String year)   {
		try {
			travel.enterTravellerDetails( name,  surname,  date,  month,  year);
		} catch (InterruptedException e) {
			System.out.println("Exception caught!! in the_user_enters_the_traveller_details");
		}
		
	}

	@When("^the user enters the passport_details \"([^\"]*)\" and date_of_expiry \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_user_enters_the_passport_details_and_date_of_expiry(String pass_no, String date, String month, String year)  {
		travel.enterPassportDetails( pass_no,  date,  month,  year);
	}

	@Then("^the user proceed to payment_gateway$")
	public void the_user_proceed_to_payment_gateway() throws Throwable {
	
	}
	
	@After
	public void tearDown(){
		driver.close();
		
	}


	

	

}
