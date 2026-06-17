import type { Metadata } from "next";
import ChatInterface from "@/components/ChatInterface";
import DemoHeader from "@/components/DemoHeader";

export const metadata: Metadata = {
  title: "AI Chatbot for Gyms & Fitness Centers",
  description:
    "See a live AI chatbot demo built for gyms and fitness centers. Answers membership plans, timings, trainer info and captures leads automatically.",
};

const systemPrompt = `You are a friendly AI assistant for "FitZone Gym" — a modern fitness center. You help visitors with:

- Membership Plans: Basic (₹1,500/month), Standard (₹2,500/month with trainer), Premium (₹4,000/month with personal trainer + diet plan)
- Gym Timings: Monday-Saturday 5:00 AM to 10:00 PM, Sunday 6:00 AM to 12:00 PM
- Trainers: 8 certified personal trainers available, specializing in weight training, CrossFit, yoga, and cardio
- Facilities: AC gym floor, separate cardio zone, yoga studio, steam room, locker rooms, parking
- Trial: Free 1-day trial available for new visitors
- Location: Sector 15, Noida (near Metro Station)

For lead capture: If someone seems interested, ask for their name, phone number, and preferred time slot so a trainer can call them back.

Keep responses concise (2-3 sentences max), friendly, and professional. Use simple language. If asked something outside your knowledge, politely redirect to gym-related topics.`;

const placeholders = [
  "What are your membership plans?",
  "What are the gym timings?",
  "Do you have personal trainers?",
  "Can I get a free trial?",
];

export default function GymDemo() {
  return (
    <>
      <DemoHeader
        industry="Gym & Fitness"
        headline="An AI Assistant That Sells Memberships While You Sleep"
        subtitle="A live demo of a chatbot trained for gyms and fitness centers. Ask anything below."
        benefits={[
          "Answers membership, timing & trainer questions 24/7",
          "Captures leads with name, phone & preferred callback time",
          "Hands off hot leads to your front desk in seconds",
        ]}
        gradient="from-blue-500 to-cyan-400"
      />
      <ChatInterface
        title="FitZone Gym Assistant"
        subtitle="Your 24/7 fitness companion"
        gradient="from-blue-500 to-cyan-400"
        systemPrompt={systemPrompt}
        placeholders={placeholders}
      />
    </>
  );
}
