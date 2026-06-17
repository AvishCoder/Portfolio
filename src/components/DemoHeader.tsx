import Link from "next/link";

interface DemoHeaderProps {
  industry: string;
  headline: string;
  subtitle: string;
  benefits: string[];
  gradient: string;
}

// Shared header used by /demo/gym, /demo/coaching, /demo/restaurant.
// Sits above the live <ChatInterface />.
export default function DemoHeader({
  industry,
  headline,
  subtitle,
  benefits,
  gradient,
}: DemoHeaderProps) {
  return (
    <section className="relative pt-24 pb-12 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          {industry}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
          >
            {headline}
          </span>
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-2.5 text-left text-sm text-gray-300 p-4 rounded-xl border border-white/[0.08] bg-[#0f0f0f]"
            >
              <div className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg
                  className="w-3 h-3 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="leading-relaxed">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="px-6 py-3 bg-primary-600 hover:bg-primary-500 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary-500/25 w-full sm:w-auto"
          >
            Get This For Your Business
          </Link>
          <Link
            href="/#demos"
            className="px-6 py-3 border border-white/10 hover:border-white/20 rounded-lg font-medium transition-all hover:bg-white/5 w-full sm:w-auto"
          >
            See Other Industries
          </Link>
        </div>

        <div className="mt-10 pt-10 border-t border-white/5">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Try the live chatbot below
          </p>
        </div>
      </div>
    </section>
  );
}
