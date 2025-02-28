package org.test.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//resources", 
                 glue="org.stepdefinition", 
                 monochrome=true,
                 dryRun=false,
                 plugin= {"html:target//HtmlReport"})
public class TestRunnerClass {
	
	

}
