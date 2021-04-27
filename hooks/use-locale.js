import en from '@locales/en/index';
import mr from '@locales/mr/index';
import hi from '@locales/hi/index';
import te from '@locales/te/index';
import ba from '@locales/ba/index';
import pa from '@locales/pa/index';
import gu from '@locales/gu/index';
import kn from '@locales/kn/index';
import ma from '@locales/ma/index';
import ta from '@locales/ta/index';
import ur from '@locales/ur/index';

const languages = {
    EN: en,
    MR: mr,
    HI: hi,
    TE: te,
    BA: ba,
    PA: pa,
    GU: gu,
    KN: kn,
    TA: ta,
    UR: ur,
    MA: ma,
};

const transParse = (lang, type) => {
    // if the type doesn't exist on the lang send the default
    if (lang[type] === undefined) {
        return en[type];
    } else {
        for (let x in en[type]) {
            if (lang[type][x] === undefined) {
                lang[type][x] = en[type][x];
            }
        }
        return lang[type];
    }
};

const useLocale = (loc, type) => {
    return transParse(languages[loc], type);
};


export default useLocale;
