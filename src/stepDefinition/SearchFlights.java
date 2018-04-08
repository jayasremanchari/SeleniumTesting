package stepDefinition;



import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.gargoylesoftware.htmlunit.javascript.background.JavaScriptExecutor;

public class SearchFlights {

	
	
	
	WebDriver driver = null;
	public SearchFlights(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver =driver;
	}
	
	
	@FindBy(how=How.CSS,using="#hp-widget__sfrom")
	public WebElement departure_City;
	
	@FindBy(how=How.CSS,using="#hp-widget__sTo")
	public WebElement arrival_City;
	
	@FindBy(how=How.CSS,using="#hp-widget__depart")
	public WebElement travel_Date;
		
	@FindBy(how=How.CSS,using="#hp-widget__paxCounter_pot")
	public WebElement passenger_picker;
	
	@FindBy(how=How.CSS,using="#searchBtn")
	public WebElement search;
	
	
	
	
	public void enterDestination(String from, String to) throws InterruptedException {
		if(departure_City.isDisplayed()){
			departure_City.clear();
			Thread.sleep(3000); 
			departure_City.sendKeys(from);
			Thread.sleep(3000);
			departure_City.sendKeys(Keys.RETURN);
		}
		
		if(arrival_City.isDisplayed()){
			arrival_City.clear();
			Thread.sleep(3000); 
			arrival_City.sendKeys(to);
			Thread.sleep(3000);
			arrival_City.sendKeys(Keys.RETURN);
		}
		
	}
	public void enterTravelDetails(String date, String month, String year,
			String no_of_passengers) throws InterruptedException {
		Boolean flag = Boolean.TRUE;
		if(travel_Date.isDisplayed())
			travel_Date.click();
		while(flag){
			try{
			if(driver.findElement(By.xpath("//td[@data-year='"+year+"'][@data-month='"+(Integer.parseInt(month)-1)+"']/a[contains(text(),'"+date+"')]")).isDisplayed()){
		
				driver.findElement(By.xpath("//td[@data-year='"+year+"'][@data-month='"+(Integer.parseInt(month)-1)+"']/a[contains(text(),'"+date+"')]")).click();
				flag = false;
			}
			}
			 catch(NoSuchElementException ex){
				 Thread.sleep(3000);
				 JavascriptExecutor js = (JavascriptExecutor)driver;
				 js.executeScript("document.querySelector('[data-handler=\"next\"]').click();");
			 }
			
			
				

		}
		if(passenger_picker.isDisplayed())
			passenger_picker.click();
		if(driver.findElement(By.xpath("//ul[@id='js-adult_counter']/li[contains(text(),'"+no_of_passengers+"')]")).isDisplayed())
			driver.findElement(By.xpath("//ul[@id='js-adult_counter']/li[contains(text(),'"+no_of_passengers+"')]")).click();
		
	}
	public void result() throws InterruptedException {
		Thread.sleep(3000);
		search.click();
	}
	
	

}
