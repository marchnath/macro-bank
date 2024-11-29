"use client";

import Nav from "./nav";
import Hero from "./hero";
import ConsultationForm from "./consultationForm";
import Services from "./services";
import Advantages from "./advantages";
import International from "./international";
import Steps from "./steps";
import Cost from "./cost";
import FAQ from "./faq";
import Partners from "./partners";
import Footer from "./footer";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Services */}
      <Services />
      {/* Features Section */}
      <Advantages />
      {/* International Section */}
      <International />

      <Steps />

      {/* Consultation Form */}

      <ConsultationForm />

      {/* Calculator Section */}
      {/* <Cost /> */}

      {/* FAQ Section */}
      <FAQ />

      {/* Collaboration Section */}
      <Partners />

      {/* Footer */}
      <Footer />
    </div>
  );
}
