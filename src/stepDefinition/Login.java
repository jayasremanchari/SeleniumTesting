package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Login {

	WebDriver driver = null;
	WebDriverWait wait = null;
	public Login(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver =driver;
	}

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
		if (login_icon.isDisplayed())
			login_icon.click();
		
	}
	public void enterCredentials(String email, String password) {

		if(username.isDisplayed())
			username.sendKeys(email);
		if(pass.isDisplayed())
			pass.sendKeys(password);
		if(log_into.isDisplayed())
			log_into.click();
		
	}
	public void sucess() {
		WebElement loggedId = null;

		wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.visibilityOfElementLocated(login_success));
		if (driver.findElement(login_success).isDisplayed())
			loggedId = driver.findElement(login_success);
		
		Assert.assertEquals(true, loggedId.isDisplayed());
		
	}
	public void fail() {
		WebElement loggedOut = null;
		wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.visibilityOfElementLocated(login_fail));
		if(driver.findElement(login_fail).isDisplayed()) 
			loggedOut = driver.findElement(login_fail);
		Assert.assertEquals(true, loggedOut.isDisplayed()); 
		
	}
	
	
}
