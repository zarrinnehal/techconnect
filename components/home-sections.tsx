import Link from 'next/link';
import { ArrowRight, BookOpen, Bookmark, MessageSquareText, Search, Star, TrendingUp, Users } from 'lucide-react';
import { authors, categories, discussions, getCategoryById, getAuthorById } from '@/lib/data';

export function HomePageHero() {
  return (
    <section className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-6 shadow-glow sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-center">
        <div>
          <div className="badge mb-4">Global community for tech problem solving</div>
          <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            Ask better questions. Build smarter solutions.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            TechConnect brings together students, developers, and tech leaders to exchange solutions, career advice, and practical experience.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/explore" className="primary-btn gap-2">
              Explore discussions
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/create" className="secondary-btn">
              Start a Discussion
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-violet-300" />
              18k+ members
            </div>
            <div className="flex items-center gap-2">
              <MessageSquareText className="h-4 w-4 text-violet-300" />
              2.4k active threads
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-violet-300" />
              94% answered
            </div>
          </div>
        </div>

        <div className="panel p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-300">Popular search</p>
            <div className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-1 text-xs text-violet-200">
              Trending
            </div>
          </div>

          <div className="space-y-3">
            {['React architecture', 'Supabase performance', 'AI interview prep', 'Cybersecurity patterns', 'Career portfolio review'].map((term) => (
              <button key={term} className="flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-3 text-left text-sm text-slate-200 transition hover:border-slate-600">
                <span className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-violet-300" />
                  {term}
                </span>
                <ArrowRight className="h-4 w-4 text-slate-500" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CategoriesSection() {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Browse topics</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Popular communities</h2>
        </div>
        <Link href="/explore" className="text-sm font-medium text-violet-200 hover:text-violet-100">
          View all
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href="/explore" className="panel card-hover p-5">
            <div className={`mb-4 inline-flex rounded-full border px-2.5 py-1 text-sm ${category.color}`}>
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </div>
            <p className="text-sm text-slate-300">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function TrendingDiscussions() {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Community pulse</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Trending discussions</h2>
        </div>
      </div>

      <div className="space-y-4">
        {discussions.slice(0, 3).map((discussion) => {
          const author = getAuthorById(discussion.authorId);
          const category = getCategoryById(discussion.category);

          return (
            <article key={discussion.id} className="panel card-hover p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/15 text-sm font-semibold text-violet-200">
                    {author.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-white">{author.name}</p>
                    <p className="text-xs text-slate-400">{discussion.createdAt}</p>
                  </div>
                </div>
                <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs ${category.color}`}>
                  {category.name}
                </span>
              </div>

              <Link href={`/discussions/${discussion.id}`} className="mt-4 block text-xl font-semibold text-white hover:text-violet-200">
                {discussion.title}
              </Link>

              <p className="mt-3 text-sm leading-6 text-slate-300">{discussion.excerpt}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {discussion.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-[11px] uppercase tracking-wide text-slate-400">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-yellow-400" /> {discussion.likes}</span>
                <span className="flex items-center gap-1.5"><MessageSquareText className="h-4 w-4" /> {discussion.comments}</span>
                <span className="flex items-center gap-1.5"><Bookmark className="h-4 w-4" /> {discussion.bookmarks}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> {discussion.views} views</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function CommunitySpotlight() {
  return (
    <section className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="panel p-5">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Mentorship</p>
        <h3 className="mt-2 text-2xl font-bold text-white">Find people with the right experience</h3>
        <p className="mt-3 text-slate-300">
          Connect with experienced developers, product leaders, and students solving similar challenges.
        </p>
        <Link href="/community" className="primary-btn mt-5">
          Meet the community
        </Link>
      </div>

      <div className="panel p-5">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Unanswered</p>
        <h3 className="mt-2 text-xl font-bold text-white">Need quick help?</h3>
        <div className="mt-4 space-y-3 text-sm text-slate-300">
          <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-3">How do you reduce cold starts in a BaaS-first stack?</div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-3">What is a realistic roadmap for security fundamentals?</div>
        </div>
      </div>
    </section>
  );
}
