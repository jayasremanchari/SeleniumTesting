package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Utils.Util;

public class Login extends Util {

	
	public Login(WebDriver driver) {
		super(driver);
		
	}
	WebDriverWait wait = null;
	

	@FindBy(how=How.CSS,using="#ch_login_icon")
	public WebElement login_icon;
	
	@FindBy(how=How.CSS,using="#ch_login_email")
	public WebElement username;
	
	@FindBy(how=How.CSS,using="#ch_login_password")
	public WebElement pass;
	
	@FindBy(how=How.CSS,using="#ch_login_btn")
	public WebElement log_into;
	
	public By login_success = By.xpath("//span[@class='login-profile']");
	
	public By login_fail = By.xpath("//span[@class='login-profile logged_out']");
	
	public void navigateTo() {
		driver.get("https://www.makemytrip.com");
		driver.manage().window().maximize();
		if (elementExists(login_icon))
			login_icon.click();
		
	}
	public void enterCredentials(String email, String password) {

		if(elementExists(username))
			username.sendKeys(email);
		if(elementExists(pass))
			pass.sendKeys(password);
		if(elementExists(log_into))
			log_into.click();
		
	}
	public void sucess() {
		WebElement loggedId = null;

		wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.visibilityOfElementLocated(login_success));
		if (elementExists(driver.findElement(login_success)))
			loggedId = driver.findElement(login_success);
		
		Assert.assertEquals(true, loggedId.isDisplayed());
		
	}
	public void fail() {
		WebElement loggedOut = null;
		wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.visibilityOfElementLocated(login_fail));
		if(elementExists(driver.findElement(login_fail))) 
			loggedOut = driver.findElement(login_fail);
		Assert.assertEquals(true, loggedOut.isDisplayed()); 
		
	}
	
	
}
