/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ServicePage } from './pages/ServicePage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title dynamically for enhanced SEO
  useEffect(() => {
    let title = 'The Digital Paradigm – Custom Software, AI & Digital Growth Agency';
    if (currentPath === '/about') {
      title = 'About Us – The Digital Paradigm | Senior Software Engineering & AI Agency';
    } else if (currentPath === '/contact') {
      title = 'Contact Our Austin Engineering Team – The Digital Paradigm';
    } else if (currentPath === '/blog') {
      title = 'Engineering & AI Insights – The Digital Paradigm';
    } else if (currentPath.startsWith('/blog/')) {
      title = 'Insights Article – The Digital Paradigm';
    } else if (currentPath === '/services/app-development') {
      title = 'Mobile & Cross-Platform App Development – The Digital Paradigm';
    } else if (currentPath === '/services/digital-marketing') {
      title = 'Performance Digital Marketing & SEO – The Digital Paradigm';
    } else if (currentPath === '/services/ecommerce-development') {
      title = 'E-commerce & Shopify Plus Store Development – The Digital Paradigm';
    } else if (currentPath === '/services/design-services') {
      title = 'UI/UX & Enterprise Product Design – The Digital Paradigm';
    } else if (currentPath === '/services/ai-development') {
      title = 'Autonomous AI & Generative Systems Development – The Digital Paradigm';
    } else if (currentPath === '/services/custom-software') {
      title = 'Custom Software, SaaS & Web App Development – The Digital Paradigm';
    } else if (currentPath === '/terms') {
      title = 'Terms & Conditions – The Digital Paradigm';
    } else if (currentPath === '/privacy') {
      title = 'Privacy Policy – The Digital Paradigm';
    }
    document.title = title;
  }, [currentPath]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('main section')
    );
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('main section, main article, footer')
    );

    sections.forEach((section, index) => {
      if (index === 0) {
        section.dataset.revealStyle = 'hero';
      } else if (section.querySelector('form')) {
        section.dataset.revealStyle = 'spotlight';
      } else if (
        index === sections.length - 1 &&
        section.querySelector('button, a[href]')
      ) {
        section.dataset.revealStyle = 'spotlight';
      } else {
        const grids = Array.from(
          section.querySelectorAll<HTMLElement>('.grid')
        ).map((grid) => ({
          grid,
          items: Array.from(grid.children).filter(
            (child): child is HTMLElement => child instanceof HTMLElement
          ),
        }));
        const cardGrid = grids.find(({ items }) => items.length >= 3);
        const splitGrid = grids.find(({ items }) => items.length === 2);

        if (cardGrid) {
          cardGrid.grid.dataset.revealGrid = 'stagger';
          cardGrid.items.forEach((item, itemIndex) => {
            item.style.setProperty('--reveal-delay', `${Math.min(itemIndex, 6) * 90}ms`);
          });
          section.dataset.revealStyle = 'content';
        } else if (section.querySelector('img') && splitGrid) {
          splitGrid.grid.dataset.revealGrid = 'split';
          splitGrid.items[0].dataset.revealSide = 'left';
          splitGrid.items[1].dataset.revealSide = 'right';
          section.dataset.revealStyle = 'content';
        } else {
          section.dataset.revealStyle = index % 2 === 0 ? 'left' : 'right';
        }
      }
    });

    targets.forEach((target) => {
      if (target.matches('main article')) {
        target.dataset.revealStyle = 'card';
      } else if (target.matches('footer')) {
        target.dataset.revealStyle = 'footer';
      }
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-scroll-reveal', 'visible');
            entry.target
              .querySelectorAll<HTMLElement>('[data-reveal-grid="stagger"]')
              .forEach((grid) => {
                grid.dataset.revealActive = 'true';
              });
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );

    targets.forEach((target) => {
      target.setAttribute('data-scroll-reveal', 'hidden');
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Render current view
  const renderCurrentPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={handleNavigate}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />
      );
    }

    if (currentPath === '/about') {
      return (
        <AboutPage
          onNavigate={handleNavigate}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />
      );
    }

    if (currentPath === '/contact') {
      return (
        <ContactPage
          onNavigate={handleNavigate}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />
      );
    }

    if (currentPath === '/blog') {
      return <BlogListPage onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      return (
        <BlogPostPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />
      );
    }

    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return (
        <ServicePage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />
      );
    }

    if (currentPath === '/terms') {
      return <TermsPage onNavigate={handleNavigate} />;
    }

    if (currentPath === '/privacy') {
      return <PrivacyPage onNavigate={handleNavigate} />;
    }

    // Default fallback to Homepage
    return (
      <HomePage
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Navigation adhering to Top Bar Contract */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        <div key={currentPath} className="page-transition">
          {renderCurrentPage()}
        </div>
      </main>

      {/* Comprehensive Quiet Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Scope & Squad Estimator Modal */}
      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onNavigateToContact={() => {
          setIsEstimatorOpen(false);
          handleNavigate('/contact');
        }}
      />
    </div>
  );
}
