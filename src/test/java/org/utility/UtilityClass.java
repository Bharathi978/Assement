package org.utility;

import java.time.Duration;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.Scenario;

public class UtilityClass {
	
	public static WebDriver driver;
	public static JavascriptExecutor js;
	public static Actions a;
	
	public static void launchBrowser() {

		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	public static void launchUrl(String url) {

		driver.get(url);
	}
	
	public static void implWait() {

		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(40));
	}
	
	public static void clickWebElement(WebElement element) {

		element.click();
	}
	
	public static void sendText(WebElement element, String txt) {

		element.sendKeys(txt);
	}

	
	public static void clickJs(WebElement element) {

		js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click()", element);
	}
	
	public static void closeBrowser() {

		driver.quit();
	}
	
	public static void moveCursor(WebElement element) {

		a = new Actions(driver);
		a.moveToElement(element).perform();
	}
	

}
