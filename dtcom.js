var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
		   withCapabilities(webdriver.Capabilities.chrome())
		   .build();
var By = webdriver.By;
driver.get('https://www.diplomtime.com/');
driver.findElement(By.css('.button.red.order.order_rk')).click();
driver.sleep(10000);
driver.findElement(By.css('.tema_rk')).sendKeys('AK');