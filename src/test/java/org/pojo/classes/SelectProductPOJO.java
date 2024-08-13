package org.pojo.classes;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.UtilityClass;

public class SelectProductPOJO extends UtilityClass {
	
	public SelectProductPOJO() {

		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//a[@id='nav-hamburger-menu']")
	private WebElement navMenu;
	
	@FindBy(xpath="//div[text()='Mobiles, Computers']")
	private WebElement mobileCategory;
	
	@FindBy(xpath="//a[text()='Screen Protectors']")
	private WebElement screenProtectors;
	
	@FindBy(xpath="(//span[contains(text(),'Top rated')]//parent::div//following-sibling::div//child::li)[2]")
	private WebElement secondScreenGuard;

	public WebElement getNavMenu() {
		return navMenu;
	}

	public WebElement getMobileCategory() {
		return mobileCategory;
	}

	public WebElement getScreenProtectors() {
		return screenProtectors;
	}

	public WebElement getSecondScreenGuard() {
		return secondScreenGuard;
	}
	
	
	

}
