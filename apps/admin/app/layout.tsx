import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevSpace Admin',
  description: 'Administration panel for DevSpace platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
