import en from '@locales/en/index';
import mr from '@locales/mr/index';
import hi from '@locales/hi/index';

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
        default:
            t = en;
    }
    return t;
};

export default useLocale;
