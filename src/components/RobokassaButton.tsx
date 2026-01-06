import React from 'react';

const ROBOKASSA_URL = 'https://auth.robokassa.ru/Merchant/Index.aspx';

const RobokassaButton = () => {
  // Hardcoded test/demo values
  const merchantLogin = 'demo';
  const amount = '100.00';
  const invoiceId = '12345';
  const description = 'Тестовая покупка витаминов';
  const signatureValue = 'D1E2F3A4B5C6D7E8F9A0B1C2D3E4F5A6'; // Fake hash for demo
  const email = 'test@example.com';
  const culture = 'ru';

  return (
    <form action={ROBOKASSA_URL} method="POST" target="_blank">
      <input type="hidden" name="MerchantLogin" value={merchantLogin} />
      <input type="hidden" name="OutSum" value={amount} />
      <input type="hidden" name="InvId" value={invoiceId} />
      <input type="hidden" name="Description" value={description} />
      <input type="hidden" name="SignatureValue" value={signatureValue} />
      <input type="hidden" name="Email" value={email} />
      <input type="hidden" name="Culture" value={culture} />
      <button
        type="submit"
        className="px-6 py-3 bg-brand-green-600 text-white rounded-full hover:bg-brand-green-500 transition-colors text-lg font-medium shadow-lg"
      >
        Оплатить через Robokassa
      </button>
    </form>
  );
};

export default RobokassaButton; 