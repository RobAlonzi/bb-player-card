'''This file contains helpful functions for querying the NHL's 
publicly accessible API.  This list of endpoints is by no means exhaustive.
'''
import requests
from flask import abort


nhl_url = 'https://statsapi.web.nhl.com/api/v1/'
alt_nhl_url = 'https://api.nhle.com/stats/rest/en/'


def basic_request(path, **kwargs):
    res = requests.get(path, **kwargs)
    if res.status_code == 200:
        return res.json()
    try:
        abort(res.status_code, res.json()['message'])
    except:
        abort(res.status_code, 'NHL API Error')

def nhl_request(path, **kwargs):
    return basic_request(nhl_url+path, **kwargs)

def get_player(player_id, params={}):
    response = nhl_request(f'people/{player_id}', params=params)
    return response['people'][0]

def get_player_stats(player_id, params={}):
    response = nhl_request(f'people/{player_id}/stats', params=params)
    return response['stats']

def get_teams(params={}):
    response = nhl_request('teams', params=params)
    return response['teams']

def get_team(team_id, params={}):
    response = nhl_request(f'teams/{team_id}', params=params)
    return response['teams'][0]

def get_team_stats(team_id, params={}):
    response = nhl_request(f'teams/{team_id}/stats', params=params)
    return response['stats']

def get_schedule(params={}):
    response = nhl_request('schedule', params=params)
    return response

def get_game(game_pk, params={}):
    response = nhl_request(f'game/{game_pk}/feed/live', params=params)
    return response['gameData']

def get_search_result(search_string):
    response = basic_request(f'https://suggest.svc.nhl.com/svc/suggest/v1/min_all/{search_string}/99999')
    return response['suggestions']