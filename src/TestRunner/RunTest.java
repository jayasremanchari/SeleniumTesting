package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class) 
@CucumberOptions(features="Features",glue={"stepDefinition"},tags={"@LoginTest,@SearchTest,@BookTest,@TravelTest"},
				plugin={"pretty","html:target/cucumber-reports"})		
public class RunTest {

}
