package org.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.pojo.classes.AddToCartPOJO;
import org.pojo.classes.LoginPOJO;
import org.pojo.classes.SelectProductPOJO;
import org.utility.UtilityClass;

import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddToCartFeature extends UtilityClass {
	
	LoginPOJO l;
	SelectProductPOJO s;
	AddToCartPOJO a;
	
	@Given("User has nagivate to amazon login page")
	public void user_has_nagivate_to_amazon_login_page() {
	    
		launchUrl("https://www.amazon.in/");
		implWait();
	}
	
	@When("User has to enter valid mobile number in required field and click on continue button")
	public void user_has_to_enter_valid_mobile_number_in_required_field_and_click_on_continue_button() {
	    l = new LoginPOJO();
	    clickWebElement(l.getStartSignin());
		sendText(l.getEmailOrPhone(), "9789268944");
		clickWebElement(l.getContinueBtn());
	}

	@When("User has to enter password in required field and click on signin button")
	public void user_has_to_enter_password_in_required_field_and_click_on_signin_button() {
	   
		sendText(l.getPassword(), "Bharathi@97");
		clickWebElement(l.getSiginInSubmit());
	}

	@Then("To verify that user has logged into amazon application")
	public void to_verify_that_user_has_logged_into_amazon_application() {
	    
		Assert.assertTrue("User not logged in", l.getVerifyLoggedIn().getText().contains("bharathi"));
	}
	
	@When("User has to select mobile category from navigation menu")
	public void user_has_to_select_mobile_category_from_navigation_menu() {
	    
		s = new SelectProductPOJO();
		clickWebElement(s.getNavMenu());
		clickWebElement(s.getMobileCategory());
	}

	@When("User has to select screen protection in mobile category")
	public void user_has_to_select_screen_protection_in_mobile_category() {
		
		clickJs(s.getScreenProtectors());	
	}

	@When("User has to select second product from searched product list")
	public void user_has_to_select_second_product_from_searched_product_list() {
		
		clickWebElement(s.getSecondScreenGuard());
	}

	@When("User has to add selected product to cart")
	public void user_has_to_add_selected_product_to_cart() {
	    
		a = new AddToCartPOJO();
		clickWebElement(a.getAddToCartBtn());
	}

	@When("User has navigate to add to cart page")
	public void user_has_navigate_to_add_to_cart_page() {
	    
		clickWebElement(a.getGoToCart());
	}

	@Then("User verify that product has added to cart and taking screenhot of cart page")
	public void user_verify_that_product_has_added_to_cart_and_taking_screenhot_of_cart_page() {
	    
		Assert.assertTrue("Wrong product added in cart", a.getVerifyProductFromCart().getText().contains("Tempered Glass"));	
	}

}
