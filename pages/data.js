import { faAmbulance, faCapsules, faHandsHelping, faHospital, faLandmark, faLungsVirus, faPhoneAlt, faSyringe, faUserEdit, faUserMd, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Logo from "../components/Logo";

export default function DataForm() {


    const formsInfo = [
        {
            name: 'Oxygen',
            icon: faLungsVirus,
            description: "Source, Type, Delivery",
            link: 'https://airtable.com/shrjYwvwPhPY6h6Hw',
        },
        {
            name: 'Medicine/Injection/Chemist',
            description: "Distributor, Category, Address",
            icon: faCapsules,
            link: 'https://airtable.com/shrCNfkEdSTxeWAGg',
        },
        {
            name: 'Hospital',
            description: "District, Address, Contact",
            icon: faHospital,
            link: 'https://airtable.com/shrfZV2enmY9wge0F',
        },
        {
            name: 'Ambulance',
            description: "District, Address, Contact",
            icon: faAmbulance,
            link: 'https://airtable.com/shrAO7oA9qwh1OABJ',
        },
        {
            name: 'Plasma',
            description: "Organization, City, Contact",
            icon: faSyringe,
            link: 'https://airtable.com/shrtvIFkPjcUxRd1H',
        },
        {
            name: 'Helpline',
            description: "Category, Phone",
            icon: faPhoneAlt,
            link: 'https://airtable.com/shruCmaVNNXt1q1Uj',
        },
        {
            name: 'Doctor/Telemedicine/Consultation',
            icon: faUserMd,
            description: "Specialisation, City, Contact",
            link: 'https://airtable.com/shrg0KEI0qRfLRPRP',
        },
        {
            name: 'Support Groups (WhatsApp, Telegram etc)',
            icon: faUsers,
            description: "Platform, Category, Contact",
            link: 'https://airtable.com/shrf64QSuwSrzWPxo',
        },
        {
            name: 'Apply as volunteer',
            description: "Skills, Contact",
            icon: faHandsHelping,
            link: 'https://airtable.com/shrDiUIg7e1IWj6mz',
        },
        {
            name: 'Government Contact',
            description: "Source, City, Contact",
            icon: faLandmark,
            link: 'https://airtable.com/shr5IdHRDcFrOKLcg',
        },
    ];



    return (
        <div>
            <section className='flex flex-col items-center md:pt-5'>
                <a href="/" className="flex flex-col items-center cursor-pointer">
                    <Logo width={50} />
                    <h1 className='mt-1 font-black text-3xl text-gray-900'>LIFE</h1>
                </a>
                <h2 className='mt-4 font-semibold text-md text-gray-900 text-center'>Verified Crowd Sourced Emergency Services Directory</h2>
            </section>
            <section className="text-center text-xl my-3">
                Do you have verified data and want to add to the database?
            </section>
            <section className="max-w-full mx-auto mt-5 px-2 sm:px-4 lg:px-6">
                <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {
                        formsInfo.map((form, id) => {
                            return (
                                <li key={id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                                        <div className="flex-1 truncate">
                                            <div className="flex items-center space-x-3">
                                                <h3 className="text-gray-900 text-xl font-medium truncate">{form.name}</h3>
                                            </div>
                                            <p className="mt-1 text-gray-500 text-sm truncate">{form.description}</p>
                                        </div>
                                        <div className="w-10 h-10 bg-gray-300 flex justify-center items-center rounded-full flex-shrink-0">
                                            <FontAwesomeIcon icon={form.icon} className="w-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="-mt-px flex divide-x divide-gray-200">
                                            <div className="w-0 flex-1 flex">
                                                <a href={form.link} target="_blank" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center bg-blue-900 text-white py-4 text-sm font-medium border border-transparent rounded-b-lg hover:bg-blue-600">
                                                    <FontAwesomeIcon icon={faUserEdit} className="w-5" />
                                                    <span className="ml-3">Fill the Form</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>

        </div>

    )
}