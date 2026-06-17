import type { Metadata } from "next";
import ChatInterface from "@/components/ChatInterface";
import DemoHeader from "@/components/DemoHeader";

export const metadata: Metadata = {
  title: "AI Chatbot for Coaching Institutes",
  description:
    "See a live AI chatbot demo built for coaching institutes. Answers course, admission and fee questions and captures student leads 24/7.",
};

const systemPrompt = `You are a helpful AI assistant for "BrightMind Academy" — a coaching institute for competitive exams and school courses. You help visitors with:

- Courses Offered: IIT-JEE (₹45,000/year), NEET (₹40,000/year), Foundation (Class 8-10, ₹25,000/year), Board Exam Prep (₹15,000/year)
- Admission Process: Online application → Entrance test → Counseling → Enrollment. New batch starts every 3 months.
- Faculty: 25+ experienced teachers, most from IITs and AIIMS. Average teaching experience: 8+ years.
- Timings: Weekday batches (4 PM - 8 PM), Weekend batches (9 AM - 2 PM), Online live classes also available
- Student Support: Doubt clearing sessions, weekly tests, study material included, parent-teacher meetings monthly
- Results: 85% selection rate in JEE Mains, 200+ NEET selections last year
- Location: Kalu Sarai, New Delhi (near IIT Delhi)
- Demo Class: Free demo class available for all courses

For lead capture: If someone is interested, ask for student name, class, target exam, and parent's phone number.

Keep responses concise (2-3 sentences max), informative, and encouraging. If asked something outside your scope, redirect to academic topics.`;

const placeholders = [
  "What courses do you offer?",
  "How is the admission process?",
  "What are the fees for JEE coaching?",
  "Can I attend a demo class?",
];

export default function CoachingDemo() {
  return (
    <>
      <DemoHeader
        industry="Coaching Institute"
        headline="An Admissions Counsellor That Replies at 10 PM"
        subtitle="A live demo of a chatbot trained for coaching institutes. Ask anything about courses, fees or admissions."
        benefits={[
          "Answers course, batch & fee questions 24/7",
          "Captures parent enquiries with name, class & target exam",
          "Filters out tyre-kickers so your counsellors focus on real leads",
        ]}
        gradient="from-purple-500 to-pink-400"
      />
      <ChatInterface
        title="BrightMind Academy Assistant"
        subtitle="Guiding students to success"
        gradient="from-purple-500 to-pink-400"
        systemPrompt={systemPrompt}
        placeholders={placeholders}
      />
    </>
  );
}
