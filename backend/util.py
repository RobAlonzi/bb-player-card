'''This file contains helpful functions for parsing API data'''


def find_player_events_by_game(player_id, teams, plays):
    events = []

    for play in plays:
      if 'players' in play:
        for player in play['players']:
          if player['player']['id'] == int(player_id):
            events.append({
              "teams": teams,
              "event": play
            })

    return events


def find_player_shifts_by_game(date, player_id, teams, shifts):
  player_shifts = []
  for shift in shifts:
    if shift["playerId"] == int(player_id) and shift['duration'] is not None:
      player_shifts.append({
        "date": date,
        "teams": teams,
        "shift": shift
      })
  
  return player_shifts[::-1]