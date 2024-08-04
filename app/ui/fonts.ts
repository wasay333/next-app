import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana: { className: string } = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});