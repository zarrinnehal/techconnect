"use client";

import { useState } from 'react';
import { ArrowRight, Lock, Mail, ShieldCheck } from 'lucide-react';

export function AuthPageView() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/80 shadow-glow lg:grid-cols-[1fr_1.1fr]">
        <div className="border-b border-slate-800 bg-slate-950/70 p-8 lg:border-b-0 lg:border-r">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Welcome back</p>
          <h1 className="mt-3 text-3xl font-bold text-white">Join the TechConnect community</h1>
          <p className="mt-4 text-slate-300">Ask questions, share solutions, and connect with people who solve real-world tech problems.</p>

          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
              <div className="rounded-full bg-violet-500/10 p-2 text-violet-200"><ShieldCheck className="h-4 w-4" /></div>
              Secure authentication with role-based access
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
              <div className="rounded-full bg-violet-500/10 p-2 text-violet-200"><Mail className="h-4 w-4" /></div>
              Personalized profile and networking updates
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
              <div className="rounded-full bg-violet-500/10 p-2 text-violet-200"><Lock className="h-4 w-4" /></div>
              Protected access to your own posts and notifications
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="inline-flex rounded-full border border-slate-700 bg-slate-950/60 p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${isLogin ? 'bg-violet-600 text-white' : 'text-slate-400'}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${!isLogin ? 'bg-violet-600 text-white' : 'text-slate-400'}`}
            >
              Sign up
            </button>
          </div>

          <form className="mt-6 space-y-4">
            {!isLogin && (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Full name</label>
                <input className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none focus:border-violet-500" placeholder="Your name" />
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
              <input type="email" className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none focus:border-violet-500" placeholder="you@example.com" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
              <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none focus:border-violet-500" placeholder="••••••••" />
            </div>

            {!isLogin && (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Role or focus area</label>
                <input className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none focus:border-violet-500" placeholder="Developer, student, mentor, security engineer" />
              </div>
            )}

            <button type="submit" className="primary-btn mt-2 w-full gap-2">
              {isLogin ? 'Login to TechConnect' : 'Create account'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-slate-500">
            {isLogin ? 'Need an account?' : 'Already have an account?'}{' '}
            <button onClick={() => setIsLogin(!isLogin)} className="font-medium text-violet-200">
              {isLogin ? 'Sign up now' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
