package stepDefinition;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import Utils.Util;

public class TravelDetails extends Util {

	
	
	
	public TravelDetails(WebDriver driver) {
		super(driver);
		
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
		
		implicitWait(10);
		scrollToEnd();
		waitUntilVisible(cont);
		if(elementExists(cont))
			cont.sendKeys(Keys.ENTER);		
	}
	
	

	public void enterTravellerDetails(String name, String surname, String date, String month, String year) throws InterruptedException {
		Thread.sleep(3000);
		if(elementExists(traveller_name))
			traveller_name.sendKeys(name);
		if(elementExists(traveller_surname))
			traveller_surname.sendKeys(surname);
		if(elementExists(travel_date)) 
			travel_date.sendKeys(date);
		if(elementExists(travel_month))
			travel_month.sendKeys(month);
		if(elementExists(travel_year))
			travel_year.sendKeys(year);
		
	}
	public void enterPassportDetails(String pass_no, String date, String month, String year) {
		if(elementExists(passport_no))
			passport_no.sendKeys("ACGPF9984L");
		if(elementExists(pass_exp_date))
			pass_exp_date.sendKeys("21");
		if(elementExists(pass_exp_month))
			pass_exp_month.sendKeys("09");
		if(elementExists(pass_exp_year))
			pass_exp_year.sendKeys("2020");
		
	}

}
