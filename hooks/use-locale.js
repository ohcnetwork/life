import { useRouter } from 'next/router';
import en from '../locales/en';
import mr from '../locales/mr';

const useLocale = () => {
  const router = useRouter();
  const { locale } = router;
  let t;
  console.log(locale);
  switch (locale) {
    case 'en':
      t = en;
      break;
    case 'mr':
      t = mr;
      break;
    default:
      t = en;
  }
  return t;
};

export default useLocale;
