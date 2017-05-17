var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
		   withCapabilities(webdriver.Capabilities.firefox())
		   .build();
var By = webdriver.By;
driver.manage().window().maximize();
driver.manage().deleteAllCookies();
driver.get('https://www.diplomtime.com/');


driver.findElement(By.css('.button.red.order.order_rk')).click()
driver.sleep(10000);
driver.findElement(By.css('.rk_type_f')).click()
driver.sleep(3000);
// driver.findElement(By.css('.rk_type_f.js--validator.error>option:nth-child(7)')).click()

// Select typeSelect = new Select(driver.findElement(By.css('.rk_type_f')));
// typeSelect.selectByVisibleText("Реферат");
// new Select(driver.findElement(By.css(".rk_type_f"))).selectByVisibleText("Реферат");
// driver.findElement(By.css('.tema_rk')).click()
// driver.sleep(5000);
// driver.findElement(By.css('.tema_rk')).sendKeys('AK')
// driver.executeScript("document.getElementsByClassName('tema_rk').setAttribute('value', 'AK')");
// driver.executeScript("document.querySelector('.tema_rk').setAttribute('value', 'AK')");
// driver.executeScript("document.getElementsByClassName('tema_rk').click()");



driver.executeScript("document.querySelector('.email_rk').value = 'test@diplomtime.ru'");



// driver.quit();









// if(driver.findElement(By.css('.button.red.order.order_rk')).click()){
// 	console.log("Yes");
// } else {

// 	console.log('no');
// }

// try {
// 	driver.findElement(By.xpath(".//*[@id='topper']/div/div[2]/div[1]/span")).click();
// 	console.log('Yes');
// }
// catch(error) {
// 	console.log('No', error.message);
// }














// var webdriver = require('selenium-webdriver');
// // var By = webdriver.By;
// var firefox = require('selenium-webdriver/firefox');

// var driver = new firefox.Driver();
// 	driver.navigate().to("https://www.diplomtime.com/");
// // driver.get("https://www.diplomtime.com/");

// var webdriver = require('selenium-webdriver') // Added line
// var By = require('selenium-webdriver').By,
//   until = require('selenium-webdriver').until,
//   chrome = require('selenium-webdriver/chrome'),
//   test = require('selenium-webdriver/testing');

// test.describe('Google Search', function() {
//   var driver;

//   test.before(function() {
//     driver = new webdriver.Builder().forBrowser('chrome').build() // Changed line
//   });

//   test.after(function() {
//     driver.quit();
//   });

//   test.it('should append query to title', function() {
//     driver.get('http://www.google.com/ncr');
//     driver.findElement(By.name('q')).sendKeys('webdriver');
//     driver.findElement(By.name('btnG')).click();
//     driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   });
// });