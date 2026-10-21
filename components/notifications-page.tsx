import { Bell, CheckCircle2, MessageSquareText, UserPlus } from 'lucide-react';
import { notifications } from '@/lib/data';

export function NotificationsPageView() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="panel p-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Notifications</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Your activity feed</h1>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200">
            <Bell className="h-3.5 w-3.5" />
            {notifications.filter((item) => item.unread).length} unread
          </div>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className={`rounded-2xl border p-4 ${notification.unread ? 'border-violet-500/30 bg-violet-500/5' : 'border-slate-800 bg-slate-950/60'}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-violet-500/10 p-2 text-violet-200">
                    {notification.type === 'reply' ? <MessageSquareText className="h-4 w-4" /> : notification.type === 'follow' ? <UserPlus className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="font-medium text-white">{notification.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{notification.message}</p>
                  </div>
                </div>
                <span className="text-xs text-slate-400">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
