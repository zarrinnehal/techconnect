import { useMemo, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Bookmark, MessageSquareText, Search, SlidersHorizontal, Star } from 'lucide-react';
import { categories, discussions, getAuthorById, getCategoryById } from '@/lib/data';

const filters = ['All', 'Latest', 'Popular', 'Unanswered'];

export function ExplorePageView() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  const visibleDiscussions = useMemo(() => {
    const query = search.toLowerCase();

    return discussions.filter((discussion) => {
      const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
      const matchesSearch = !query || [discussion.title, discussion.excerpt, discussion.tags.join(' '), getCategoryById(discussion.category).name].join(' ').toLowerCase().includes(query);
      const matchesFilter =
        activeFilter === 'All' ||
        (activeFilter === 'Latest' && discussion.createdAt.includes('hours')) ||
        (activeFilter === 'Popular' && discussion.likes > 180) ||
        (activeFilter === 'Unanswered' && !discussion.isSolved);

      return matchesCategory && matchesSearch && matchesFilter;
    });
  }, [activeFilter, search, selectedCategory]);

  return (
    <div className="space-y-8">
      <section className="panel p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Explore</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Discover solutions and expert perspectives</h1>
          </div>

          <div className="relative w-full max-w-lg">
            <Search className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 py-3 pl-10 pr-3 text-sm text-slate-200 outline-none ring-0 placeholder:text-slate-500 focus:border-violet-500"
              placeholder="Search discussions, tags, and people"
            />
          </div>
        </div>
      </section>

      <section className="panel p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  activeFilter === filter
                    ? 'bg-violet-600 text-white'
                    : 'border border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <SlidersHorizontal className="h-4 w-4 text-violet-300" />
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none focus:border-violet-500"
            >
              <option value="all">All categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        {visibleDiscussions.length > 0 ? (
          visibleDiscussions.map((discussion) => {
            const author = getAuthorById(discussion.authorId);
            const category = getCategoryById(discussion.category);

            return (
              <article key={discussion.id} className="panel card-hover p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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

                <p className="mt-3 leading-6 text-slate-300">{discussion.excerpt}</p>

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
          })
        ) : (
          <div className="panel flex min-h-[200px] items-center justify-center p-6 text-slate-400">
            No discussions match your current filters. Try another keyword or category.
          </div>
        )}
      </section>
    </div>
  );
}
