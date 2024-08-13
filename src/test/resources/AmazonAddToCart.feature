Feature: To validate add to cart feature in amazon application

  Scenario: To verify that Add to cart only works after login
  Given User has nagivate to amazon login page
  When User has to enter valid mobile number in required field and click on continue button
  And User has to enter password in required field and click on signin button
  Then To verify that user has logged into amazon application
  When User has to select mobile category from navigation menu
  And User has to select screen protection in mobile category
  And User has to select second product from searched product list
  And User has to add selected product to cart
  And User has navigate to add to cart page
  Then User verify that product has added to cart and taking screenhot of cart page
