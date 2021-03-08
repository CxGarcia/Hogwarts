import axios from 'axios';
import { navigate } from '@reach/router';
import { toast } from 'react-toastify';

const pay = async (amount, token) => {

  axios
    .post('http://localhost:4000/checkout', {
      amount,
      token
    })
    .then((response) => {
      toast.success('Payment Success');
      navigate('/');
    })
    .catch((error) => {
      console.log('Payment Error: ', error);
      toast.error('Payment Error');
    });

};

export default pay;