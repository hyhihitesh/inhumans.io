import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#2C2A26] font-sans selection:bg-[#E2DECF] selection:text-[#2C2A26]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#F7F6F2]/85 backdrop-blur-md border-b border-[#EBE8E0]">
        <div className="mx-auto max-w-6xl px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium tracking-[0.15em] uppercase text-[#2C2A26]/80">CouncilFlow</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium">
            <Link href="/auth/sign-in" className="text-[#2C2A26]/60 hover:text-[#2C2A26] transition-colors">
              Log in
            </Link>
            <Link href="/auth/sign-in" className="bg-[#2C2A26] text-[#F7F6F2] px-6 py-2.5 rounded hover:bg-[#4A4742] transition-colors">
              Begin
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 pt-40 pb-28 md:pt-56 md:pb-40 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-block py-1.5 px-4 mb-10 text-xs font-semibold tracking-[0.2em] text-[#86827A] uppercase border border-[#EBE8E0] rounded-full">
            Intentional Simplicity
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#2C2A26] leading-[1.1] font-display">
            Business development,<br />refined by intelligence.
          </h1>
          <p className="mt-10 text-lg md:text-xl text-[#716E68] max-w-2xl font-light leading-relaxed">
            A serene, cohesive environment where artificial intelligence merges with timeless outreach strategy. Manage your pipeline with quiet confidence and absolute clarity.
          </p>
          <div className="mt-14 flex items-center justify-center">
            <Link href="/auth/sign-in" className="group flex items-center gap-3 bg-[#2C2A26] text-[#F7F6F2] px-8 py-4 rounded text-base transition-all hover:bg-[#4A4742]">
              Experience the platform
              <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-28 bg-[#EFECE5] px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-20 items-start">
          <h2 className="text-4xl font-light tracking-tight md:w-5/12 leading-tight font-display text-[#2C2A26]">
            Less noise.<br />More alignment.
          </h2>
          <div className="md:w-7/12 space-y-8 text-[#716E68] text-lg font-light leading-relaxed">
            <p>
              We believe great outreach shouldn't feel loud or overwhelming. CouncilFlow brings a meditative rhythm to prospecting, filtering out the chaos to present only the highest fidelity opportunities.
            </p>
            <p>
              Every element has purpose. The AI writes with a softly authoritative voice, removing the friction from your daily workflow and allowing you to focus purely on genuine connection.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="group p-10 rounded bg-[#FDFCFB]/40 hover:bg-[#FDFCFB]/80 border border-[#EBE8E0] hover:border-[#D5D1C6] transition-all duration-700">
            <div className="w-12 h-12 rounded bg-[#EFECE5] flex items-center justify-center mb-8 group-hover:bg-[#2C2A26] group-hover:text-[#F7F6F2] transition-colors duration-700 text-[#2C2A26]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-4 text-[#2C2A26]">Deep Enrichment</h3>
            <p className="text-[#716E68] font-light leading-relaxed">
              Unearth insights with natural grace. Our engine silently gathers rich context, presenting only what deeply matters.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-10 rounded bg-[#FDFCFB]/40 hover:bg-[#FDFCFB]/80 border border-[#EBE8E0] hover:border-[#D5D1C6] transition-all duration-700">
            <div className="w-12 h-12 rounded bg-[#EFECE5] flex items-center justify-center mb-8 group-hover:bg-[#2C2A26] group-hover:text-[#F7F6F2] transition-colors duration-700 text-[#2C2A26]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-4 text-[#2C2A26]">Mindful Drafting</h3>
            <p className="text-[#716E68] font-light leading-relaxed">
              Emails authored with quiet confidence. Our intelligence ensures your voice remains refined and profoundly human.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-10 rounded bg-[#FDFCFB]/40 hover:bg-[#FDFCFB]/80 border border-[#EBE8E0] hover:border-[#D5D1C6] transition-all duration-700">
            <div className="w-12 h-12 rounded bg-[#EFECE5] flex items-center justify-center mb-8 group-hover:bg-[#2C2A26] group-hover:text-[#F7F6F2] transition-colors duration-700 text-[#2C2A26]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-4 text-[#2C2A26]">Fluid Automation</h3>
            <p className="text-[#716E68] font-light leading-relaxed">
              Like a gentle current, prospects move through your pipeline autonomously. The system acts, you simply approve.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-16 px-8 border-t border-[#EBE8E0] text-center bg-[#F4F2EC]">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#2C2A26] mb-10 font-display">
          Ready to find your focus?
        </h2>
        <Link href="/auth/sign-in" className="inline-block text-[#86827A] border-b border-[#D5D1C6] pb-1 hover:text-[#2C2A26] hover:border-[#2C2A26] transition-colors text-lg">
          Begin the journey
        </Link>
        <p className="mt-24 text-xs text-[#A19D94] uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} CouncilFlow
        </p>
      </footer>
    </div>
  );
}
