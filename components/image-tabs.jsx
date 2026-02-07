"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState("Organise"); // organise, hired, boards

  return (
    <div>
      <section className="border-t bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Tabs */}
            <div className="flex flex-row justify-center mb-8 gap-2">
              <Button
                onClick={() => setActiveTab("Organise")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Organise" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Organise Applications
              </Button>
              <Button
                onClick={() => {
                  setActiveTab("Hired");
                }}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Get Hired
              </Button>
              <Button
                onClick={() => {
                  setActiveTab("Boards");
                }}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Manage Boards
              </Button>
            </div>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
              {activeTab === "Organise" && (
                <Image
                  src="/hero-images/hero1.png"
                  alt="Organise Applications"
                  width={1200}
                  height={800}
                />
              )}
              {activeTab === "Hired" && (
                <Image
                  src="/hero-images/hero2.png"
                  alt="Organise Applications"
                  width={1200}
                  height={800}
                />
              )}
              {activeTab === "Boards" && (
                <Image
                  src="/hero-images/hero3.png"
                  alt="Organise Applications"
                  width={1200}
                  height={800}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
