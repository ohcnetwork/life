import {
    faAmbulance,
    faCapsules,
    faHandsHelping,
    faHospital,
    faLandmark,
    faLungsVirus,
    faPhoneAlt,
    faUserEdit,
    faUserMd,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '@components/Logo';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';

export default function DataForm() {
    const { locale } = useLocaleContext();
    const th = useLocale(locale, 'home');
    const t = useLocale(locale, 'data');
    const formsInfo = [
        {
            name: `${th.oxygen}`,
            icon: faLungsVirus,
            description: `${t.sourceType}`,
            link: 'https://airtable.com/shrjYwvwPhPY6h6Hw'
        },
        {
            name: `${t.medicineInjection}`,
            description: `${t.medicineDes}`,
            icon: faCapsules,
            link: 'https://airtable.com/shrCNfkEdSTxeWAGg'
        },
        {
            name: `${th.hospital}`,
            description: `${t.hospitalDes}`,
            icon: faHospital,
            link: 'https://airtable.com/shrfZV2enmY9wge0F'
        },
        {
            name: `${th.ambulance}`,
            description: `${t.hospitalDes}`,
            icon: faAmbulance,
            link: 'https://airtable.com/shrAO7oA9qwh1OABJ'
        },
        {
            name: `${th.helpline}`,
            description: `${t.helplineDes}`,
            icon: faPhoneAlt,
            link: 'https://airtable.com/shruCmaVNNXt1q1Uj'
        },
        {
            name: `${t.doctorTele}`,
            icon: faUserMd,
            description: `${t.doctorDes}`,
            link: 'https://airtable.com/shrg0KEI0qRfLRPRP'
        },
        {
            name: `${t.supportGroup}`,
            icon: faUsers,
            description: `${t.supportDes}`,
            link: 'https://airtable.com/shrf64QSuwSrzWPxo'
        },
        {
            name: `${t.applyVol}`,
            description: `${t.applyDes}`,
            icon: faHandsHelping,
            link: 'https://airtable.com/shrDiUIg7e1IWj6mz'
        },
        {
            name: `${t.govtContact}`,
            description: `${t.govtDes}`,
            icon: faLandmark,
            link: 'https://airtable.com/shr5IdHRDcFrOKLcg'
        }
    ];

    return (
        <div>
            <section className="flex flex-col items-center md:pt-5">
                <a href="/" className="flex flex-col items-center cursor-pointer">
                    <Logo width={50} />
                    <h1 className="mt-1 font-black text-3xl text-gray-900 dark:text-gray-100">
                        {th.title}
                    </h1>
                </a>
                <h2 className="mt-4 font-semibold text-md text-gray-900 text-center dark:text-gray-200">
                    {th.description}
                </h2>
            </section>
            <section className="text-center text-xl my-3 dark:text-gray-400">{t.question}</section>
            <section className="max-w-full mx-auto mt-5 px-2 sm:px-4 lg:px-6">
                <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {formsInfo.map((form, id) => {
                        return (
                            <li
                                key={id}
                                className="col-span-1 bg-white dark:bg-gray-1200 rounded-lg shadow divide-y divide-gray-200">
                                <div className="w-full flex items-center justify-between p-6 space-x-6">
                                    <div className="flex-1 truncate">
                                        <div className="flex items-center space-x-3">
                                            <h3 className="text-gray-900 dark:text-gray-200 text-xl font-medium truncate">
                                                {form.name}
                                            </h3>
                                        </div>
                                        <p className="mt-1 text-gray-700 dark:text-gray-300 text-sm truncate">
                                            {form.description}
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 bg-gray-300 dark:bg-gray-1100 flex justify-center items-center rounded-full flex-shrink-0">
                                        <FontAwesomeIcon
                                            icon={form.icon}
                                            className="w-5 dark:text-gray-300"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="-mt-px flex divide-x divide-gray-200">
                                        <div className="w-0 flex-1 flex">
                                            <a
                                                href={form.link}
                                                target="_blank"
                                                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center bg-blue-900 text-white py-4 text-sm font-medium border border-transparent rounded-b-lg hover:bg-blue-600">
                                                <FontAwesomeIcon
                                                    icon={faUserEdit}
                                                    className="w-5"
                                                />
                                                <span className="ml-3">{t.fillTheForm}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}
