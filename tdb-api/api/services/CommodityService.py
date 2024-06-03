from api.clients.WalmartSearch import WalmartSearch
from api.model import Commodity


class CommodityService():
    def __init__(self):
        self.walmart = WalmartSearch()

    def enrich_commody(self, commodity: Commodity):
        commodity.prices = self.walmart.dumb_fetch_price(commodity.name)
        commodity.avg_price = sum(commodity.prices) / len(commodity.prices)
        commodity.id = '0001'
        return commodity
