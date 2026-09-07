// AT&T speed monitor data - owned by the AT&T speed monitor agent.
// Update workflow: after each test, add ONE entry to the TOP of SPEED_TESTS
// (newest first) and commit only this file. att-speed-monitor.html renders
// cards, chart and table from this data - never edit the HTML for new data.
// down/up = Mbps (null = missed test). note = "" or short text.
const SPEED_TESTS = [
  
  {"t": "Sep 6, 9:51 PM", "slot": "evening", "down": 1278, "up": 1408, "note": "fired ~45 min late"},

  {
    "t": "Sep 6, 1:46 PM",
    "slot": "midday",
    "down": 1294,
    "up": 1320,
    "note": "fired ~45 min late"
  },
  {
    "t": "Sep 6, 8:45 AM",
    "slot": "morning",
    "down": 1299,
    "up": 1343,
    "note": "fired ~45 min late"
  },
  {
    "t": "Sep 5, 9:45 PM",
    "slot": "evening",
    "down": 1299,
    "up": 1344,
    "note": "fired ~45 min late"
  },
  {
    "t": "Sep 5, 1:45 PM",
    "slot": "midday",
    "down": 1275,
    "up": 1339,
    "note": "fired ~45 min late"
  },
  {
    "t": "Sep 5, 8:46 AM",
    "slot": "morning",
    "down": 1296,
    "up": 1407,
    "note": "fired ~45 min late"
  },
  {
    "t": "Sep 4, 9:46 PM",
    "slot": "evening",
    "down": 1299,
    "up": 1306,
    "note": "fired ~45 min late"
  },
  {
    "t": "Sep 4, 1:45 PM",
    "slot": "midday",
    "down": 1299,
    "up": 1272,
    "note": "fired ~45 min late"
  },
  {
    "t": "Sep 4, 8:31 AM",
    "slot": "morning",
    "down": 1273,
    "up": 1405,
    "note": "fired ~30 min late"
  },
  {
    "t": "Sep 3, 9:48 PM",
    "slot": "evening",
    "down": 1301,
    "up": 1360,
    "note": "fired ~45 min late"
  },
  {
    "t": "Sep 3, 1:57 PM",
    "slot": "midday",
    "down": 1274,
    "up": 1391,
    "note": "8 AM wake fired ~6h late; single run counted as midday"
  },
  {
    "t": "Sep 3",
    "slot": "morning",
    "down": null,
    "up": null,
    "note": "missed - wake fired ~6h late"
  },
  {
    "t": "Sep 2, 9:45 PM",
    "slot": "evening",
    "down": 1300,
    "up": 1333,
    "note": "fired ~45 min late"
  },
  {
    "t": "Sep 2, 8:49 AM",
    "slot": "morning",
    "down": 1299,
    "up": 1354,
    "note": "fired ~45 min late"
  },
  {
    "t": "Sep 2, 1:45 PM",
    "slot": "midday",
    "down": 1301,
    "up": 1300,
    "note": "fired ~45 min late"
  },
  {
    "t": "Sep 1, 9:45 PM",
    "slot": "evening",
    "down": 1274,
    "up": 1320,
    "note": "scheduled 9 PM run, fired ~45 min late"
  },
  {
    "t": "Sep 1, 1:12 PM",
    "slot": "midday",
    "down": 1285,
    "up": 1367,
    "note": "catch-up run ~1:12 PM after missed 8 AM slot"
  },
  {
    "t": "Sep 1",
    "slot": "morning",
    "down": null,
    "up": null,
    "note": "missed - monitoring downtime"
  },
  {
    "t": "Aug 31, 9:17 PM",
    "slot": "evening",
    "down": 1251,
    "up": 1358,
    "note": ""
  },
  {
    "t": "Aug 31, 1:17 PM",
    "slot": "midday",
    "down": 1299,
    "up": 1314,
    "note": ""
  },
  {
    "t": "Aug 31, 10:39 AM",
    "slot": "morning",
    "down": 1299,
    "up": 1348,
    "note": ""
  }
];
