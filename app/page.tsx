import Link from "next/link";
import RotatingEarth from "@/components/ui/wireframe-dotted-globe";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2C2A26] font-sans selection:bg-[#E2DECF] selection:text-[#2C2A26] scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFCFB]/80 backdrop-blur-xl border-b border-[#EBE8E0] transition-all">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 relative z-10">
            <span className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2C2A26]">CouncilFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[14px] font-medium">
            <a href="#how-it-works" className="text-[#86827A] hover:text-[#2C2A26] transition-colors duration-300">How it works</a>
            <a href="#platform" className="text-[#86827A] hover:text-[#2C2A26] transition-colors duration-300">Features</a>
            <a href="#pricing" className="text-[#86827A] hover:text-[#2C2A26] transition-colors duration-300">Pricing</a>
            <a href="#faq" className="text-[#86827A] hover:text-[#2C2A26] transition-colors duration-300">FAQ</a>
          </div>
          <div className="flex items-center gap-6 text-[14px] font-medium relative z-10">
            <Link href="/auth/sign-in" className="hidden sm:block text-[#716E68] hover:text-[#2C2A26] transition-colors duration-300">
              Log in
            </Link>
            <Link href="/auth/sign-in" className="bg-[#2C2A26] text-[#FDFCFB] px-6 py-2.5 rounded-md hover:bg-[#1A1917] transition-all duration-300 shadow-sm hover:shadow-md">
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-40 pb-24 md:pt-[240px] md:pb-[180px] overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
          <RotatingEarth width={1200} height={1200} className="scale-125 md:scale-150" />
        </div>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFB]/20 via-transparent to-[#FDFCFB] z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 mb-8 text-[11px] font-semibold tracking-[0.25em] text-[#86827A] uppercase border border-[#EBE8E0] rounded-full bg-white/60 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C2A26] animate-pulse"></span>
            The easiest way to find new clients
          </span>
          <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[6rem] font-light tracking-[-0.02em] text-[#2C2A26] leading-[1.05] font-display mb-8">
            Get more clients,<br className="hidden md:block" /> without the busywork.
          </h1>
          <p className="text-[17px] md:text-[21px] text-[#716E68] max-w-3xl font-light leading-relaxed mb-12">
            Stop spending hours finding leads and writing emails. CouncilFlow uses AI to find the right companies and writes perfect emails for you in seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Link href="/auth/sign-in" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#2C2A26] text-[#FDFCFB] px-10 py-4 rounded-md text-[15px] font-medium transition-all duration-300 hover:bg-[#1A1917] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] hover:-translate-y-0.5">
              Start your 14-day trial
            </Link>
            <a href="#how-it-works" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#2C2A26] border border-[#EBE8E0] px-10 py-4 rounded-md text-[15px] font-medium transition-all duration-300 hover:bg-[#F7F6F2] hover:border-[#D5D1C6] shadow-sm">
              See how it works
            </a>
          </div>
          <p className="mt-8 text-[13px] text-[#A19D94] font-medium">No credit card required. Setup takes 3 minutes.</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-20 border-y border-[#EBE8E0] bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#A19D94] mb-10 font-semibold">Used by modern law firms everywhere</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 mix-blend-multiply">
            <span className="font-display font-medium text-2xl tracking-wide text-[#86827A]">Artemis Law</span>
            <span className="font-display font-medium text-2xl tracking-wide text-[#86827A]">Vanguard Partners</span>
            <span className="font-display font-medium text-2xl tracking-wide text-[#86827A]">Equinox Legal</span>
            <span className="font-display font-medium text-2xl tracking-wide text-[#86827A]">Meridian Counsel</span>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 md:py-[180px] bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#A19D94] uppercase mb-6 block">The Workflow</span>
            <h2 className="text-[2.5rem] md:text-[4rem] font-light tracking-[-0.01em] text-[#2C2A26] font-display mb-8">Simple as 1, 2, 3.</h2>
            <p className="text-[17px] md:text-[21px] text-[#716E68] font-light leading-relaxed">
              We took the hardest parts of business development and made them automatic. Here is how easy it is to grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative">
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-[#EBE8E0] z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#2C2A26] text-white rounded-full flex items-center justify-center text-xl font-medium mb-10 shadow-lg">1</div>
              <h3 className="text-[22px] font-medium text-[#2C2A26] mb-4">Find Leads</h3>
              <p className="text-[#716E68] text-[15px] font-light leading-relaxed">
                Just type a company name or industry. Our AI finds the right people and their contact info instantly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#2C2A26] text-white rounded-full flex items-center justify-center text-xl font-medium mb-10 shadow-lg">2</div>
              <h3 className="text-[22px] font-medium text-[#2C2A26] mb-4">AI Research</h3>
              <p className="text-[#716E68] text-[15px] font-light leading-relaxed">
                The AI reads their website and latest news. It learns exactly what they do so you don't have to.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#2C2A26] text-white rounded-full flex items-center justify-center text-xl font-medium mb-10 shadow-lg">3</div>
              <h3 className="text-[22px] font-medium text-[#2C2A26] mb-4">Send & Close</h3>
              <p className="text-[#716E68] text-[15px] font-light leading-relaxed">
                CouncilFlow writes a perfect, personal email. You just click send and watch the meetings roll in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 md:py-[180px] bg-[#F7F6F2]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-light tracking-[-0.01em] text-[#2C2A26] font-display mb-8">Better than doing it by hand.</h2>
          </div>
          
          <div className="bg-white border border-[#EBE8E0] rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#FDFCFB] border-b border-[#EBE8E0]">
                  <th className="p-8 text-[11px] uppercase tracking-widest text-[#A19D94] font-semibold">Feature</th>
                  <th className="p-8 text-[11px] uppercase tracking-widest text-[#A19D94] font-semibold">The Old Way</th>
                  <th className="p-8 text-[11px] uppercase tracking-widest text-[#2C2A26] font-bold bg-[#FDFCFB]">CouncilFlow</th>
                </tr>
              </thead>
              <tbody className="text-[15px] text-[#716E68] font-light">
                <tr className="border-b border-[#F7F6F2]">
                  <td className="p-8 font-medium text-[#2C2A26]">Finding Leads</td>
                  <td className="p-8">Hours of Google & LinkedIn</td>
                  <td className="p-8 text-[#2C2A26] font-medium">Automatic in 5 seconds</td>
                </tr>
                <tr className="border-b border-[#F7F6F2]">
                  <td className="p-8 font-medium text-[#2C2A26]">Researching Firms</td>
                  <td className="p-8">Reading messy blogs & news</td>
                  <td className="p-8 text-[#2C2A26] font-medium">AI summarizes everything</td>
                </tr>
                <tr className="border-b border-[#F7F6F2]">
                  <td className="p-8 font-medium text-[#2C2A26]">Writing Emails</td>
                  <td className="p-8">Generic "copy-paste" spam</td>
                  <td className="p-8 text-[#2C2A26] font-medium">100% personal & unique</td>
                </tr>
                <tr>
                  <td className="p-8 font-medium text-[#2C2A26]">Workflow</td>
                  <td className="p-8">Chaos & Spreadsheets</td>
                  <td className="p-8 text-[#2C2A26] font-medium">One clean, simple dashboard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="platform" className="py-24 md:py-[180px] bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#A19D94] uppercase mb-6 block">Features</span>
            <h2 className="text-[2.5rem] md:text-[4rem] font-light tracking-[-0.01em] text-[#2C2A26] font-display mb-8">Built for busy firms.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white p-10 md:p-12 border border-[#EBE8E0] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] group">
              <div className="w-14 h-14 bg-[#F7F6F2] border border-[#EBE8E0] rounded-xl flex items-center justify-center mb-10 text-[#2C2A26] group-hover:bg-[#2C2A26] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="text-[22px] font-medium text-[#2C2A26] mb-4">Fast Research</h3>
              <p className="text-[#716E68] text-[15px] font-light leading-relaxed">
                Stop digging through the web. Our AI finds the news and facts that matter for your next big account.
              </p>
            </div>

            <div className="bg-white p-10 md:p-12 border border-[#EBE8E0] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] group">
              <div className="w-14 h-14 bg-[#F7F6F2] border border-[#EBE8E0] rounded-xl flex items-center justify-center mb-10 text-[#2C2A26] group-hover:bg-[#2C2A26] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </div>
              <h3 className="text-[22px] font-medium text-[#2C2A26] mb-4">Better Emails</h3>
              <p className="text-[#716E68] text-[15px] font-light leading-relaxed">
                AI that sounds like you. We write messages that people actually want to read, not robotic spam.
              </p>
            </div>

            <div className="bg-white p-10 md:p-12 border border-[#EBE8E0] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] group">
              <div className="w-14 h-14 bg-[#F7F6F2] border border-[#EBE8E0] rounded-xl flex items-center justify-center mb-10 text-[#2C2A26] group-hover:bg-[#2C2A26] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-[22px] font-medium text-[#2C2A26] mb-4">Easy Automation</h3>
              <p className="text-[#716E68] text-[15px] font-light leading-relaxed">
                Set it and forget it. CouncilFlow works while you sleep, finding and queueing leads for your approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 md:py-[180px] bg-[#F7F6F2] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#A19D94] uppercase mb-6 block">Pricing</span>
            <h2 className="text-[2.5rem] md:text-[4rem] font-light text-[#2C2A26] font-display mb-6">Simple pricing for every firm.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="bg-white p-12 border border-[#EBE8E0] rounded-2xl flex flex-col">
              <h3 className="text-[22px] font-medium mb-3">Starter</h3>
              <p className="text-[#86827A] text-[14px] mb-8 pb-8 border-b">Great for just starting out</p>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-[3.5rem] font-light font-display">$49</span>
                <span className="text-[#86827A]">/mo</span>
              </div>
              <ul className="space-y-4 mb-14 flex-grow text-[15px] text-[#716E68]">
                <li className="flex items-center gap-3">✓ 500 Credits</li>
                <li className="flex items-center gap-3">✓ Basic AI Writer</li>
                <li className="flex items-center gap-3">✓ 1 User</li>
              </ul>
              <Link href="/auth/sign-in" className="block text-center border border-[#2C2A26] py-3.5 rounded-md font-medium hover:bg-[#F7F6F2] transition-colors">Start 14-day trial</Link>
            </div>

            {/* Pro */}
            <div className="bg-[#2C2A26] text-white p-12 rounded-2xl flex flex-col transform md:-translate-y-6 shadow-xl">
              <h3 className="text-[22px] font-medium mb-3">Professional</h3>
              <p className="text-[#A19D94] text-[14px] mb-8 pb-8 border-b border-white/10">Most popular for growth</p>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-[3.5rem] font-light font-display">$149</span>
                <span className="text-[#A19D94]">/mo</span>
              </div>
              <ul className="space-y-4 mb-14 flex-grow text-[15px] text-[#E2DECF]">
                <li className="flex items-center gap-3">✓ 2,500 Credits</li>
                <li className="flex items-center gap-3">✓ Advanced AI Tuning</li>
                <li className="flex items-center gap-3">✓ 5 Users</li>
                <li className="flex items-center gap-3">✓ CRM Sync</li>
              </ul>
              <Link href="/auth/sign-in" className="block text-center bg-white text-[#2C2A26] py-3.5 rounded-md font-medium hover:bg-[#EFECE5] transition-colors">Start 14-day trial</Link>
            </div>

            {/* Scale */}
            <div className="bg-white p-12 border border-[#EBE8E0] rounded-2xl flex flex-col">
              <h3 className="text-[22px] font-medium mb-3">Scale</h3>
              <p className="text-[#86827A] text-[14px] mb-8 pb-8 border-b">For larger teams</p>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-[3.5rem] font-light font-display">$399</span>
                <span className="text-[#86827A]">/mo</span>
              </div>
              <ul className="space-y-4 mb-14 flex-grow text-[15px] text-[#716E68]">
                <li className="flex items-center gap-3">✓ Unlimited Credits</li>
                <li className="flex items-center gap-3">✓ Priority Support</li>
                <li className="flex items-center gap-3">✓ Unlimited Users</li>
              </ul>
              <Link href="/auth/sign-in" className="block text-center border border-[#2C2A26] py-3.5 rounded-md font-medium hover:bg-[#F7F6F2] transition-colors">Start 14-day trial</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-[180px] bg-[#FDFCFB] px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-light text-[#2C2A26] font-display">Common Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-8 border border-[#EBE8E0] rounded-xl bg-white">
              <h4 className="text-[18px] font-medium text-[#2C2A26] mb-4">Is it hard to set up?</h4>
              <p className="text-[#716E68] font-light leading-relaxed">Not at all. You can be up and running in under 5 minutes. No coding required.</p>
            </div>
            <div className="p-8 border border-[#EBE8E0] rounded-xl bg-white">
              <h4 className="text-[18px] font-medium text-[#2C2A26] mb-4">Is my data safe?</h4>
              <p className="text-[#716E68] font-light leading-relaxed">Yes. We use enterprise-grade security to keep your leads and firm data completely private.</p>
            </div>
            <div className="p-8 border border-[#EBE8E0] rounded-xl bg-white">
              <h4 className="text-[18px] font-medium text-[#2C2A26] mb-4">Can I cancel anytime?</h4>
              <p className="text-[#716E68] font-light leading-relaxed">Yes. CouncilFlow is month-to-to month. No long contracts, no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-[180px] bg-[#2C2A26] px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[3rem] md:text-[5rem] font-light tracking-[-0.02em] mb-8 font-display">
            Ready to grow?
          </h2>
          <p className="text-[19px] md:text-[22px] text-[#A19D94] font-light mb-14 max-w-2xl mx-auto">
            Join the firms using CouncilFlow to spend less time researching and more time closing new business.
          </p>
          <Link href="/auth/sign-in" className="inline-block bg-white text-[#2C2A26] px-12 py-5 rounded-md text-[16px] font-medium hover:bg-[#EFECE5] transition-all shadow-lg hover:-translate-y-1">
            Start your free trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDFCFB] pt-24 pb-12 px-6 border-t border-[#EBE8E0]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <span className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#2C2A26] mb-8 block">CouncilFlow</span>
            <p className="text-[#716E68] font-light max-w-sm text-[15px] leading-relaxed">
              The simplest way for law firms to automate their business development.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#2C2A26] mb-8 text-[14px]">Links</h4>
            <ul className="space-y-5 text-[14px] text-[#716E68]">
              <li><a href="#how-it-works" className="hover:text-[#2C2A26]">How it works</a></li>
              <li><a href="#pricing" className="hover:text-[#2C2A26]">Pricing</a></li>
              <li><Link href="/auth/sign-in" className="hover:text-[#2C2A26]">Log in</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#2C2A26] mb-8 text-[14px]">Legal</h4>
            <ul className="space-y-5 text-[14px] text-[#716E68]">
              <li><a href="#" className="hover:text-[#2C2A26]">Privacy</a></li>
              <li><a href="#" className="hover:text-[#2C2A26]">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-[#EBE8E0] pt-10 text-center md:text-left text-[11px] text-[#A19D94] uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} CouncilFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
