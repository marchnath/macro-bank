"use client";
import { motion } from "framer-motion";
import {
  MapIcon,
  Globe2Icon,
  ShieldCheckIcon,
  TimerIcon,
  TruckIcon,
  SearchIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Advantages from "./advantages";
import International from "./international";
import Steps from "./steps";

export default function Component2() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-white">
      <div className="container px-4 py-24 mx-auto">
        {/* Features Section */}
        <Advantages />
        {/* International Section */}
        <International />

        <Steps />
      </div>
    </div>
  );
}
