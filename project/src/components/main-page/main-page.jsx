import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Promo from '../promo/promo';
import Converter from '../converter/converter';

export default function MainPage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Promo />
        <Converter />
      </main>
      <Footer />
    </>
  );
}
