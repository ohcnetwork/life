var Airtable = require('airtable');


// For some reason, this isn't working.
// Will have to hardcode this, unfortunately.
// https://community.airtable.com/t/urgent-react-nextjs-app-invalid-airtable-api-key-with-env/38031
// 
var apiKey = process.env.AIRTABLE_COVID_DATA_API_KEY;
var baseId = process.env.AIRTABLE_COVID_DATA_BASE_ID;


var base = new Airtable({
    apiKey: 'XXXXXXX'}) 
    .base('YYYYYYY');

/**

Airtable Fields
---------------
* Need to be manually added to the table this works for.

- UpVotes (Number): undefined by default. Count of upvotes
- DownVotes (Number): undefined by default. Count of downvotes.

**/

export const airtableUpVote = (tableName, recordId) => {
    // console.log('upvote', tableName, recordId);
    var upvotes = 0;
    base(tableName).find(recordId, function(err, record) {
        if (err) { console.error(err); return; }
        // console.log('Upvote: Retrieved', record.id, record.get('Name'), record.get('UpVotes'));
        if (!record.get('UpVotes')) {
            // console.log('upvotes is undefined, set to 0');
            upvotes = 0;
        }
        else {
            upvotes = record.get('UpVotes');
        }
        upvotes = upvotes + 1;
        //console.log('writing back new upvotes: ', upvotes);
        base(tableName).update([{
            "id": recordId,
            "fields": {
                "UpVotes": upvotes,
            },
        }], function( err, records) {
            console.log('Error in updating upvotes ', err);
        });
    });
}
                         
                        
export const airtableDownVote = (tableName, recordId) => {
    //console.log('downvote', tableName, recordId);
    var downvotes = 0;
    base(tableName).find(recordId, function(err, record) {
        if (err) { console.error(err); return; }
        //console.log('Downvote: Retrieved', record.id, record.get('Name'), record.get('DownVotes'));
        if (!record.get('DownVotes')) {
            // console.log('downvotes is undefined, set to 0');
            downvotes = 0;
        }
        else {
            downvotes = record.get('DownVotes');
        }
        downvotes = downvotes + 1;
        //console.log('writing back new downvotes: ', downvotes);
        base(tableName).update([{
            "id": recordId,
            "fields": {
                "DownVotes": downvotes,
            },
        }], function( err, records) {
            console.log('Error in updating downvotes ', err);
        });
    });
}

export const list = (tableName, maxRecords=10) => {
    base(tableName).select({
        // Selecting the first 3 records in Public view (dont touch):
        maxRecords: 10,
        view: "Public view (dont touch)"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {
            console.log(`Retrieved ${record.getId()} | ${record.get('Name')} | ${record.get('UpVotes')} | ${record.get('DownVotes')}`);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });
}

