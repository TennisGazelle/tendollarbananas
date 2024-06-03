import requests as requests
from bs4 import BeautifulSoup
from lxml import html

class WalmartSearch():
    def __init__(self):
        self.url = 'https://www.walmart.com/search?q={}'

    def dumb_fetch_price(self, query):
        response = requests.get(self.url.format(query), headers={'User-Agent': 'Mozilla/5.0'})

        tree = html.fromstring(response.content)
        prices = tree.xpath("//div[@role='group']//div[@data-automation-id='product-price']//span[@class='w_iUH7']")
        product_names = tree.xpath("//div[@role='group']//span[@data-automation-id='product-title']")
        if prices:
            price_list = [float(price.text.split("$")[1]) for price in prices]
            price_list.pop(0) # remove the first element, probs an ad or some other price
            product_name_list = [product_name.text for product_name in product_names]
            return price_list
        return None
