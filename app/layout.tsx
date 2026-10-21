import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'TechConnect',
  description: 'A community for solving tech problems and sharing knowledge.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-violet-500 selection:text-white">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.3),_transparent_25%),radial-gradient(circle_at_right,_rgba(59,130,246,0.18),_transparent_25%)]">
          <Navbar />
          <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
