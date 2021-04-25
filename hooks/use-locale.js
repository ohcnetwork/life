import en from '@locales/en/index';
import mr from '@locales/mr/index';

const useLocale = (loc) => {
    let t = loc;
    switch (loc) {
        case 'EN':
            t = en;
            break;
        case 'MR':
            t = mr;
            break;
        default:
            t = en;
    }
    return t;
};

export default useLocale;
