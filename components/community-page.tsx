import Link from 'next/link';
import { Award, BriefcaseBusiness, MessageSquareText, Sparkles, UserPlus } from 'lucide-react';
import { authors } from '@/lib/data';

export function CommunityPageView() {
  return (
    <div className="space-y-8">
      <section className="panel p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Community</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Meet people building, learning, and mentoring together</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-2xl font-bold text-white">18k+</p>
            <p className="mt-1 text-sm text-slate-400">Members online</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-2xl font-bold text-white">2.4k</p>
            <p className="mt-1 text-sm text-slate-400">Questions this week</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-2xl font-bold text-white">92%</p>
            <p className="mt-1 text-sm text-slate-400">Helpful replies</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {authors.map((member) => (
          <article key={member.username} className="panel card-hover p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/15 text-sm font-semibold text-violet-200">
                {member.avatar}
              </div>
              <div>
                <p className="font-semibold text-white">{member.name}</p>
                <p className="text-xs text-slate-400">@{member.username}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-300">{member.role}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-[11px] text-slate-300">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
              <span>{member.followers} followers</span>
              <span>{member.experience}</span>
            </div>

            <div className="mt-5 flex gap-2">
              <Link href={`/profile/${member.username}`} className="secondary-btn flex-1">View profile</Link>
              <button className="primary-btn flex-1">Follow</button>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="panel p-5">
          <div className="mb-3 inline-flex rounded-full bg-violet-500/10 p-2 text-violet-200">
            <UserPlus className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-white">Networking</h3>
          <p className="mt-2 text-sm text-slate-300">Connect with peers who share your stack, goals, and learning interests.</p>
        </div>
        <div className="panel p-5">
          <div className="mb-3 inline-flex rounded-full bg-violet-500/10 p-2 text-violet-200">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-white">Mentorship</h3>
          <p className="mt-2 text-sm text-slate-300">Get insight from experienced professionals on interviews, career transitions, and learning paths.</p>
        </div>
        <div className="panel p-5">
          <div className="mb-3 inline-flex rounded-full bg-violet-500/10 p-2 text-violet-200">
            <Award className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-white">Recognition</h3>
          <p className="mt-2 text-sm text-slate-300">Earn badges for thoughtful answers, mentorship, and consistent knowledge sharing.</p>
        </div>
      </section>
    </div>
  );
}
