import { useAxios } from '@vueuse/integrations/useAxios';
import instance from '@/utils/axios';

export const getCurrentRealty = () => {
  return useAxios('realty/638eee2cb7d2b1310a0b2981', instance);
};
