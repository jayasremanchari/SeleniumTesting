package stepDefinition;


import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
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
	WebDriver driver = null; 
	WebDriverWait wait = null;
	
	
	@Before
	public void init() {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\manchari\\Desktop\\SAI\\Selenium\\geckodriver-v0.20.0-win64\\geckodriver.exe");
		
	}


	@Given("^User navigates to Login Page$")
	public void user_navigates_to_Login_Page() {
		driver = new FirefoxDriver();
		driver.get("https://www.makemytrip.com");
		driver.manage().window().maximize();
		if (driver.findElement(By.id("ch_login_icon")).isDisplayed())
			driver.findElement(By.id("ch_login_icon")).click();
	}

	@When("^User enters valid credentials\"([^\"]*)\"\"([^\"]*)\"$")
	public void user_enters_valid_credentials(String email, String password)  {
		if(driver.findElement(By.id("ch_login_email")).isDisplayed())
			driver.findElement(By.id("ch_login_email")).sendKeys(email);
		if(driver.findElement(By.id("ch_login_password")).isDisplayed())
			driver.findElement(By.id("ch_login_password")).sendKeys(password);
		if(driver.findElement(By.id("ch_login_btn")).isDisplayed())
			driver.findElement(By.id("ch_login_btn")).click();
	}

	@Then("^Login Successfull$")
	public void login_Successfull()  {
		
		WebElement loggedId = null;

		wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@class='login-profile']")));
		if (driver.findElement(By.xpath("//span[@class='login-profile']")).isDisplayed())
			loggedId = driver.findElement(By.xpath("//span[@class='login-profile']"));
		
		Assert.assertEquals(true, loggedId.isDisplayed());
	
	}

	@When("^User enters invalid credentials \"([^\"]*)\"\"([^\"]*)\"$")
	public void user_enters_invalid_credentials(String email, String password)  {
		if(driver.findElement(By.id("ch_login_email")).isDisplayed())
			driver.findElement(By.id("ch_login_email")).sendKeys(email);
		if(driver.findElement(By.id("ch_login_password")).isDisplayed())
			driver.findElement(By.id("ch_login_password")).sendKeys(password);
		if(driver.findElement(By.id("ch_login_btn")).isDisplayed())
		driver.findElement(By.id("ch_login_btn")).click();
	}

	@Then("^Login Failure$")
	public void login_Failure()  {
		WebElement loggedOut = null;
		wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@class='login-profile logged_out']")));
		if(driver.findElement(By.xpath("//span[@class='login-profile logged_out']")).isDisplayed()) 
			loggedOut = driver.findElement(By.xpath("//span[@class='login-profile logged_out']"));
		Assert.assertEquals(true, loggedOut.isDisplayed()); 
	}
	

	@Given("^User enters valid credentials$")
	public void user_enters_valid_credentials()  {

		user_enters_valid_credentials("fiyazhbasha@gmail.com","Allah@786");
			   
	}

	
	@When("^User enters \"([^\"]*)\" \"([^\"]*)\" destinations$")
	public void user_enters_destinations(String from, String to)  {
		
		if(driver.findElement(By.id("hp-widget__sfrom")).isDisplayed()){
			driver.findElement(By.id("hp-widget__sfrom")).clear();
			driver.findElement(By.id("hp-widget__sfrom")).sendKeys(from+"\n");
		}
		
		if(driver.findElement(By.id("hp-widget__sTo")).isDisplayed()){
			driver.findElement(By.id("hp-widget__sTo")).clear();
			driver.findElement(By.id("hp-widget__sTo")).sendKeys(to+"\n");
		}
	}
	
	
	@When("^the user enters the \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void the_user_enters_the_traveldate_passengerno(String date, String month, String year, String no_of_passengers) {
	    
		Boolean flag = Boolean.TRUE;
		if(driver.findElement(By.id("hp-widget__depart")).isDisplayed())
			driver.findElement(By.id("hp-widget__depart")).click();
		while(flag){
			if(driver.findElement(By.xpath("//td[@data-year='"+year+"'][@data-month='"+(Integer.parseInt(month)-1)+"']/a[contains(text(),'"+date+"')]")).isDisplayed()){
				driver.findElement(By.xpath("//td[@data-year='"+year+"'][@data-month='"+(Integer.parseInt(month)-1)+"']/a[contains(text(),'"+date+"')]")).click();
				flag = false;
			}
			else
				driver.findElement(By.xpath("//a[@class='ui-datepicker-next ui-corner-all']")).click();

		}
		if(driver.findElement(By.id("hp-widget__paxCounter_pot")).isDisplayed())
			driver.findElement(By.id("hp-widget__paxCounter_pot")).click();
		if(driver.findElement(By.xpath("//ul[@id='js-adult_counter']/li[contains(text(),'"+no_of_passengers+"')]")).isDisplayed())
			driver.findElement(By.xpath("//ul[@id='js-adult_counter']/li[contains(text(),'"+no_of_passengers+"')]")).click();
	}

	
	@Then("^available flight status displayed Successfully$")
	public void available_flight_status_displayed_Successfully() {
		driver.findElement(By.id("searchBtn")).click();
	}
	
	@Given("^the User enters the search Criteria$")
	public void the_User_enters_the_search_Criteria()  {
		
		//user_enters_destinations("Chennai (MAA)", "Sydney (SYD)");
		driver.findElement(By.id("hp-widget__sfrom")).sendKeys("Chennai,India"+"\n");
		driver.findElement(By.id("hp-widget__sTo")).sendKeys("Sydney,Australia"+"\n");
		the_user_enters_the_traveldate_passengerno("24", "5", "2018", "1");
		available_flight_status_displayed_Successfully();
	}
	
	@When("^the User selects the flight$")
	public void the_User_selects_the_flight()  {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.id("bookButton")).click();
		
	}

	@Then("^Flight Details Page Displayed Successfully\\.$")
	public void flight_Details_Page_Displayed_Successfully()  {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		WebElement total = driver.findElement(By
				.className("amount_payable_total"));
		Assert.assertEquals(true, total.isDisplayed());
		driver.findElement(By.linkText("Continue")).sendKeys(Keys.ENTER);
		
		
	}
	
	@Given("^the user is in TravellerDetail Page$")
	public void the_user_is_in_TravellerDetail_Page()  {
		
		JavascriptExecutor js=(JavascriptExecutor) driver;
		js.executeScript("window.scrollTo(0,document.body.scrollHeight)");
		if(driver.findElement(By.linkText("Continue")).isDisplayed())
			driver.findElement(By.linkText("Continue")).sendKeys(Keys.ENTER);
	   
	}

	@When("^the user enters the traveller_details \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_user_enters_the_traveller_details(String name, String surname, String date, String month, String year)  {
		if( driver.findElement(By.cssSelector("input[ng-model='traveller.givenName']")).isDisplayed())
			driver.findElement(By.cssSelector("input[ng-model='traveller.givenName']")).sendKeys(name);
		if(driver.findElement(By.cssSelector("input[ng-model='traveller.surname']")).isDisplayed());
			driver.findElement(By.cssSelector("input[ng-model='traveller.surname']")).sendKeys(surname);
		if(driver.findElement(By.cssSelector("input[ng-model='traveller.dob.DD']")).isDisplayed()) 
			driver.findElement(By.cssSelector("input[ng-model='traveller.dob.DD']")).sendKeys(date);
		if(driver.findElement(By.cssSelector("input[ng-model='traveller.dob.MM']")).isDisplayed())
		 driver.findElement(By.cssSelector("input[ng-model='traveller.dob.MM']")).sendKeys(month);
		if(driver.findElement(By.cssSelector("input[ng-model='traveller.dob.YYYY']")).isDisplayed())
		 driver.findElement(By.cssSelector("input[ng-model='traveller.dob.YYYY']")).sendKeys(year);
		
	}

	@When("^the user enters the passport_details \"([^\"]*)\" and date_of_expiry \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_user_enters_the_passport_details_and_date_of_expiry(String arg1, String arg2, String arg3, String arg4)  {
	   
	}

	@Then("^the user proceed to payment_gateway$")
	public void the_user_proceed_to_payment_gateway() throws Throwable {
		if(driver.findElement(By.cssSelector("input[ng-model='traveller.passportNumber']")).isDisplayed())
			driver.findElement(By.cssSelector("input[ng-model='traveller.passportNumber']")).sendKeys("ACGPF9984L");
		if(driver.findElement(By.cssSelector("input[ng-model='traveller.passportExpiryDate.DD']")).isDisplayed())
			driver.findElement(By.cssSelector("input[ng-model='traveller.passportExpiryDate.DD']")).sendKeys("21");
		if(driver.findElement(By.cssSelector("input[ng-model='traveller.passportExpiryDate.MM']")).isDisplayed())
			driver.findElement(By.cssSelector("input[ng-model='traveller.passportExpiryDate.MM']")).sendKeys("09");
		if(driver.findElement(By.cssSelector("input[ng-model='traveller.passportExpiryDate.YYYY']")).isDisplayed())
			driver.findElement(By.cssSelector("input[ng-model='traveller.passportExpiryDate.YYYY']")).sendKeys("2020");
	}
	
	@After
	public void tearDown(){
		driver.close();
		
	}


	

	

}
