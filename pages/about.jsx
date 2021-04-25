import React from 'react';
import Breadcumb from '@components/Breadcumb';

const About = () => {
    const h1Class = `text-4xl`;
    const h2Class = `text-xl mt-5`;
    const pClass = `text-blue-500 mt-2 text-md`;
    const aClass = `underline text-primary-600 hover:text-primary-800 visited:text-purple-600`;
    return (
        <>
            <div className="pt-10">
                <Breadcumb list={[{ href: null, name: 'About' }]} />
            </div>

            <div className="py-10 dark:text-gray-500 text-gray-900 dark font-bold px-2">
                <h1 className={h1Class}>About</h1>
                <h2 className={h2Class}>Are you official?</h2>
                <p className={pClass}>No.</p>
                <h2 className={h2Class}>
                    What are your sources? How is the data gathered for this project?
                </h2>
                <p className={pClass}>
                    We are using multiple sources to obtain data. Our internal volunteer team scouts
                    for data from circulars, notices, tweets, other databases, websites. We also
                    obtain significant data from crowdsourced channels like - forms submitted by
                    common people. Partner initiatives engaged in similar list creation have merged
                    efforts with us to share their verified information.{' '}
                </p>
                <p className={pClass}>
                    The data is validated by a group of volunteers and published into an Airtable
                    sheet and an API. API is available for all at{' '}
                    <a className={aClass} href="https://life-api.coronasafe.network/">
                        life-api.coronasafe.network
                    </a>{' '}
                    . We would love it if you can use this data in the fight against this virus.
                </p>
                <h2 className={h2Class}>Where can I find the data for this?</h2>
                <p className={pClass}>
                    All the data is available through an
                    <a className={aClass} href="https://life-api.coronasafe.network/">
                        {' '}
                        API
                    </a>
                </p>
                <p className={pClass}>
                    Do file an issue at{' '}
                    <a className={aClass} href="https://github.com/coronasafe/life/">
                        Github
                    </a>{' '}
                    if you have feedbacks / want to report a bug.{' '}
                </p>
                <h2 className={h2Class}>Who are you?</h2>
                <p className={pClass}>
                    We are a group of dedicated volunteers who curate and verify the data coming
                    from several sources. CovidFYI - aggregates covid resources in the form of a
                    directory repository to help people looking for information. We never collect or
                    expose any personally identifiable data regarding the patients. We do not do
                    1-on-1 handling of cases. This is a product of collaboration - Covidfyi, a
                    Swasth initiative, backed by Coronasafe, with Stepone volunteers, PIIndia,
                    medical support group, Indian helpline, IIM-K community support (many more).
                </p>
                <h2 className={h2Class}>How often do you verify your information?</h2>
                <p className={pClass}>
                    We verify information periodically, however, due to the size of data, please
                    accept our apologies in case you do not find what you were looking for. We will
                    continue to add, verify, clean the data. Since we are only as good as the data
                    hope we are able to save lives. Look forward to your support. Thanks to
                    everyone, wouldn&#39;t have been possible without you all.
                </p>
                <p className={pClass}>
                    Why are you guys putting in time and resources to do this while not gaining a
                    single penny from it? We believe in the true spirit of collaboration,
                    crowdsourcing, the democratization of data, and volunteering. Please support us
                    to save lives! Join us.{' '}
                </p>
                <h2 className={h2Class}>How can you volunteer with us?</h2>
                <p className={pClass}>
                    <a className={aClass} href="https://youtu.be/PMEhgHdmRkQ">
                        Our tutorial on how to help us on airtable
                    </a>
                    {` `}
                    Add verified data (that doesn&#39;t already exist) Verify existing data and
                    update verification status Help people 1-1 on other platforms by sharing
                    contact/links from covidfyi Innovate on product related ideas Handle social
                    media &amp; marketing Manage operations, volunteers, onboarding Decide which
                    team you want to join or just stick around to pitch in whenever there is call
                    for help!.
                </p>
                <p className="mt-2">
                    <a className={aClass} href="https://chat.suraksha.network/">
                        Join our Slack
                    </a>
                </p>
                <h2 className={h2Class}>
                    What to do if you have verified data and want to add to Covidfyi Database?
                </h2>
                <p className={pClass}>
                    <a
                        className={aClass}
                        href="https://www.instagram.com/p/CN-6uNIBa7q/?igshid=1x1hs3m8omw9f">
                        Recommend you to read this before adding data Tips on how to share COVID
                        resources online
                    </a>
                </p>
                <h2 className={h2Class}>Have bulk verified data?</h2>
                <p className={pClass}>
                    In case you want to add data in bulk, in excel format, and you are not
                    comfortable with airtable, send it to us in google sheet or excel format on
                    <a className={aClass} href="mailto:simran@covidfyi.in">
                        {' '}
                        simran@covidfyi.in
                    </a>{' '}
                    or reach out to us anywhere. Join our team to add information.
                </p>
                <h2 className={h2Class} id="partner">
                    Are you a similar initiative like ours? Or know one?
                </h2>
                <p className={pClass}>
                    Run by your company, friends, college, on social media that have similar data.
                    Reach out to them, talk about us. Earnest request to get other initiatives to
                    collaborate as consolidation is important in the problem that we are solving. We
                    don&#39;t seek credits, we just want this information to reach. Our goal is to
                    provide the right information to the right people at the right time in the right
                    manner.
                </p>
                <h2 className={h2Class} id="disclaimer">
                    Disclaimer
                </h2>
                <p className={pClass}>
                    COVID Information Platform ({<a className={aClass} href="https://liferesources.in/" target="_blank">https://liferesources.in/</a>}) is a platform created by Swasth Digital Health Foundation (“Swasth”), CovidFYI and Coronasafe Network for providing verified crowd sourced emergency services for COVID-19 emergencies across India. 
                </p>
                <p className={pClass}>
                    All data and information provided in the COVID Information Platform are verified by a group of volunteers to the best of their abilities and Swasth disclaims all responsibility for any data/information provided on the COVID Information Platform. Swasth, CovidFYI and Coronasafe Network shall under no circumstances be held liable for any direct, indirect, incidental, consequential, special, punitive, exemplary, or any other damages arising out of the use of the COVID Information Platform. There is no assurance by Swasth, CovidFYI and Coronasafe Network of any specified outcomes of the use of the COVID Information Platform. The users understand that by using any data or information provided on the COVID Information Platform shall be at their own risk and violation and that Swasth is not responsible for any consequences for offering such data/information.
                </p>
            </div>
        </>
    );
};

export default About;
