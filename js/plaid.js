// Initialize Plaid Link with your Plaid Link public key
const handler = Plaid.create({
  clientName: 'Finance Manager',
  // Replace 'your_public_key' with your actual Plaid public key
  key: 'your_public_key',
  env: 'sandbox', // Change this to 'development' or 'production' when you're ready
  product: ['transactions'],
  onSuccess: function(public_token, metadata) {
    // Send the public_token to your app server here.
    // You'll typically exchange the public token for an access token and store it
    // in your database to make authenticated requests to Plaid's APIs.
    console.log('Plaid Link onSuccess: ', public_token);
  },
  onExit: function(err, metadata) {
    // Optionally capture when the user exits the Plaid Link flow.
    console.log('Plaid Link onExit: ', err, metadata);
  }
});

document.getElementById('link-button').onclick = function() {
  handler.open();
};
