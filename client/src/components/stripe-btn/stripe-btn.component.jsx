import React from "react";
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'


const StripeButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JZ3dlSGqpX5B65eSEpcncrRfo7nz9Qb6EaWHix0sU77cfce6DXWS7kNq17TYsMQUH5ec0DeGxrl3rvCQDWlqbnZ00pMNLc73P'
    
    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            alert('succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };

    return(
        <StripeCheckout 
            label = 'Pay Now'
            name = 'Crown Clothing Ltd.'
            billingAddress 
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount ={priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeButton
