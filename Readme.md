Assertions:

Playwright includes test assertions in the form of expect function.

https://playwright.dev/docs/test-assertions

1.  expect(page).toHaveURL() -- Page has URL
2.  expect(page).toHaveTitle() -- Page has title
3.  expect(locator).toBeVisible() -- Element is Visible
4.  expect(locator).toBeEnabled() -- Control is enabled
5.  expect(locator).toBeDisabled() -- Element is disabled
6.  expect(locator).toBeChecked() -- Radio/Checkbox is checked
7.  expect(locator).toContainText() -- Text contains text or regexp match
8.  expect(locator).toHaveAttribute() -- Element matches attribute
9.  expect(locator).toHaveText() -- Element matches text
10. expect(locator).toHaveValue(value) -- Input has a value
11. expect(locator).toHaveCount() -- List of Element has given length

### There are 2 kinds of assertions :

#### Soft Assertions - In this kind of assertion even if the assertions fail, the test will not stop.

#### Hard Assertions - In this kind of assertion if the assertions fail, the test will stop at that step itself.

## Allure Reports:

1. Install: `npm i -D @playwright/test allure-playwright`
2. Config file: `{reporter: "allure-playwright";}` or, `{reporter: [["line"], ["allure-playwright"]];}`
3. Generate Allure Report: `allure generate my-allure-results -o allure-report --clean`
4. Open Allure Report: `allure open allure-report`
