import { toast } from 'react-toastify';

export const ErrorMsg = (error: boolean) => {
  const notify = () =>
    toast('Что-то пошло не так. Ошибка сети', {
      theme: 'dark',
      autoClose: 5000,
      position: 'top-right',
    });

  if (error) notify();
};
