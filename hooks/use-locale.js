import en from '@locales/en/index';
import mr from '@locales/mr/index';
import hi from '@locales/hi/index';
import te from '@locales/te/index';

const useLocale = (loc) => {
    let t = loc;
    switch (loc) {
        case 'EN':
            t = en;
            break;
        case 'MR':
            t = mr;
            break;
        case 'HI':
            t = hi;
            break;
        case 'TE':
            t = te;
            break;
        default:
            t = en;
    }
    return t;
};

export default useLocale;
