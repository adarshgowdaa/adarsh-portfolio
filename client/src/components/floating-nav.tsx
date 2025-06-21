import { useState, useEffect } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop - 100;
        const sectionHeight = el.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = el.getAttribute('id') || 'home';
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setSidebarOpen(false); // Close sidebar on nav click
  };

  return (
    <>
      {/* Mobile Sidebar & Hamburger */}
      <div className="md:hidden">
        {/* Hamburger Button */}
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-slate-900/80 text-slate-100 shadow-lg focus:outline-none"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open navigation menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="7" width="16" height="2" rx="1" fill="currentColor" />
            <rect x="4" y="15" width="16" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
        {/* Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation menu"
          />
        )}
        {/* Sidebar Panel */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 z-50 bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{ pointerEvents: sidebarOpen ? 'auto' : 'none' }}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold text-slate-100">Menu</span>
              <button
                className="p-2 rounded-md text-slate-400 hover:text-slate-100 focus:outline-none"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleClick(item.href)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary bg-slate-800'
                        : 'text-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex-grow" />
          </div>
        </aside>
      </div>

      {/* Desktop/Tablet Floating Top Nav */}
      <nav
        className="hidden md:fixed md:top-0 md:left-0 md:w-full md:z-50 md:flex md:justify-center"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="glass rounded-b-xl md:rounded-full px-2 py-2 md:px-6 md:py-3 shadow-2xl w-full max-w-md md:max-w-none md:w-auto mx-auto md:mx-0 mt-2"
          style={{ pointerEvents: 'auto' }}
        >
          <ul className="flex justify-between md:justify-center w-full md:space-x-6 text-xs md:text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href} className="flex-1 md:flex-none">
                <button
                  onClick={() => handleClick(item.href)}
                  className={`w-full py-2 md:py-0 md:w-auto text-center hover:text-primary transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary'
                      : 'text-slate-100'
                  }`}
                  style={{ minWidth: 0 }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
