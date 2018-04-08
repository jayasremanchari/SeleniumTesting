package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class BookFlight {


	WebDriver driver = null;
	public BookFlight(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver =driver;
	
	}
	
	
	@FindBy(how=How.CSS,using="#bookButton")
	public WebElement book;
	
	
	@FindBy(how=How.CSS,using=".amount_payable_total")
	public WebElement result;
	
	
	public void bookFlight() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		if(book.isDisplayed())
			book.click();
		
	}
	public void result() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(3000);
		Assert.assertEquals(true, result.isDisplayed());
		
	}

}
