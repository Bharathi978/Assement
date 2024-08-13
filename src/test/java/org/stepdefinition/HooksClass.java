package org.stepdefinition;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.utility.UtilityClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends UtilityClass{
	
	@Before
	public void preCondition() {

		launchBrowser();
	}
	
	@After
	public void postCondition(Scenario s) {
		
		TakesScreenshot ts = (TakesScreenshot)driver;
		byte[] src = ts.getScreenshotAs(OutputType.BYTES);
		s.embed(src, "image/png");
		System.out.println("Screenshot attached with HTML report");

		closeBrowser();
	}

}
