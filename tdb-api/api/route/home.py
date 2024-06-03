from http import HTTPStatus

import flask
from flask import Blueprint
from flasgger import swag_from

from api.model.Commodity import Commodity
from api.model.welcome import WelcomeModel
from api.schema.CommoditySchema import CommoditySchema
from api.schema.welcome import WelcomeSchema
from api.services.CommodityService import CommodityService

home_api = Blueprint('api', __name__)
commodity_service = CommodityService()


@home_api.route('/')
@swag_from({
    'responses': {
        HTTPStatus.OK.value: {
            'description': 'Welcome to the Flask Starter Kit',
            'schema': WelcomeSchema
        }
    }
})
def welcome():
    """
    1 liner about the route
    A more detailed description of the endpoint
    ---
    """
    result = WelcomeModel()
    return WelcomeSchema().dump(result), 200


@home_api.route('/commodity/<commodity_name>')
@swag_from({
    'responses': {
        HTTPStatus.OK.value: {
            'description': 'Get commodity by name',
            'schema': CommoditySchema
        }
    }
})
def get_commodity(commodity_name):
    commodity = Commodity(commodity_name)
    commodity_service.enrich_commody(commodity)
    return CommoditySchema().dump(commodity), 200
