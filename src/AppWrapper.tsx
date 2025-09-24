import React, { useState, useEffect } from 'react';
import UserAgreement from './components/useragreement/UserAgreement';

const AppWrapper: React.FC = () => {
  const [hasAgreed, setHasAgreed] = useState(false);

  useEffect(() => {
    const agreementStatus = localStorage.getItem('userAgreement');
    if (agreementStatus === 'accepted') {
      setHasAgreed(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('userAgreement', 'accepted');
    setHasAgreed(true);
  };

  if (!hasAgreed) {
    return <UserAgreement onAccept={handleAccept} />;
  }

  return (
    // Your main app content here
    <div>
      {/* Rest of your app components */}
    </div>
  );
};

export default AppWrapper;