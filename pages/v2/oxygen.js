import React from 'react';
import { getOxygen } from '@lib/api_v2';
import V2Card from '@components/V2Card';

const OxygenV2 = () => {
    return (
        <div className="m-4">
            <div className="w-48 text-2xl mx-auto font-bold dark:text-white">Oxygen</div>
            <div className="dark:text-white w-64 mx-auto">
                {getOxygen().data.map((d) => (
                    <V2Card key={d.external_id} data={d} />
                ))}
            </div>
        </div>
    );
};

export default OxygenV2;
