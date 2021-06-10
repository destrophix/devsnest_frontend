# import required modules
import os
import time
from selenium import webdriver


driver = webdriver.Edge(r"C:\Users\Amit\Downloads\edgedriver_win64\msedgedriver.exe")
options = webdriver.ChromeOptions()
# options.add_argument("user-data-dir={}\driver_data".format(os.getcwd()))

# driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)
 
driver.get("https://www.linkedin.com/login")
email = ""
password = ""


# Find the username & password elements & fill it with the email and password stored in env variables
driver.find_element_by_id("username").send_keys(email)
driver.find_element_by_id("password").send_keys(password)
time.sleep(30)

# Get the submit button and click on it
driver.find_element_by_css_selector(".btn__primary--large").click()

# Open invitations page
driver.get("https://www.linkedin.com/mynetwork/invitation-manager/")

# ----------------- Get all the available invitation's ACCEPT Button    
acceptButtons = []
while len(acceptButtons)==0:   
    acceptButtons = driver.find_elements_by_xpath("//button[@class='invitation-card__action-btn artdeco-button artdeco-button--2 artdeco-button--secondary ember-view']")

# Accept connections by clicking the buttons
for button in acceptButtons:
    button.click()
    time.sleep(5)

# driver.find_elements_by_class_name().
# [
#     <selenium.webdriver.remote.webelement.WebElement (session="40234d3be141b43e4fdf3bf5b7410d5d", element="445c7df7-501d-4935-9ca6-81a07072a6b6")>, 

#     <selenium.webdriver.remote.webelement.WebElement (session="40234d3be141b43e4fdf3bf5b7410d5d", element="389f12bd-d2e7-4926-99b1-93199b1f0a7c")>, 
    
#     <selenium.webdriver.remote.webelement.WebElement (session="40234d3be141b43e4fdf3bf5b7410d5d", element="15286099-fbe4-4f74-80be-f0ec3622b8b7")>
# ]