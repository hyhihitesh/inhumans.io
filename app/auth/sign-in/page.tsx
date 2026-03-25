import Link from "next/link";
import { signInAction, signUpAction } from "@/app/auth/actions";

type SearchParams = {
  error?: string;
  message?: string;
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#2C2A26] font-sans selection:bg-[#E2DECF] selection:text-[#2C2A26] flex flex-col md:flex-row">
      
      {/* Left Side - Branding & Calm Intent */}
      <div className="hidden md:flex md:w-1/2 bg-[#EFECE5] flex-col justify-between p-12 lg:p-24 relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D5D1C6] to-transparent"></div>
        
        <div className="relative z-10">
          <Link href="/" className="inline-block text-sm font-semibold tracking-[0.15em] uppercase text-[#2C2A26] hover:opacity-70 transition-opacity">
            CouncilFlow
          </Link>
        </div>

        <div className="relative z-10 max-w-lg mt-20 mb-auto">
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-[#2C2A26] leading-[1.1] font-display mb-8">
            Return to your focus.
          </h1>
          <p className="text-lg text-[#716E68] font-light leading-relaxed">
            Sign in to manage your automated pipeline, review AI-drafted outreach, and continue refining your firm's growth trajectory with quiet confidence.
          </p>
        </div>

        <div className="relative z-10 text-xs text-[#A19D94] uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} CouncilFlow
        </div>
      </div>

      {/* Right Side - Interactive Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 relative">
        <div className="absolute top-6 left-6 md:hidden">
          <Link href="/" className="text-sm font-semibold tracking-[0.15em] uppercase text-[#2C2A26]">
            CouncilFlow
          </Link>
        </div>

        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl font-light text-[#2C2A26] font-display mb-2">Welcome.</h2>
            <p className="text-[#716E68] text-sm">Enter your credentials to access the platform.</p>
          </div>

          <div className="bg-[#FDFCFB]/80 px-8 py-10 sm:p-12 border border-[#EBE8E0] rounded shadow-sm">
            
            {/* Alerts */}
            {params.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <p>{params.error}</p>
              </div>
            )}
            {params.message && (
              <div className="mb-6 p-4 bg-[#EFECE5] border border-[#EBE8E0] text-[#2C2A26] text-sm rounded flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                <p>{params.message}</p>
              </div>
            )}

            {/* OAuth Buttons */}
            <div className="mb-8">
              <div className="grid gap-3 sm:grid-cols-2">
                <button disabled className="w-full flex items-center justify-center gap-2 bg-[#F7F6F2] text-[#A19D94] py-2.5 px-4 rounded border border-[#EBE8E0] text-sm font-medium opacity-60 cursor-not-allowed">
                  Google <span className="text-[10px] uppercase tracking-wider hidden sm:inline">(Soon)</span>
                </button>
                <button disabled className="w-full flex items-center justify-center gap-2 bg-[#F7F6F2] text-[#A19D94] py-2.5 px-4 rounded border border-[#EBE8E0] text-sm font-medium opacity-60 cursor-not-allowed">
                  Microsoft <span className="text-[10px] uppercase tracking-wider hidden sm:inline">(Soon)</span>
                </button>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div className="h-px bg-[#EBE8E0] flex-1"></div>
                <span className="text-xs text-[#A19D94] uppercase tracking-wider">Or email</span>
                <div className="h-px bg-[#EBE8E0] flex-1"></div>
              </div>
            </div>

            {/* Sign In Form */}
            <form action={signInAction} className="grid gap-5">
              <div className="grid gap-1.5">
                <label className="text-sm text-[#2C2A26] font-medium ml-1">Email address</label>
                <input
                  className="w-full bg-[#F7F6F2] border border-[#EBE8E0] text-[#2C2A26] px-4 py-2.5 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#2C2A26] focus:border-[#2C2A26] transition-colors placeholder:text-[#A19D94]"
                  name="email"
                  type="email"
                  placeholder="you@firm.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="grid gap-1.5">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-sm text-[#2C2A26] font-medium">Password</label>
                </div>
                <input
                  className="w-full bg-[#F7F6F2] border border-[#EBE8E0] text-[#2C2A26] px-4 py-2.5 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#2C2A26] focus:border-[#2C2A26] transition-colors placeholder:text-[#A19D94]"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
              </div>
              <button
                className="w-full mt-2 bg-[#2C2A26] text-[#F7F6F2] py-3 rounded text-sm font-medium hover:bg-[#4A4742] transition-colors shadow-sm"
                type="submit"
              >
                Access Platform
              </button>
            </form>

            {/* Sign Up Form */}
            <form action={signUpAction} className="mt-8 pt-8 border-t border-[#EBE8E0]">
              <div className="text-center mb-6">
                <span className="text-xs text-[#86827A] uppercase tracking-[0.2em] bg-[#FDFCFB] px-3 relative -top-3">New firm?</span>
              </div>
              <div className="grid gap-5">
                <div className="grid gap-1.5">
                  <input
                    className="w-full bg-[#F7F6F2] border border-[#EBE8E0] text-[#2C2A26] px-4 py-2.5 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#2C2A26] focus:border-[#2C2A26] transition-colors placeholder:text-[#A19D94]"
                    name="email"
                    type="email"
                    placeholder="Work email"
                    required
                  />
                </div>
                <div className="grid gap-1.5">
                  <input
                    className="w-full bg-[#F7F6F2] border border-[#EBE8E0] text-[#2C2A26] px-4 py-2.5 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#2C2A26] focus:border-[#2C2A26] transition-colors placeholder:text-[#A19D94]"
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
                    minLength={8}
                    required
                  />
                </div>
                <button
                  className="w-full mt-1 bg-transparent border border-[#2C2A26] text-[#2C2A26] py-3 rounded text-sm font-medium hover:bg-[#EFECE5] transition-colors"
                  type="submit"
                >
                  Create Account
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
