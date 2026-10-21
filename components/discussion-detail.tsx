import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Heart, MessageSquareText, Share2, UserCircle2 } from 'lucide-react';
import { comments, discussions, getAuthorById, getCategoryById, getDiscussionById } from '@/lib/data';

export function DiscussionDetailView({ discussionId }: { discussionId: string }) {
  const discussion = getDiscussionById(discussionId);
  const author = getAuthorById(discussion.authorId);
  const category = getCategoryById(discussion.category);
  const relevantDiscussion = discussions.filter((item) => item.id !== discussion.id).slice(0, 2);
  const discussionComments = comments.filter((comment) => comment.discussionId === discussion.id);

  return (
    <div className="space-y-8">
      <header className="panel p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs ${category.color}`}>{category.name}</span>
          {discussion.isSolved ? <span className="badge">Solved</span> : <span className="badge border-emerald-500/30 bg-emerald-500/10 text-emerald-200">Open</span>}
        </div>

        <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl">{discussion.title}</h1>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-500/15 text-sm font-semibold text-violet-200">
              {author.avatar}
            </div>
            <div>
              <p className="font-medium text-white">{author.name}</p>
              <p>{author.role}</p>
            </div>
          </div>
          <span>•</span>
          <span>{discussion.createdAt}</span>
          <span>•</span>
          <span>{discussion.views} views</span>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.8fr_0.9fr]">
        <section className="panel p-6">
          <div className="prose prose-invert prose-p:text-slate-300 prose-p:leading-7 prose-headings:text-white max-w-none">
            <p>{discussion.content}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {discussion.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-[11px] uppercase tracking-wide text-slate-400">
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-slate-800 pt-5 text-sm text-slate-400">
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 hover:border-slate-600">
              <Heart className="h-4 w-4" /> {discussion.likes} likes
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 hover:border-slate-600">
              <MessageSquareText className="h-4 w-4" /> {discussion.comments} comments
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 hover:border-slate-600">
              <Share2 className="h-4 w-4" /> Share
            </button>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-white">Replies</h2>
              <button className="primary-btn">Add a reply</button>
            </div>

            <div className="mt-5 space-y-4">
              {discussionComments.map((comment) => {
                const commentator = getAuthorById(comment.authorId);

                return (
                  <div key={comment.id} className={`rounded-2xl border p-4 ${comment.isAccepted ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-slate-800 bg-slate-950/60'}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-slate-200">
                          {commentator.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-white">{commentator.name}</p>
                          <p className="text-xs text-slate-400">{comment.createdAt}</p>
                        </div>
                      </div>

                      {comment.isAccepted && (
                        <div className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-200">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Accepted answer
                        </div>
                      )}
                    </div>

                    <p className="mt-4 leading-7 text-slate-300">{comment.body}</p>

                    <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
                      <button className="inline-flex items-center gap-2 hover:text-white">❤ {comment.likes}</button>
                      <button className="hover:text-white">Reply</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="panel p-5">
            <h3 className="text-lg font-semibold text-white">Relevant questions</h3>
            <div className="mt-4 space-y-3">
              {relevantDiscussion.map((related) => (
                <Link key={related.id} href={`/discussions/${related.id}`} className="block rounded-xl border border-slate-800 bg-slate-950/70 p-3 hover:border-violet-500/30">
                  <p className="text-sm font-medium text-white">{related.title}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                    <span>{related.comments} replies</span>
                    <span>•</span>
                    <span>{related.likes} likes</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="panel p-5">
            <h3 className="text-lg font-semibold text-white">Community stats</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                <span>Followers</span>
                <strong className="text-white">{author.followers}</strong>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                <span>Experience</span>
                <strong className="text-white">{author.experience}</strong>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                <span>Skills</span>
                <strong className="text-white">{author.skills.length}</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
