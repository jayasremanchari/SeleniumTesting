package stepDefinition;


import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class Steps {
	WebDriver driver = null; 
	
	
	@Before
	public void init() {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\manchari\\Desktop\\SAI\\Selenium\\geckodriver-v0.20.0-win64\\geckodriver.exe");
		
	}


	@Given("^User navigates to Login Page$")
	public void user_navigates_to_Login_Page() throws Throwable {
		driver = new FirefoxDriver();
		driver.get("https://www.makemytrip.com");
		driver.manage().window().maximize();
		driver.findElement(By.id("ch_login_icon")).click();
	}

	@When("^User enters valid credentials\"([^\"]*)\"\"([^\"]*)\"$")
	public void user_enters_valid_credentials(String email, String password) throws Throwable {
		driver.findElement(By.id("ch_login_email")).sendKeys(email);
		driver.findElement(By.id("ch_login_password")).sendKeys(password);
		driver.findElement(By.id("ch_login_btn")).click();
	}

	@Then("^Login Successfull$")
	public void login_Successfull() throws Throwable {
		Assert.assertNotNull(driver.findElement(By.id("ch_logged-in")));
	}

	@When("^User enters invalid credentials \"([^\"]*)\"\"([^\"]*)\"$")
	public void user_enters_invalid_credentials(String email, String password) throws Throwable {
		driver.findElement(By.id("ch_login_email")).sendKeys(email);
		driver.findElement(By.id("ch_login_password")).sendKeys(password);
		driver.findElement(By.id("ch_login_btn")).click();
	}

	@Then("^Login Failure$")
	public void login_Failure() throws Throwable {
	  
	}
	
	@Given("^the User has logged in to the Application Successfullyy$")
	public void the_User_has_logged_in_to_the_Application_Successfullyy() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	
	@Given("^User enters valid credentials$")
	public void user_enters_valid_credentials() throws Throwable {
		driver.findElement(By.id("ch_login_email")).sendKeys("fiyazhbasha@gmail.com");
		driver.findElement(By.id("ch_login_password")).sendKeys("Allah@786");
		driver.findElement(By.id("ch_login_btn")).click();
		
	   
	}

	
	@When("^User enters \"([^\"]*)\" \"([^\"]*)\" destinations$")
	public void user_enters_destinations(String arg1, String arg2) throws Throwable {
		String dep = "Chennai (MAA)".replaceAll("\\(", Keys.chord(Keys.SHIFT, "9"));
		dep ="Chennai (MAA)".replaceAll("\\)", Keys.chord(Keys.SHIFT, "0"));
		driver.findElement(By.id("hp-widget__sfrom")).sendKeys(dep);
		String arr = "Sydney (SYD)".replaceAll("\\(", Keys.chord(Keys.SHIFT, "9"));
		arr ="Sydney (SYD)".replaceAll("\\)", Keys.chord(Keys.SHIFT, "0"));
		driver.findElement(By.id("hp-widget__sTo")).sendKeys(arr);
	}
	
	
	@When("^the user enters the \"([^\"]*)\" \"([^\"]*)\"$")
	public void the_user_enters_the(String arg1, String no_of_passengers) throws Throwable {
		driver.findElement(By.id("hp-widget__depart")).click();
		SelectDayFromMultiDateCalendar(4,25,2018);
		driver.findElement(By.id("hp-widget__paxCounter_pot")).click();
		driver.findElement(By.xpath("//ul[@id='js-adult_counter']/li[contains(text(),'3')]")).click();
	}

	private void SelectDayFromMultiDateCalendar(int month, int date, int year) {
		
		 driver.findElement(By.xpath("//td[@data-year='"+year+"'][@data-month='"+(month-1)+"']/a[contains(text(),'"+date+"')]")).click();
		 
		
	}

	@Then("^available flight status displayed Successfully$")
	public void available_flight_status_displayed_Successfully() throws Throwable {
		driver.findElement(By.id("searchBtn")).click();
	}
	
	@When("^the User selects the flight$")
	public void the_User_selects_the_flight() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		//String element = driver.findElement(By.xpath("//p[@class='airways-name '][contains(text(),'Air India Express+ 1 more')]")).getText();
		driver.findElement(By.id("bookButton")).click();
		
	}

	@Then("^Flight Details Page Displayed Successfully\\.$")
	public void flight_Details_Page_Displayed_Successfully() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		WebElement total = driver.findElement(By
				.className("amount_payable_total"));
		Assert.assertEquals(true, total.isDisplayed());
		JavascriptExecutor js = (JavascriptExecutor) driver;

		/*js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		
		driver.findElement(By.cssSelector("a[ng-click *= 'gotoTraveller']")).click();*/
		
	}
	
	@After
	public void tearDown(){
		driver.quit();
		
	}


	

	

}
