package stepDefinition;



import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import Utils.Util;

public class SearchFlights extends Util {

	
	
	
	public SearchFlights(WebDriver driver) {
		super(driver);
		
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
		if(elementExists(departure_City)){
			departure_City.clear();
			Thread.sleep(3000);
			departure_City.sendKeys(from);
			Thread.sleep(3000);
			departure_City.sendKeys(Keys.RETURN);
		}
		
		if(elementExists(arrival_City)){
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
		if(elementExists(travel_Date))
			travel_Date.click();
		while(flag){
			try{
			if(driver.findElement(By.xpath("//td[@data-year='"+year+"'][@data-month='"+(Integer.parseInt(month)-1)+"']/a[contains(text(),'"+date+"')]")).isDisplayed()){
		
				driver.findElement(By.xpath("//td[@data-year='"+year+"'][@data-month='"+(Integer.parseInt(month)-1)+"']/a[contains(text(),'"+date+"')]")).click();
				flag = false;
			}
			}
			 catch(NoSuchElementException ex){
				 implicitWait(3);
				 JavascriptExecutor js = (JavascriptExecutor)driver;
				 js.executeScript("document.querySelector('[data-handler=\"next\"]').click();");
			 }
			
			
				

		}
		if(elementExists(passenger_picker))
			passenger_picker.click();
		if(driver.findElement(By.xpath("//ul[@id='js-adult_counter']/li[contains(text(),'"+no_of_passengers+"')]")).isDisplayed())
			driver.findElement(By.xpath("//ul[@id='js-adult_counter']/li[contains(text(),'"+no_of_passengers+"')]")).click();
		
	}
	public void result() throws InterruptedException {
		waitUntilVisible(search);
		search.click();
	}
	
	

}
