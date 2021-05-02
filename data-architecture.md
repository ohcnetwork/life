## Life Data Architecture

The data served in Life is generated through a network of volunteers from various organizations working round the clock,  
The data flow has been build to ensure seamless integration with existing data collection platforms and to ensure Quick Updates/Sync.

Here are the various steps the data goes through before deployed in our main application.

1) **Data Cleaning and Preprocessing**  
Our Volunteers assist in converting the data collected by organizations into a [standard format](https://github.com/coronasafe/life/wiki/Life-Data-Structure) to ensure that all existing services using our [APIs](https://life-api.coronasafe.network/) won't have to rebuild their logic each time. The data is also sanitized to integrate with the existing data. Once the data is cleaned it is published as CSV Files and is sent to the backend for processing.

2) **Backend ( Python3/Django/Celery )** 
This is where the actual integration takes place. The backend takes a list of files, the periodicity of the sync ( update the data every X mins or so ), and the data's owner's details. This data can be updated without any downtime. The Backend syncs each file at the given periodicity and lets the owner know about the individual rows that failed validation so the owner can either delete the data or correct the validation error. The Backend also performs deduplication based on the fields that are required, Once the data is fetched it dumps the entire data category-wise as a [JSON](https://life-api.coronasafe.network/#api-v2) and a [CSV](https://life-api.coronasafe.network/#api-v2-csv) file for consumption. 
_These files can be directly consumed by an external organization trying to fetch data from us._ [Explore](https://github.com/coronasafe/care/tree/master/care/life/)

3) **Github Pipelines ( Python3 )**  
This is an extra step required to format the data in the front end's structure and partially summarise the data to ensure that the UI is as quick as possible. The pipeline also outputs [JSON files](https://github.com/coronasafe/life/tree/main/data) which can be consumed. This Pipeline can be cloned by anyone and can be modified to meet their requirements. [Explore](https://github.com/coronasafe/life/tree/main/scraper)

4) **FrontEnd Deployment ( Next Js )**  
This step builds a rendered static deployment using Next Js. [Explore](https://github.com/coronasafe/life/)

_Data/Code for every step listed here is fully Free and OpenSource._
_Post your queries in the [#coronasafe-life](https://rebuildearth.slack.com/archives/C01V4F31ZTM) channel in our Slack workspace_ 
