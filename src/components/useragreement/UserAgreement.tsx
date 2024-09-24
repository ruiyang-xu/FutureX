import React from 'react';

interface UserAgreementProps {
  onAccept: () => void;
}

const UserAgreement: React.FC<UserAgreementProps> = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-lg mx-auto relative">
        <div className="mt-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Legal Notice</h2>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            FutureX Fund Management (Hong Kong) Limited is a subsidiary of FutureX Capital Limited, which has been licensed by the Securities and Futures Commission in Hong Kong to engage in Type 4 (Advising on Securities) and Type 9 (Asset Management) regulated activities.
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            FutureX Fund Management (Hong Kong) Limited is regulated by the Securities and Futures Commission of Hong Kong to provide investment services to Professional Investors only. The term "professional investor" is as defined in the Securities and Futures Ordinance and its subsidiary legislation.
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            By visiting this website, you agree to be bound by the content of this disclaimer which may be amended by us from time to time and displayed on this website. In case of discrepancies between the English and Chinese versions, the English version shall prevail. The contents of this website have not been reviewed by the Securities and Futures Commission or any regulatory authority in Hong Kong.
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            The information on this website is provided for Hong Kong residents and for reference only. By viewing this website, you acknowledge that you have read and accepted the terms and conditions of accessing this website. If you do not agree to be bound by the terms of use, you should exit this website. Investment involves risks. Past performance is not indicative of future performance. The information provided herein is subject to change without further notice.
          </p>
          <button 
            onClick={onAccept} 
            className="mt-4 bg-blue-500 p-2 rounded text-sm md:text-base lg:text-lg"
          >
            I Agree and Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAgreement;