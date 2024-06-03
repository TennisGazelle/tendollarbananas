from flask_marshmallow import Schema
from marshmallow.fields import Str, Float, List

class CommoditySchema(Schema):
    class Meta:
        fields = ['id', 'name', 'prices', 'avg_price']

    id = Str()
    name = Str()
    prices = List(Float())
    avg_price = Float()