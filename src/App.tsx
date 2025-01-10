import React from 'react';
import {
  TrendingUp,
  Shield,
  Target,
  ChartLineUp,
  Briefcase,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Award,
  LineChart,
  Users,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Grow Your Wealth with a Trusted Expert
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              I'm Charandeep Kapoor—an IIT Kanpur graduate, NISM-certified Mutual Fund Advisor & Portfolio Manager, and Authorized Wealthy Partner.
            </p>
            
              <a href="https://calendly.com/charan-kapoor/30min?preview_source=et_card&month=2025-01" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2">
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            
          </div>
        </div>
      </header>

      {/* Performance Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Proven Performance Metrics</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Charandeep Kapoor's XIRR among ET Money investors is in</h3>
                <div className="text-green-500 text-4xl font-bold flex items-center justify-center gap-2">
                  <span className="text-3xl">🌿</span>
                  top 1%
                  <span className="text-3xl">🌿</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/chintu.jpeg"
                  alt="Portfolio Performance Chart"
                  className="w-full rounded-lg"
                />
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-gray-600">Nifty 50</div>
                    <div className="text-2xl font-bold">34.1%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-600 font-semibold">Your Portfolio</div>
                    <div className="text-3xl font-bold text-blue-600">85.7%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600">Nifty 50</div>
                    <div className="text-2xl font-bold">9.1%</div>
                  </div>
                </div>
                <div className="mt-8 text-center text-red-500 bg-red-50 p-4 rounded-lg">
                  &lt;1% investors are taking lesser risk while achieving similar or higher returns than me
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Proven Track Record & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <CredentialCard
              icon={<GraduationCap className="w-8 h-8 text-blue-600" />}
              title="IIT Kanpur Graduate"
              description="B.Tech in Electrical Engineering with top JEE ranks: AIR 638 (Advanced), AIR 272 (Main)."
            />
            <CredentialCard
              icon={<Award className="w-8 h-8 text-blue-600" />}
              title="NISM Certified"
              description="Certified Mutual Fund Advisor & Portfolio Manager with hedge fund experience."
            />
            {/* <CredentialCard
              icon={<LineChart className="w-8 h-8 text-blue-600" />}
              title="Exceptional Returns"
              description="85.7% XIRR on personal portfolio, consistently in the top 1% on ET Money"
            /> */}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose My Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<TrendingUp className="size-6" />}
              title="Proven Performance"
              description="Track record of delivering 50%+ XIRR through data-driven strategies."
            />
            <FeatureCard
              icon={<Shield className="size-6" />}
              title="Trust & Transparency"
              description="Full disclosure of strategies and regular performance updates."
            />
            <FeatureCard
              icon={<Target className="size-6" />}
              title="Personalized Approach"
              description="Tailored investment strategies based on your goals and risk profile."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <ProcessStep
                number="1"
                title="Share Your Goals"
                description="Fill out the initial form to share your financial goals and risk profile"
              />
              <ProcessStep
                number="2"
                title="Custom Strategy"
                description="I'll develop a personalized mutual fund strategy and present a clear roadmap"
              />
              <ProcessStep
                number="3"
                title="Easy Onboarding"
                description="Get started with Wealthy for transparent, real-time tracking of your investments"
              />
              <ProcessStep
                number="4"
                title="Ongoing Support"
                description="Receive regular performance updates and strategy adjustments as needed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Financial Future?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards professional portfolio management
          </p>
          <a href="https://calendly.com/charan-kapoor/30min?preview_source=et_card&month=2025-01" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2">
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold mb-4">
              IIT Kanpur Alumnus | Hedge Fund Experience | NISM Certified | Authorized Wealthy Partner
            </p>
            <p className="text-sm text-gray-400">
              Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CredentialCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white flex flex-col gap-6 px-6 py-8 rounded-xl shadow-lg border border-gray-100">
      <div>{icon}</div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-balance">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;