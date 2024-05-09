from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, WebDriverException
import time
import csv

def load_url_selenium_tiki(url):
    driver=webdriver.Chrome()
    print("Loading url=", url)
    driver.get(url)
    list_review = []
    # just craw 10 page
    x=0
    while x<10:
        try:
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight/2);")
            #Get the review details here
            WebDriverWait(driver,5).until(EC.visibility_of_all_elements_located((By.CSS_SELECTOR,".review-comment")))
        except :
            print('Not has comment!')
            break
        product_reviews = driver.find_elements(By.CSS_SELECTOR, ".review-comment")
        # Get product review
        for product in product_reviews:
            comment = product.find_element(By.CSS_SELECTOR, ".review-comment__content").text
            review = product.find_element(By.CSS_SELECTOR,".review-comment__title").text
            if (review != "" or review.strip()) and (comment != "" or comment.strip()):
                print(comment, '-', review)
                list_review.append({'comment': comment, 'review': review})
        #Check for button next-pagination-item have disable attribute then jump from loop else click on the next button
        try:
            #driver.find_element_by_xpath("//li[@class='btn next']/a").click()
            button_next=WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.CSS_SELECTOR, "[class = 'btn next']")))
            driver.execute_script("arguments[0].click();", button_next)
            print("next page")
            time.sleep(2)
            x +=1
        except (TimeoutException, WebDriverException) as e:
            print('Load several page!')
            break
    driver.close()
    return list_review
url = 'https://tiki.vn/binh-dun-sieu-toc-sunhouse-htd1088-1-8-lit-hang-chinh-hang-p630207.html?itm_campaign=CTP_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.180817_Y.1763144_Z.3411249_CN.%5BPRODUCT%5D-BINH-%C4%90UN-SIEU-TOC&itm_medium=CPC&itm_source=tiki-ads&spid=630208'
list_review = load_url_selenium_tiki(url)

file_name = "reviews.csv"

# Thêm dữ liệu vào tệp CSV
with open(file_name, 'a', newline='', encoding='utf-8') as file:
    writer = csv.DictWriter(file, fieldnames=['comment', 'review'])
    writer.writerows(list_review)

print("Dữ liệu đã được thêm vào file CSV thành công.")