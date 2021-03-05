import axios from 'axios';

const pay = async (amount, token) => {

  axios
    .post('http://localhost:4000/checkout', {
      amount,
      token
    })
    .then((response) => {
      alert('Payment Success');
      console.log(response);

    })
    .catch((error) => {
      console.log('Payment Error: ', error);
      alert('Payment Error');
    });

};

export default pay;