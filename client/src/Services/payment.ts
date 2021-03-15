import axios from 'axios';
import { navigate } from '@reach/router';
import { toast } from 'react-toastify';
import { Token } from 'react-stripe-checkout';

const pay = async (amount: number, token: Token): Promise<void> => {
  axios
    .post('http://localhost:4000/checkout', {
      amount,
      token
    })
    .then(() => {
      toast.success('Payment Success');
      navigate('/');
    })
    .catch((error) => {
      console.log('Payment Error: ', error);
      toast.error('Payment Error');
    });
};

export default pay;
