package org.pojo.classes;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.UtilityClass;

public class LoginPOJO extends UtilityClass{
	
	public LoginPOJO() {

		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//span[text()='Hello, sign in']")
	private WebElement startSignin;
	
	@FindBy(xpath="//input[@name='email']")
	private WebElement emailOrPhone;
	
	@FindBy(xpath="//span[@id='continue']")
	private WebElement continueBtn;
	
	@FindBy(xpath="//input[@id='ap_password']")
	private WebElement password;
	
	@FindBy(xpath="//input[@id='signInSubmit']")
	private WebElement siginInSubmit;
	
	@FindBy(xpath="//span[contains(text(),'Hello,')]")
	private WebElement verifyLoggedIn;
	
	@FindBy(xpath="//span[text()='Sign Out']")
	private WebElement signOut;
	
	

	public WebElement getSignOut() {
		return signOut;
	}

	public WebElement getVerifyLoggedIn() {
		return verifyLoggedIn;
	}

	public WebElement getStartSignin() {
		return startSignin;
	}

	public WebElement getEmailOrPhone() {
		return emailOrPhone;
	}

	public WebElement getContinueBtn() {
		return continueBtn;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getSiginInSubmit() {
		return siginInSubmit;
	}
}
