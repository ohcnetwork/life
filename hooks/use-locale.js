import en from '@locales/en/index';
import mr from '@locales/mr/index';
import hi from '@locales/hi/index';
import te from '@locales/te/index';
import ba from '@locales/ba/index';
import pa from '@locales/pa/index';
import gu from '@locales/gu/index';
import kn from '@locales/kn/index';
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
    UR: ur
};

const useLocale = (loc) => {
    const locale = languages[loc] || languages['EN'];
    return locale;
};

export default useLocale;
