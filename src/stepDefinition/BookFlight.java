package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import Utils.Util;

public class BookFlight extends Util{


	public BookFlight(WebDriver driver) {
		super(driver);
		
	}
	WebDriver driver = null;
	
	
	
	@FindBy(how=How.CSS,using="#bookButton")
	public WebElement book;
	
	
	@FindBy(how=How.CSS,using=".amount_payable_total")
	public WebElement result;
	
	
	public void bookFlight() throws InterruptedException {
		
		Thread.sleep(5000);
		if(book.isDisplayed())
			book.click();
		
	}
	public void result() throws InterruptedException {
		waitUntilVisible(result);
		Assert.assertEquals(true, elementExists(result));
		
	}

}
