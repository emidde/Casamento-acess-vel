import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { ProductGallery } from './components/ProductGallery';
import { FinalCopy } from './components/FinalCopy';
import { Guarantee } from './components/Guarantee';
import { UpsellModal } from './components/UpsellModal';
import { FixedCTA } from './components/FixedCTA';
import { PurchaseNotifications } from './components/PurchaseNotifications';

function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const handlePurchaseClick = () => {
    setIsUpsellOpen(true);
  };

  const handleUpsellAccept = () => {
    setIsUpsellOpen(false);
    // Handle upsell acceptance logic here
    alert('Redirecionando para o pagamento do pacote completo por R$19,90');
  };

  const handleUpsellDecline = () => {
    setIsUpsellOpen(false);
    // Handle basic package purchase logic here
    alert('Redirecionando para o pagamento por R$14,90');
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <Hero />
      <Benefits />
      <Testimonials />
      <ProductGallery />
      <FinalCopy />
      <Guarantee />
      
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onAccept={handleUpsellAccept}
        onDecline={handleUpsellDecline}
      />
      
      <FixedCTA onClick={handlePurchaseClick} />
      <PurchaseNotifications />
      
      {/* Add padding bottom for mobile to account for fixed CTA */}
      <div className="h-20 sm:h-0"></div>
    </div>
  );
}

export default App;