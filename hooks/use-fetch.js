import { useState, useEffect } from 'react';

const BASE_URL = 'https://covidconnect.vercel.app/api/1.1/data';

function useFetch({ city, materialType, resourceType = 'supply', maxResults = 25 }) {

  const url = new URL(BASE_URL);

  url.searchParams.append('city', city);
  url.searchParams.append('resource_type', resourceType);
  url.searchParams.append('max_results', maxResults);
  materialType && url.searchParams.append('material_type', materialType?.toLowerCase());

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function fetchUrl() {
          if (!city.length) {
              return;
          }
          const response = await fetch(url.href);
          const temp = await response.json();
          const json = {
              res: temp
          };
          if (
              !json ||
              !json.res ||
              !json.res.response ||
              !json.res.response.api_response ||
              !json.res.response.api_response.statuses
          ) {
              setData([]);
          } else {
              setData(json.res.response.api_response.statuses);
          }
          setLoading(false);
      }
      fetchUrl();
  }, [city, materialType, resourceType]);
  return [data, loading];
}

export default useFetch;
