import {
    faLungsVirus,
    faSyringe,
    faHospital,
    faAmbulance,
    faCapsules,
    faPhoneAlt,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

export let tabsInfo = [
    {
        name: 'All',
        icon: faGlobe,
        link: '/',
        color: 'text-purple-500',
        value: 'all'
    },
    {
        name: 'Oxygen',
        icon: faLungsVirus,
        link: '/oxygen',
        color: 'text-red-500',
        value: 'oxygen'
    },
    {
        name: 'Medicine',
        icon: faCapsules,
        link: '/medicine',
        color: 'text-green-500',
        value: 'medicine'
    },
    {
        name: 'Hospital',
        icon: faHospital,
        link: '/hospitals',
        color: 'text-indigo-500',
        value: 'hospitals'
    },
    {
        name: 'Ambulance',
        icon: faAmbulance,
        link: '/ambulance',
        color: 'text-blue-500',
        value: 'ambulance'
    },
    {
        name: 'Helpline',
        icon: faPhoneAlt,
        link: '/helpline',
        color: 'text-pink-500',
        value: 'helpline'
    },
    {
        name: 'Vaccine',
        icon: faSyringe,
        link: '/vaccine',
        color: 'text-pink-500',
        value: 'vaccine'
    }
];
