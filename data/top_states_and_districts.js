import resourceStats from "./resource_stats_v2.json"

export default [
    ...resourceStats.states?.slice(0, 6),
    ...resourceStats.districts?.slice(0, 6)
];
