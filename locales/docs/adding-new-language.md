# Adding a new Language

For translations of Existing Language:

[Please Refer This](https://github.com/coronasafe/life/issues/109)

All Translations are inside the [`/locales` ]()folder

Each language has a Folder with the Name of its Respective Code [Based on this](https://forums.asp.net/t/1250681.aspx?need+locale+code+for+an+Indian+language).

For example: English Translation would be in `/locales/en` and Marathi in `/locales/mr`

Each File Inside the Language Folder would have Multiple Files based te generate the template for the language:

```bash
python locales/locale_generator.py <LANG_CODE>
```

It would generate the Folder and Files.

By Default it would add files with English Translation and you have add translations for the words,phrases you know because we want a fallback if the translation doesn't exists.

For Example Home Page has English Translation in `/locales/en/home.js`

```js
export default {
    title: 'Life',
    description: 'Verified Crowd Sourced Emergency Services Directory',
    oxygen: 'Oxygen',
    medicine: 'Medicine',
    hospital: 'Hospital',
    ambulance: 'Ambulance',
    helpline: 'Helpline',
    plasma: 'Plasma',
    searchPlaceholder: 'Search for availability in a State or District',
    state: 'State',
    district: 'District',
    covid19Stats: 'Covid19 Statistics',
    oxygenRequirements: 'Oxygen Requirements',
    contributeData: 'Contribute Verified Data',
    campaigns: 'Campaigns',
    partnerWithUs: 'Partner With Us',
    curatedBy: 'Curated By',
    supportedBy: 'Supported By',
    poweredBy: 'Powered By',
    github: 'Github',
    database: 'Database',
    about: 'About'
};
```

Here the `key` is the value of word we want to be translated and the `value` is the translated word of the `key` in the respective language.

To add `marathi` translations to the Home Page

Gotta create a file in `/locales/mr/home.js` and add the following :

```js
export default {
    title: 'लाइफ़',
    description: 'सत्यापित क्रोड सोर्सिड इमर्जन्सी सर्व्हिसेस निर्देशिका',
    oxygen: 'ऑक्सिजन',
    medicine: 'औषध',
    hospital: 'रुग्णालय',
    ambulance: 'रुग्णवाहिका',
    helpline: 'हेल्पलाइन',
    plasma: 'प्लाझ्मा',
    searchPlaceholder: 'राज्य किंवा जिल्ह्यात उपलब्धतेचा शोध घ्या',
    state: 'राज्य',
    district: 'जिल्हा',
    covid19Stats: 'कोविड 19 आकडेवारी',
    oxygenRequirements: 'ऑक्सिजन आवश्यकता',
    contributeData: 'सत्यापित डेटाचे योगदान द्या',
    campaigns: 'मोहिमा',
    partnerWithUs: 'आमच्यासह भागीदार',
    curatedBy: 'क्युरेटेड बाय',
    supportedBy: 'समर्थित',
    poweredBy: 'द्वारा समर्थित',
    github: 'गीथब',
    database: 'डेटाबेस',
    about: 'बद्दल'
};
```

Things to do After adding a New Language:

Update `/hooks/use-locale.js`

```diff
import en from '@locales/en/index';
+ import mr from '@locales/mr/index';

const languages = {
    'EN': en,
+    'MR': mr
}
```

Update `/locales/index.js`

```diff
export default [
    {
        name: 'English',
        code: 'EN'
    },
+    {
+        name: 'मराठी',
+        code: 'MR'
+    },
];
```
