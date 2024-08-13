package org.pojo.classes;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.UtilityClass;

public class AddToCartPOJO extends UtilityClass{
	
	public AddToCartPOJO() {

		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//span[text()='Add to Cart']//preceding-sibling::input")
	private WebElement addToCartBtn;
	
	@FindBy(xpath="(//a[contains(text(),'Go to Cart')])[2]")
	private WebElement goToCart;
	
	@FindBy(xpath="(//span[@class='a-list-item']//span[contains(text(),'Tempered Glass')])[2]")
	private WebElement verifyProductFromCart;

	
	public WebElement getAddToCartBtn() {
		return addToCartBtn;
	}

	public WebElement getGoToCart() {
		return goToCart;
	}

	public WebElement getVerifyProductFromCart() {
		return verifyProductFromCart;
	}	
}
