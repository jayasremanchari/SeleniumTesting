package Utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Util {
	protected WebDriver driver = null;
	public Util(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver =driver;
	
	}
	protected void waitUntilVisible(WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, 100);
		wait.until(ExpectedConditions.visibilityOf(element));

}
	
	protected void scrollToEnd() {
		JavascriptExecutor js=(JavascriptExecutor) driver;
		js.executeScript("window.scrollTo(0,document.body.scrollHeight)");
		
	}
	protected boolean elementExists(WebElement element){
		 try{

			 if(element.isDisplayed())
				 return true;
		 }
		 catch(NoSuchElementException ex){
			 System.out.println("*******Element Not found Exception Caught*******************"+element+" Not Found!!!!");
			 return false;
		 }
		return false;
}
	
	protected void implicitWait(int seconds) {
		driver.manage().timeouts().implicitlyWait(seconds, TimeUnit.SECONDS);
		
	}
}
