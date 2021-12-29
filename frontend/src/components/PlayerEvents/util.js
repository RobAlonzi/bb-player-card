import { DateTime } from "luxon";
import { PLAY_TYPES } from "./types";

export function groupShotsByType(events, playerId) {
  const shots = {};

  const filteredEvents = filterEventsByTypes(
    [PLAY_TYPES.SHOT.id, PLAY_TYPES.MISSED_SHOT.id, PLAY_TYPES.GOAL.id],
    events
  );

  for (const event of filteredEvents) {
    const name = getEventName(event);
    const isGoal =
      event.event.result.eventTypeId === PLAY_TYPES.GOAL.id &&
      event.event.players[0].player.id === Number(playerId);

    if (shots[name]) {
      shots[name].shots += 1;

      if (isGoal) {
        shots[name].goals += 1;
      }
      continue;
    }

    shots[name] = {
      shots: 1,
      goals: isGoal ? 1 : 0,
    };
  }

  return Object.entries(shots).map(([key, value]) => ({
    type: key,
    Shots: value.shots,
    Goals: value.goals,
  }));
}

export function groupSavesByType(events, playerId) {
  const shots = {};

  const filteredEvents = filterEventsByTypes(
    [PLAY_TYPES.SHOT.id, PLAY_TYPES.GOAL.id],
    events
  );

  for (const event of filteredEvents) {
    const name = getEventName(event);
    const isGoal = event.event.result.eventTypeId === PLAY_TYPES.GOAL.id;

    if (shots[name]) {
      if (isGoal) {
        shots[name].goals += 1;
      } else {
        shots[name].saves += 1;
      }
      continue;
    }

    shots[name] = {
      saves: isGoal ? 0 : 1,
      goals: isGoal ? 1 : 0,
    };
  }

  return Object.entries(shots).map(([key, value]) => ({
    type: key,
    "Save Pct": value.saves / (value.saves + value.goals),
  }));
}

export function groupEventsByType(events) {
  const groups = {};

  for (const event of events) {
    const name = event.event.result.event;

    if (groups[name]) {
      groups[name] += 1;

      continue;
    }

    groups[name] = 1;
  }

  return Object.entries(groups).map(([key, value]) => ({
    type: key,
    Total: value,
  }));
}

export function groupPenaltiesByType(events, playerId) {
  const penalties = {};

  const filteredEvents = filterEventsByTypes(
    [PLAY_TYPES.PENALTY.id, PLAY_TYPES.FIGHT.id],
    events
  );

  for (const event of filteredEvents) {
    const name = getEventName(event);
    const isTaken = event.event.players[0].player.id === Number(playerId);
    const isDrawn =
      event.event.players[1] &&
      event.event.players[1].player.id === Number(playerId);
    const isServed =
      event.event.players[2] &&
      event.event.players[2].player.id === Number(playerId);

    if (penalties[name]) {
      penalties[name] = {
        taken: isTaken ? penalties[name].taken + 1 : penalties[name].taken,
        drawn: isDrawn ? penalties[name].drawn + 1 : penalties[name].drawn,
        served: isServed ? penalties[name].served + 1 : penalties[name].served,
      };

      continue;
    }

    penalties[name] = {
      taken: isTaken ? 1 : 0,
      drawn: isDrawn ? 1 : 0,
      served: isServed ? 1 : 0,
    };
  }

  return Object.entries(penalties).map(([key, value]) => ({
    type: key,
    Taken: value.taken,
    Drawn: value.drawn,
    Served: value.served,
  }));
}

export function formatEventForLog(event) {
  return {
    team: event.teams.team.name,
    opponent: event.teams.opponent.name,
    date: DateTime.fromISO(event.event.about.dateTime).toISODate(),
    period: event.event.about.period,
    periodTime: event.event.about.periodTime,
    type: event.event.result.event,
    secondaryType: event.event.result.secondaryType || "N/A",
    description: event.event.result.description,
    players: event.event.players
      .map((player) => `${player.player.fullName} - ${player.playerType}`)
      .join(", "),
  };
}

function filterEventsByTypes(types, events) {
  return events.filter((event) =>
    types.includes(event.event.result.eventTypeId)
  );
}

function getEventName(event) {
  const secondaryTypeEvents = [
    PLAY_TYPES.SHOT.id,
    PLAY_TYPES.GOAL.id,
    PLAY_TYPES.PENALTY.id,
  ];

  if (secondaryTypeEvents.includes(event.event.result.eventTypeId)) {
    return event.event.result.secondaryType;
  }

  return event.event.result.event;
}
