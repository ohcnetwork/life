const needle = require('needle');
const querystring = require("querystring");
const endpointUrl = "https://covidconnect.vercel.app/api/data";

const getCovidConnectResults = async (finalParams) => {
    const res = await needle('get', endpointUrl, finalParams, {
        headers: {
            "User-Agent": "UA-in.covidfyi.api.web",
        }
    });
    
    if (res.body) {
        return {
            'res': res.body,
        }
    }
    else {
        // [E] represents error log
        console.log('[E] CovdConnect: Error in fetching CovidConnect results');
    }
}

// api/data?city=delhi&resource_type=demand&max_results=25
export default async (req, res) => {
    // [I] -> Info log
    console.log('[I] CovidConnect: req.query');
    var {city, resource_type, max_results} = req.query;
    var finalParams = {
        city,
        resource_type,
        max_results
    };
    var apiResponse = {'response' : 'dummy'};
    apiResponse = await getCovidConnectResults(finalParams);
    res.status(200).json(apiResponse);
}
