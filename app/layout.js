import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export const metadata={title:'Deeptanshu — Developer Portfolio',description:'A monochrome, high-tech portfolio for Deeptanshu.'};
export default function RootLayout({children}){return <html lang="en"><body className="noise min-h-screen font-sans antialiased"><Navigation/><main>{children}</main><Footer/></body></html>}
