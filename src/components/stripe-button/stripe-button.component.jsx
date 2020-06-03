import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_SBUBRloZQwKDVffwVZhX0by800gkEwRVIG';

  const onToken= token => {
    console.log(token);
    alert('Paiement Validé ');
  }

  return (
    <StripeCheckout
      label='Payer Maintenant '
      name='E-clothing'
      billingAdress
      shippingAddress
      // image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Votre total est de ${price}€`}
      amount={priceForStripe}
      panelLabel='Payer Maintenant'
      token={onToken}
      stripeKey={publishableKey}
      currency='EUR'
      country='FR'
    />
  );
};

export default StripeCheckoutButton;