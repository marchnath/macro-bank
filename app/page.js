"use client";

import { Card, CardContent } from "@/components/ui/card";

import {
  ArrowRight,
  Building2,
  Globe,
  Package,
  Plane,
  Truck,
} from "lucide-react";

import { useState } from "react";
import { motion } from "framer-motion";

import Component2 from "./component2";
import Component3 from "./component3";

import Nav from "./nav";
import Hero from "./hero";
import ConsultationForm from "./consultationForm";
import Services from "./services";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Services */}
      <Services />
      <Component2 />
      {/* Consultation Form */}
      <ConsultationForm />
      <Component3 />
    </div>
  );
}
