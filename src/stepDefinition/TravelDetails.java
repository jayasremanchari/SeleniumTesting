package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class TravelDetails {

	WebDriver driver = null;
	public TravelDetails(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver =driver;
	}
	
	
	@FindBy(how= How.LINK_TEXT ,using= "Continue")
	public WebElement cont;
	
	@FindBy(how= How.CSS , using= "input[ng-model='traveller.givenName']")
	public WebElement traveller_name;
	
	@FindBy(how= How.CSS , using= "input[ng-model='traveller.surname']")
	public WebElement traveller_surname;
	
	@FindBy(how= How.CSS , using= "input[ng-model='traveller.dob.DD']")
	public WebElement travel_date;
	
	@FindBy(how= How.CSS , using= "input[ng-model='traveller.dob.MM']")
	public WebElement travel_month;
	
	@FindBy(how= How.CSS , using= "input[ng-model='traveller.dob.YYYY']")
	public WebElement travel_year;
	
	@FindBy(how= How.CSS , using= "input[ng-model='traveller.passportNumber']")
	public WebElement passport_no;
	
	@FindBy(how= How.CSS , using= "input[ng-model='traveller.passportExpiryDate.DD']")
	public WebElement pass_exp_date;
	
	@FindBy(how= How.CSS , using= "input[ng-model='traveller.passportExpiryDate.MM']")
	public WebElement pass_exp_month;
	
	
	@FindBy(how= How.CSS , using= "input[ng-model='traveller.passportExpiryDate.YYYY']")
	public WebElement pass_exp_year;
	
	
	
	public void goToTravellerDetailsPage() throws InterruptedException {
		JavascriptExecutor js=(JavascriptExecutor) driver;
		js.executeScript("window.scrollTo(0,document.body.scrollHeight)");
		Thread.sleep(3000);
		if(cont.isDisplayed())
			cont.sendKeys(Keys.ENTER);		
	}
	public void enterTravellerDetails(String name, String surname, String date, String month, String year) throws InterruptedException {
		Thread.sleep(3000);
		if(traveller_name.isDisplayed())
			traveller_name.sendKeys(name);
		if(traveller_surname.isDisplayed())
			traveller_surname.sendKeys(surname);
		if(travel_date.isDisplayed()) 
			travel_date.sendKeys(date);
		if(travel_month.isDisplayed())
			travel_month.sendKeys(month);
		if(travel_year.isDisplayed())
			travel_year.sendKeys(year);
		
	}
	public void enterPassportDetails(String pass_no, String date, String month, String year) {
		if(passport_no.isDisplayed())
			passport_no.sendKeys("ACGPF9984L");
		if(pass_exp_date.isDisplayed())
			pass_exp_date.sendKeys("21");
		if(pass_exp_month.isDisplayed())
			pass_exp_month.sendKeys("09");
		if(pass_exp_year.isDisplayed())
			pass_exp_year.sendKeys("2020");
		
	}

}
