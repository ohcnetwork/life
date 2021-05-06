import activeDistrictData from '@data/active_district_data_v2.json';
import { statesAndDistrict } from './api';

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

export const statePaths = () => {
    const paths = [];
    Object.entries(statesAndDistrict()).map(([state, districts]) => {
        districts.map((district) => {
            paths.push({
                params: {
                    state: parametreize(state),
                    district: parametreize(district)
                }
            });
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
    Object.keys(statesAndDistrict()).map((state) => {
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

    if (date == 'Invalid Date') return '';

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    let dateString = date.getDate() + ' ';
    dateString += months[date.getMonth()] + ' ';
    dateString += date.getFullYear() + ' | ';
    if (date.getHours() === 0) {
        dateString += '12:';
    } else {
        dateString += date.getHours() < 10 ? '0' : '';
        dateString +=
            (date.getHours() > 12
                ? date.getHours() - 12 < 10
                    ? '0' + (date.getHours() - 12)
                    : date.getHours() - 12
                : date.getHours()) + ':';
    }
    dateString += date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    dateString += date.getHours() > 11 ? ' PM' : ' AM';
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
    return verificationStatus && verificationStatus.toLocaleLowerCase().includes('verified');
};

export const copyToClipboard = (text) => {
    let temp = document.createElement('textarea');
    document.body.appendChild(temp);
    temp.value = text;
    temp.select();
    document.execCommand('copy');
    temp.remove();
};

export const linkifyDecorator = (decoratedHref, decoratedText, key) => {
    return (
        <span key={key} className="inline-flex w-1/2 xs:w-auto items-center">
            <a
                target="_blank"
                href={decoratedHref}
                className="truncate text-indigo-900 dark:text-primary-500 font-semibold">
                {decoratedText}
            </a>
        </span>
    );
};

export const copyTextGenerator = (resource, pageUrl) => {
    const name = `Name: ${resource.name ? resource.name : resource.type.toUpperCase()} `;
    const phone = `Contact: ${resource.phone} `;
    const info = `More Info: ${pageUrl.split('#')[0]}#${resource.id} `;
    return [name, phone, info].join('\n');
};

export const appendPhoneNumbers = (phone1, phone2) => {
    return extractPhoneNumbersFromString(phone1).concat(extractPhoneNumbersFromString(phone2));
};

const extractPhoneNumbersFromString = (phoneString) => {
    if (phoneString && phoneString !== null && phoneString != '') {
        const phones = humanize(phoneString.toString()).split(' ');
        return phones.map((number) =>
            number.split(',').length > 1 ? number.toString().replace(/[,]+/g, '') : number
        );
    }
    return [];
};

export const filterResourcesBy = (list, type) => {
    if (type === 'verified')
        return list.filter((e) => {
            return isVerified(e.verification_status);
        });
    if (type === 'not_verified')
        return list.filter((e) => {
            return !isVerified(e.verification_status);
        });
    return list;
};

/**
 * Generating Google Maps direction link based on latitude and longitude
 * @param {string} lat - latitude
 * @param {string} long - latitude
 */
 export const getGoogleMapsDirectionLink = (lat, long) => {
    if(lat && long){
        return `https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`;
    }
    else{
        return '';
    }
}

export const getHaversineDistance = (firstLocation, secondLocation) => {
    if (!firstLocation) return null;
    const earthRadius = 6371; // km
    const diffLat = ((secondLocation.lat - firstLocation.lat) * Math.PI) / 180;
    const diffLng = ((secondLocation.lng - firstLocation.lng) * Math.PI) / 180;
    const arc =
      Math.cos((firstLocation.lat * Math.PI) / 180) *
        Math.cos((secondLocation.lat * Math.PI) / 180) *
        Math.sin(diffLng / 2) *
        Math.sin(diffLng / 2) +
      Math.sin(diffLat / 2) * Math.sin(diffLat / 2);
    const line = 2 * Math.atan2(Math.sqrt(arc), Math.sqrt(1 - arc));
    const distance = earthRadius * line;
    return distance.toFixed();
};
