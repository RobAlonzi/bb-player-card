from flask import Flask, jsonify, request
from flask_cors import CORS
from nhlapi import *
from util import *

app = Flask(__name__)
CORS(app) # This will enable CORS for all routes

@app.route("/players/<player_id>")
def player(player_id):
    '''Returns player bio information (name, birthdate, birthplace, current team...)
    See https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md#people for more info'''
    res = get_player(player_id, params=request.args)
    return jsonify(res)

@app.route("/players/<player_id>/stats")
def playerstats(player_id):
    '''Returns player stat-splits.  
    @param "stats": determines stat splits in response (defaults to "statsSingleSeason")
    See https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md#people for more info'''
    res_season = get_player_stats(player_id, params=dict(stats='statsSingleSeason'))
    res_log = get_player_stats(player_id, params=dict(stats='gameLog'))
    res_career = get_player_stats(player_id, params=dict(stats='yearByYear'))
    res_player = get_player(player_id, params=request.args)

    career_nhl_stats = []

    if res_career[0] is not None:
        for stat in res_career[0]['splits']:
            if stat["league"]["name"] == "National Hockey League":
                career_nhl_stats.append(stat)

    return jsonify({
        "position": res_player['primaryPosition']['code'],
        "gamelog": res_log[0]['splits'] if len(res_log[0]['splits']) > 0 else [],
        "season": res_season[0]['splits'][0] if len(res_season[0]['splits']) > 0 else [],
        "career": career_nhl_stats[::-1],
    })

@app.route("/players/<player_id>/events")
def playerevents(player_id):
    '''Returns player event data.'''
    res_log = get_player_stats(player_id, params=dict(stats='gameLog'))
    res_player = get_player(player_id, params=request.args)
    events = []

    for game in res_log[0]['splits']:
        id = game['game']['gamePk']
        game_data = get_game(id)
        teams = {
            "opponent": game["opponent"],
            "team": game["team"]
        }
        events.append(find_player_events_by_game(player_id, teams, game_data['liveData']['plays']['allPlays']))

    return jsonify({
        "position": res_player['primaryPosition']['code'],
        "events": [item for sublist in events for item in sublist] 
    })    


@app.route("/players/<player_id>/shifts")
def playershifts(player_id):
    '''Returns player shift data.'''
    res_log = get_player_stats(player_id, params=dict(stats='gameLog'))
    res_player = get_player(player_id, params=request.args)
    shifts = []

    for game in res_log[0]['splits']:
        id = game['game']['gamePk']
        shift_data = get_game_shifts(id)
        teams = {
            "opponent": game["opponent"],
            "team": game["team"],
        }
        shifts.append(find_player_shifts_by_game(game['date'], player_id, teams, shift_data))    

    return jsonify({
        "position": res_player['primaryPosition']['code'],
        "shifts": [item for sublist in shifts for item in sublist] 
    })   


@app.route("/search/players/<search_string>")
def search(search_string):
    '''Returns active player matches based on input'''
    res = get_search_result(search_string)
    active_ids = []

    for result in res:
        result_list = result.split("|")
        # If the result is an active player
        if result_list[0] == 'p' and int(result_list[4]) == 1:
            active_ids.append({
                'id': int(result_list[1]),
                'last_name': result_list[2],
                'first_name': result_list[3]
            })

    return jsonify(active_ids)