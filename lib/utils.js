import activeDistrictData from '../data/active_district_data.json';

export const parametreize = (string) => {
    return string.replace(/\s/gu, '_').toLowerCase();
};

export const humanize = (str) => {
    return str
        .replace(/^[\s_]+|[\s_]+$/g, '')
        .replace(/[_\s]+/g, ' ')
        .replace(/^[a-z]/, function (m) {
            return m.toUpperCase();
        });
};

export const activeDistricts = (page = 'all') => {
    if (page === 'all') return activeDistrictData.data;
    return activeDistrictData.data.filter((data) => data[page]);
};

export const statePaths = (page) => {
    const paths = [];
    activeDistricts(page).map((district) => {
        paths.push({
            params: {
                state: parametreize(district.state),
                district: parametreize(district.district)
            }
        });
    });
    return paths;
};

export const activeStates = (activeDistricts) =>
    activeDistricts.reduce(
        (acc, curr) => (acc.includes(curr.state) ? acc : [...acc, curr.state]),
        []
    );

export const statesStaticPaths = () => {
    const paths = [];
    activeStates(activeDistricts('all')).map((state) => {
        paths.push({
            params: {
                state: parametreize(state)
            }
        });
    });

    return paths;
};

export const parseDateString = (dateStr) => {
    const date = new Date(dateStr);

    if (date == "Invalid Date") return "";

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dateString = date.getDate() + " ";
    dateString += months[date.getMonth()] + " ";
    dateString += date.getFullYear() + " | ";
    if (date.getHours() === 0) {
        dateString += "12:";
    } else {
        dateString += date.getHours() < 10 ? "0" : "";
        dateString +=
            (date.getHours() > 12
                ? (date.getHours() - 12) < 10
                    ? "0" + (date.getHours() - 12)
                    : date.getHours() - 12
                : date.getHours()) + ":";
    }
    dateString +=
        (date.getMinutes() < 10 ? "0" + date.getMinutes()
            : date.getMinutes());
    dateString += date.getHours() > 11 ? " PM" : " AM";
    return dateString;
};

export const isDarkMode = () => {
    if (typeof window !== 'undefined') {
        return (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
    }
    return false;
};

export const isVerified = (verificationStatus) => {
    return verificationStatus &&
        verificationStatus.toLocaleLowerCase() == 'verified'
}
