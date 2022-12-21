import { useAxios } from '@vueuse/integrations/useAxios';
import instance from '@/utils/axios';

export const getCurrentRealty = () => {
  return useAxios('/', instance);
};
