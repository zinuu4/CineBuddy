import { toast } from 'react-toastify';

export const ErrorMsg = (error: boolean) => {
  const notify = () =>
    toast('Something went wrong. Network error', {
      theme: 'dark',
      autoClose: 5000,
      position: 'top-right',
    });

  if (error) notify();
};
