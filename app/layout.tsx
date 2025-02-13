import '../styles/globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'Using Tailwind CSS in Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
