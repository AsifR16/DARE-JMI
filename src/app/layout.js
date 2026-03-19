import "./globals.css";
import { Jersey_25 } from 'next/font/google';

const jersey = Jersey_25({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jersey', // Define a CSS variable name
});

export const metadata = {
  title: "DARE-JMI",
  description: "Official Website for DARE-JMI Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jersey.className} ${jersey.variable}`}>
        {children}
      </body>
    </html>
  );
}
