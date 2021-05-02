## Life Data Architecture

The data served in Life is generated through a network of volunteers from various organizations working round the clock,  
The data flow has been build to ensure seamless integration with existing data collection platforms and to ensure Quick Updates/Sync

Here are the various steps the data goes through before deployed in our main application.

1) **Data Cleaning and Pre processing**  
Our Volunteers assist in converting the data collected by organizations into a standard format so as to ensure that all existing services using our API's wont have to rebuild their logic each time. The data is also sanitised to integrate with the existing data. Once the data is cleaned it is published as CSV Files and are sent to the backend for processing.

2) **Backend ( Python3/Django/Celery )** 
This is the where the actual integration takes place. The backend takes a list of files, the periodicity of the sync ( update the data every X mins or so ) and the data's owners details. This data can be updated without any downtime. The Backedn syncs each file at the given periodicity and lets the owner know about the induvidual rows that failed validation so the owner can either delete the data or correct the validation error. The Backend also performs de duplication based on the fields that are required, Once the data is fetched it dumps the entire data category wise as a JSON and a CSV file for consumption.  
_These files can be directly consumed by an external organization trying to fetch data from us._

3) **Github Pipelines ( Python3 )**  
This is an extra step required to format the data in the front end's structure and partially summarise the data to ensure that the UI is as quick as possible. The pipeline also outputs JSON files which can be consumed. This Pipeline can be cloned by anyone and can be modified to meet their requirements.

4) **FrontEnd Deployment ( Next Js )**  
This step builds a rendered static deployment using Next Js. 

_Data/Code for every step listed here is fully Free and OpenSource._
_Post your queries in the #coronasafe-life channel in our Slack workspace_ 
