import Link from "next/link";
import { useRouter } from "next/router";
import FullContainer from "./FullContainer";
import Container from "./Container";

export default function Footer() {
    const router = useRouter();

    return (
        <FullContainer className="bg-gradient-to-br from-white via-gray-50 to-white border-t border-gray-200/50">
            <Container className="md:hidden">
                <MobileFooter />
            </Container>
            <Container className="px-2 sm:px-6 lg:px-8 hidden md:block">
                <div className="py-8">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Brand Section */}
                        <div className="md:col-span-2">
                            <Link href="/" className="inline-block">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">B</span>
                                    </div>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                                        Brightly Soft
                                    </span>
                                </div>
                            </Link>
                            <p className="text-secondary/70 text-sm leading-relaxed max-w-md">
                                Creating exceptional digital experiences that empower businesses through innovative, 
                                quality-first solutions that stand the test of time.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                                Quick Links
                            </h3>
                            <div className="space-y-3">
                                <Link
                                    href="/audience"
                                    className={`block text-sm transition-all duration-300 hover:translate-x-1 ${
                                        router.pathname === '/audience' 
                                            ? 'text-primary font-medium' 
                                            : 'text-secondary/70 hover:text-primary'
                                    }`}
                                >
                                    Audience
                                </Link>
                                <Link
                                    href="/brands"
                                    className={`block text-sm transition-all duration-300 hover:translate-x-1 ${
                                        router.pathname === '/brands' 
                                            ? 'text-primary font-medium' 
                                            : 'text-secondary/70 hover:text-primary'
                                    }`}
                                >
                                    Brands
                                </Link>
                                <Link
                                    href="/connect"
                                    className={`block text-sm transition-all duration-300 hover:translate-x-1 ${
                                        router.pathname === '/connect' 
                                            ? 'text-primary font-medium' 
                                            : 'text-secondary/70 hover:text-primary'
                                    }`}
                                >
                                    Connect
                                </Link>
                            </div>
                        </div>

                        {/* Social & Contact */}
                        <div>
                            <h3 className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                                Connect With Us
                            </h3>
                            <div className="space-y-3">
                                <a href="mailto:hello@brightlysoft.com" className="flex items-center text-sm text-secondary/70 hover:text-primary transition-colors duration-300">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    hello@brightlysoft.com
                                </a>
                                <div className="flex space-x-3">
                                    <a href="#" className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-6 border-t border-gray-200/50">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-6 text-xs text-secondary/60">
                                <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="hover:text-primary transition-colors duration-300">
                                    Terms of Service
                                </Link>
                                <Link href="/cookies" className="hover:text-primary transition-colors duration-300">
                                    Cookie Policy
                                </Link>
                            </div>
                            <div className="text-xs text-secondary/60">
                                © 2024 Brightly Soft. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </FullContainer>
    );
}

const MobileFooter = () => {
    const router = useRouter();

    return (
        <div className="py-6">
            {/* Brand Section */}
            <div className="flex items-center justify-between mb-6">
                <Link href="/" className="inline-block">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">B</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                            Brightly Soft
                        </span>
                    </div>
                </Link>
                <div className="flex space-x-2">
                    <a href="#" className="w-7 h-7 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                    </a>
                    <a href="#" className="w-7 h-7 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                        </svg>
                    </a>
                    <a href="#" className="w-7 h-7 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-6">
                    <Link
                        href="/audience"
                        className={`text-sm font-medium transition-colors ${
                            router.pathname === '/audience' ? 'text-primary' : 'text-secondary/70'
                        }`}
                    >
                        Audience
                    </Link>
                    <Link
                        href="/brands"
                        className={`text-sm font-medium transition-colors ${
                            router.pathname === '/brands' ? 'text-primary' : 'text-secondary/70'
                        }`}
                    >
                        Brands
                    </Link>
                    <Link
                        href="/connect"
                        className={`text-sm font-medium transition-colors ${
                            router.pathname === '/connect' ? 'text-primary' : 'text-secondary/70'
                        }`}
                    >
                        Connect
                    </Link>
                </div>
            </div>

            {/* Contact Info */}
            <div className="mb-6">
                <a href="mailto:hello@brightlysoft.com" className="flex items-center text-sm text-secondary/70">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@brightlysoft.com
                </a>
            </div>

            {/* Bottom Links */}
            <div className="pt-4 border-t border-gray-200/50">
                <div className="flex flex-col space-y-2 text-xs text-secondary/60">
                    <div className="flex space-x-4">
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-primary transition-colors duration-300">
                            Terms of Service
                        </Link>
                    </div>
                    <div className="text-xs text-secondary/60">
                        © 2024 Brightly Soft. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};
