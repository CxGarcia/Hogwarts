import axios from 'axios';
import { navigate } from '@reach/router';

const pay = async (amount, token) => {

  axios
    .post('http://localhost:4000/checkout', {
      amount,
      token
    })
    .then((response) => {
      alert('Payment Success');
      navigate('/');

      console.log(response);

    })
    .catch((error) => {
      console.log('Payment Error: ', error);
      alert('Payment Error');
    });

};

export default pay;