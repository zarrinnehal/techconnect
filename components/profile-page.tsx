import Link from 'next/link';
import { Award, BookOpen, MessageSquareText, Sparkles, Trophy } from 'lucide-react';
import { authors, discussions, getAuthorById } from '@/lib/data';

export function ProfilePageView({ username }: { username: string }) {
  const member = authors.find((person) => person.username === username) ?? authors[0];
  const userDiscussions = discussions.filter((discussion) => discussion.authorId === member.id);

  return (
    <div className="space-y-8">
      <section className="panel overflow-hidden p-0">
        <div className="bg-gradient-to-r from-violet-600/20 via-indigo-600/10 to-slate-900 p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/20 text-xl font-bold text-violet-200 ring-1 ring-violet-500/30">
                {member.avatar}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{member.name}</h1>
                <p className="text-sm text-slate-300">@{member.username} • {member.role}</p>
              </div>
            </div>
            <button className="primary-btn">Follow</button>
          </div>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-xl font-semibold text-white">Bio</h2>
            <p className="mt-3 leading-7 text-slate-300">{member.bio}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-slate-400">Followers</p>
              <p className="mt-2 text-2xl font-bold text-white">{member.followers}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-slate-400">Answers</p>
              <p className="mt-2 text-2xl font-bold text-white">{userDiscussions.length + 3}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-slate-400">Badges</p>
              <p className="mt-2 text-2xl font-bold text-white">8</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="panel p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Recent activity</h2>
            <Link href="/explore" className="text-sm text-violet-200">View all posts</Link>
          </div>
          <div className="space-y-4">
            {userDiscussions.map((discussion) => (
              <Link key={discussion.id} href={`/discussions/${discussion.id}`} className="block rounded-2xl border border-slate-800 bg-slate-950/60 p-4 hover:border-violet-500/30">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-white">{discussion.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{discussion.createdAt}</p>
                  </div>
                  {discussion.isSolved ? <span className="badge">Solved</span> : null}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="panel p-5">
          <h2 className="text-xl font-semibold text-white">Achievements</h2>
          <div className="mt-5 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
              <div className="rounded-full bg-violet-500/10 p-2 text-violet-200"><Trophy className="h-4 w-4" /></div>
              <div>
                <p className="font-medium text-white">Top contributor</p>
                <p className="text-xs text-slate-400">Community award for helpful replies</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
              <div className="rounded-full bg-violet-500/10 p-2 text-violet-200"><Sparkles className="h-4 w-4" /></div>
              <div>
                <p className="font-medium text-white">Mentor</p>
                <p className="text-xs text-slate-400">Supporting students in design and frontend learning</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
              <div className="rounded-full bg-violet-500/10 p-2 text-violet-200"><Award className="h-4 w-4" /></div>
              <div>
                <p className="font-medium text-white">Verified expert</p>
                <p className="text-xs text-slate-400">Recognized for strong product and engineering guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
