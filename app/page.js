"use client";

import Nav from "./nav";
import Hero from "./hero";
import ConsultationForm from "./consultationForm";
import Services from "./services";
import Advantages from "./advantages";
import Advantages2 from "./advantages2";
import International from "./international";
import Steps from "./steps";
import Cost from "./cost";
import FAQ from "./faq";
import Partners from "./partners";
import Footer from "./footer";
import Hero2 from "./hero2";
import Service2 from "./service2";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      {/* <Hero /> */}
      <Hero2 />

      {/* Services */}
      <Service2 />
      {/* <Services /> */}
      {/* Features Section */}
      {/* <Advantages /> */}
      <Advantages2 />
      {/* International Section */}
      {/* <International />

      <Steps /> */}

      {/* Consultation Form */}

      {/* <ConsultationForm /> */}

      {/* Calculator Section */}
      {/* <Cost /> */}

      {/* FAQ Section */}
      {/* <FAQ /> */}

      {/* Collaboration Section */}
      {/* <Partners /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
