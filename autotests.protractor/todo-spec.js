//var webdriver = require('selenium-webdriver')

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    
    browser.get('https://angularjs.org');

    var elm = element(by.model('todoList.todoText'))
    elm.sendKeys('write first protractor test');

    //browser.debugger();

    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    //browser.debugger();

    todoList.get(2).element(by.css('input')).click();

    //browser.debugger();

    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);

    var test = element.all(by.xpath('//*[@class="done-true"]'));

    //browser.debugger();

    console.log("------------------   " + test.value);
  });
});
