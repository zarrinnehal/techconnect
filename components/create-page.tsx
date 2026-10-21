"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, FileText, Sparkles, UploadCloud } from 'lucide-react';

export function CreateDiscussionView() {
  const [form, setForm] = useState({
    title: '',
    category: 'web-dev',
    tags: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="panel p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Create</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Share a problem or insight</h1>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200">
            <Sparkles className="h-3.5 w-3.5" />
            Community-ready draft
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Example: How do you handle state synchronization in a large React app?"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-violet-500"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none focus:border-violet-500"
              >
                <option value="web-dev">Web & App Development</option>
                <option value="programming">Programming & Debugging</option>
                <option value="ai">AI & Emerging Technologies</option>
                <option value="security">Cybersecurity</option>
                <option value="career">Career Guidance</option>
                <option value="education">Tech Education</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Tags</label>
              <input
                name="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="react, nextjs, mentoring"
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-violet-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={8}
              placeholder="Describe the challenge, what you have tried, and the kind of help you want."
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-violet-500"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center gap-2 rounded-xl border border-dashed border-slate-700 bg-slate-950/60 px-4 py-2.5 text-sm text-slate-300">
              <UploadCloud className="h-4 w-4 text-violet-300" />
              Add screenshots or code snippets
            </div>

            <div className="flex items-center gap-3">
              <button type="button" className="secondary-btn">
                Save draft
              </button>
              <button type="submit" className="primary-btn gap-2">
                Publish discussion
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </form>

        {submitted && (
          <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
            <div className="flex items-center gap-2 font-medium">
              <Check className="h-4 w-4" />
              Your discussion is ready to be submitted.
            </div>
            <p className="mt-2 text-emerald-50/90">Preview: “{form.title || 'Untitled discussion'}” in {form.category}.</p>
          </div>
        )}
      </div>
    </div>
  );
}
