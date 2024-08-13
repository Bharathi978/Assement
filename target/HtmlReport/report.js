$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/AmazonAddToCart.feature");
formatter.feature({
  "name": "To validate add to cart feature in amazon application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To verify that Add to cart only works after login",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has nagivate to amazon login page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCartFeature.user_has_nagivate_to_amazon_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter valid mobile number in required field and click on continue button",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartFeature.user_has_to_enter_valid_mobile_number_in_required_field_and_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter password in required field and click on signin button",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartFeature.user_has_to_enter_password_in_required_field_and_click_on_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify that user has logged into amazon application",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartFeature.to_verify_that_user_has_logged_into_amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to select mobile category from navigation menu",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCartFeature.user_has_to_select_mobile_category_from_navigation_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to select screen protection in mobile category",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartFeature.user_has_to_select_screen_protection_in_mobile_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to select second product from searched product list",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartFeature.user_has_to_select_second_product_from_searched_product_list()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: target frame detached\n  (failed to check if window was closed: disconnected: not connected to DevTools)\n  (Session info: chrome\u003d127.0.6533.100)\nBuild info: version: \u00274.18.1\u0027, revision: \u0027b1d3319b48\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2f874bb5adfe0c5d56fd965527a826fb, findElement {using\u003dxpath, value\u003d(//span[contains(text(),\u0027Top rated\u0027)]//parent::div//following-sibling::div//child::li)[2]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 127.0.6533.100, chrome: {chromedriverVersion: 127.0.6533.99 (f31af5097d90..., userDataDir: C:\\Users\\Bharathi\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:60242}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:60242/devtoo..., se:cdpVersion: 127.0.6533.100, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2f874bb5adfe0c5d56fd965527a826fb\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:519)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.click(Unknown Source)\r\n\tat org.utility.UtilityClass.clickWebElement(UtilityClass.java:39)\r\n\tat org.stepdefinition.AddToCartFeature.user_has_to_select_second_product_from_searched_product_list(AddToCartFeature.java:67)\r\n\tat ✽.User has to select second product from searched product list(file:src/test/resources/AmazonAddToCart.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User has to add selected product to cart",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartFeature.user_has_to_add_selected_product_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has navigate to add to cart page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartFeature.user_has_navigate_to_add_to_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verify that product has added to cart and taking screenhot of cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartFeature.user_verify_that_product_has_added_to_cart_and_taking_screenhot_of_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: not connected to DevTools\n  (failed to check if window was closed: disconnected: not connected to DevTools)\n  (Session info: chrome\u003d127.0.6533.100)\nBuild info: version: \u00274.18.1\u0027, revision: \u0027b1d3319b48\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2f874bb5adfe0c5d56fd965527a826fb, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 127.0.6533.100, chrome: {chromedriverVersion: 127.0.6533.99 (f31af5097d90..., userDataDir: C:\\Users\\Bharathi\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:60242}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:60242/devtoo..., se:cdpVersion: 127.0.6533.100, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2f874bb5adfe0c5d56fd965527a826fb\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:519)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:592)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:322)\r\n\tat org.stepdefinition.HooksClass.postCondition(HooksClass.java:23)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});