import states from '@data/states.json';
import topTenStatesAndDistricts from "@data/top_states_and_districts"

export const getAllStateNames = () => {
    return Object.keys(states).map(e => ({ type: "State", name: e }));
};

const isExactMatch = (record, text) => {
    return record.name?.toLowerCase().startsWith(text?.toLowerCase())
}

const isPartialMatch = (record, text) => {
    return record.name?.toLowerCase().includes(text?.toLowerCase())
}

export const getAllDistrictNames = () => {
    const stateNames = Object.keys(states);
    const districts = [];
    stateNames.forEach(e =>
        districts.push(
            ...states[e].map(i => ({ type: "District", name: i, state: e }))
        )
    );
    return districts.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
};

export const getSuggestedWord = searchText => {
    if (!searchText) return "";
    const states = getAllStateNames();
    const districts = getAllDistrictNames();
    const stateSuggestion = states.find(e => isExactMatch(e, searchText));
    const districtSuggestion = districts.find(e => isExactMatch(e, searchText));
    if (stateSuggestion) {
        const word = {
            ...stateSuggestion,
            displayText:
                searchText +
                stateSuggestion.name?.substring(
                    searchText.length,
                    stateSuggestion.length
                )
        };
        return word;
    }
    if (districtSuggestion) {
        const word = {
            ...districtSuggestion,
            displayText:
                searchText +
                districtSuggestion.name?.substring(
                    searchText.length,
                    districtSuggestion.length
                )
        };
        return word;
    }
    return { displayText: "" };
};

export const getSuggestedList = searchText => {
    if (!searchText) return topTenStatesAndDistricts;

    const RESULT_LIMIT = 10;

    const states = getAllStateNames().filter(e => isPartialMatch(e, searchText));
    const districts = getAllDistrictNames().filter(e => isPartialMatch(e, searchText));

    const wholeList = states.concat(districts);
    return wholeList
        .sort((a, _) => (isTrendingPlace(a.name) || isExactMatch(a, searchText) ? -1 : 0))
        .slice(0, RESULT_LIMIT);
};

export const isTrendingPlace = name => {
    return topTenStatesAndDistricts.find(e => e.name === name);
};
