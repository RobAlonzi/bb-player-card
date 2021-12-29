export const PLAY_TYPES = {
  FACEOFF: {
    id: "FACEOFF",
    types: ["Winner", "Loser"],
  },
  HIT: {
    id: "HIT",
    types: ["Hitter", "Hittee"],
  },
  GIVEAWAY: {
    id: "GIVEAWAY",
    types: ["PlayerID"],
  },
  GOAL: {
    id: "GOAL",
    types: ["Scorer", "Assist"],
  },
  SHOT: {
    id: "SHOT",
    types: ["Shooter", "Goalie"],
    secondaryCodes: ["shot_type", "soResult"],
  },
  MISSED_SHOT: {
    id: "MISSED_SHOT",
    types: ["Shooter"],
  },
  PENALTY: {
    id: "PENALTY",
    types: ["PenaltyOn", "DrewBy", "ServedBy"],
    secondaryCodes: ["pen_type"],
  },
  FIGHT: {
    id: "FIGHT",
    types: ["Fighter"],
  },
  TAKEAWAY: {
    id: "TAKEAWAY",
    types: ["PlayerID"],
  },
  BLOCKED_SHOT: {
    id: "BLOCKED_SHOT",
    types: ["Blocker", "Shooter"],
  },
};
