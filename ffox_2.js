  public static IWebElement FindByTextJQuery(this IWebDriver driver, string Tagname, string Text)
    {
        IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
        bool flag = (bool)js.ExecuteScript("return typeof jQuery == 'undefined'");
        if (flag)
        {
            js.ExecuteScript("var jq = document.createElement('script');jq.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';document.getElementsByTagName('head')[0].appendChild(jq);");
        }
        driver.WaitForAjax();
        js.ExecuteScript("$('" + Tagname + ":contains(" + Text + ")').css('background-color', '')");
        IWebElement elements = (IWebElement)js.ExecuteScript(@"return $('"+Tagname+":contains("+Text+")')[0]");
        return elements;
    }

 public static string getTextByJquery(this IWebDriver driver, string jquery)
    {
        IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
        string elementsText = (string)js.ExecuteScript("return $('" + jquery +    "').text()");
        return elementsText;
    }

 public static int returnIndexByJquery(this IWebDriver driver, string jQuery)
    {

        IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
        bool flag = (bool)js.ExecuteScript("return typeof jQuery == 'undefined'");
        if (flag)
        {
            js.ExecuteScript("var jq = document.createElement('script');jq.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';document.getElementsByTagName('head')[0].appendChild(jq);");
        }
        driver.WaitForAjax();
      //  js.ExecuteScript(@"return $('" + Tagname + ":contains(" + Text + ")').css('background-color', 'blue')");
        Int64 elementIndex = (Int64)js.ExecuteScript(@"return $('"+jQuery+"').index()[0]");
        return Convert.ToInt32(elementIndex);                     
    }

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