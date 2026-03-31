'use client';

import { useEffect } from 'react';

export default function MetaHandler() {
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    
    const navLinks = [
      { name: "Home", href: "#home", url: "https://bingkaidigital.vercel.app" },
      { name: "About", href: "#about", url: "https://bingkaidigital.vercel.app/#about" },
      { name: "Products", href: "#products", url: "https://bingkaidigital.vercel.app/#products" },
      { name: "Services", href: "#services", url: "https://bingkaidigital.vercel.app/#services" },
      { name: "Social", href: "#social", url: "https://bingkaidigital.vercel.app/#social" },
    ];
    
    const metaData = {
      title: "Bingkai Digital — UI Kits & Web Templates",
      description: "Ready-to-use Figma UI kits and website code templates to help developers, startups, and creators launch landing pages faster. Modern design, clean code, and SEO optimized.",
      keywords: "UI Kits, Web Templates, Figma UI Kits, HTML Templates, SaaS Landing Page, Portfolio Template, Developer Tools, Website Templates, Bingkai Digital, UI Design, Responsive Templates, Modern UI Kits, Web Development, Startup Templates, Landing Page Design",
      imageUrl: "/logo.png",
      url: "https://bingkaidigital.vercel.app",
      siteName: "Bingkai Digital",
      phone: "+62895329761084",
      year: currentYear,
      googleVerification: "T_2_b1DfuXVFG2mxtyaRZxlKtM-ClYq0gPMKQmlHynI"
    };

    const updateMetaTag = (attribute, attributeValue, content) => {
      if (!content) return;
      
      try {
        const selector = `meta[${attribute}="${attributeValue}"]`;
        let metaTag = document.querySelector(selector);
        
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute(attribute, attributeValue);
          document.head.appendChild(metaTag);
        }
        metaTag.content = content;
      } catch (error) {
        console.error(`Error updating meta tag ${attributeValue}:`, error);
      }
    };

    const updateLinkTag = (rel, href, options = {}) => {
      try {
        const selector = `link[rel="${rel}"]`;
        let linkTag = document.querySelector(selector);
        
        if (!linkTag) {
          linkTag = document.createElement('link');
          linkTag.rel = rel;
          document.head.appendChild(linkTag);
        }
        linkTag.href = href;
        
        Object.keys(options).forEach(key => {
          linkTag.setAttribute(key, options[key]);
        });
      } catch (error) {
        console.error(`Error updating link tag ${rel}:`, error);
      }
    };

    const addStructuredData = (data, id) => {
      try {
        const existingScript = document.getElementById(id);
        if (existingScript) {
          existingScript.remove();
        }
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      } catch (error) {
        console.error(`Error adding structured data ${id}:`, error);
      }
    };

    if (metaData.title) {
      document.title = metaData.title;
    }

    const existingFavicons = document.querySelectorAll("link[rel*='icon']");
    existingFavicons.forEach(link => link.remove());
    
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = metaData.imageUrl;
    favicon.type = 'image/png';
    document.head.appendChild(favicon);
    
    const appleIcon = document.createElement('link');
    appleIcon.rel = 'apple-touch-icon';
    appleIcon.href = metaData.imageUrl;
    document.head.appendChild(appleIcon);

    updateMetaTag('name', 'google-site-verification', metaData.googleVerification);
    
    updateMetaTag('name', 'description', metaData.description);
    updateMetaTag('name', 'keywords', metaData.keywords);
    updateMetaTag('name', 'author', 'Bingkai Digital');
    updateMetaTag('name', 'copyright', `Bingkai Digital ${metaData.year}`);
    updateMetaTag('name', 'robots', 'index, follow');
    updateMetaTag('name', 'googlebot', 'index, follow');
    updateMetaTag('name', 'theme-color', '#FF6B00');
    updateMetaTag('name', 'color-scheme', 'dark');
    updateMetaTag('name', 'distribution', 'global');
    updateMetaTag('name', 'rating', 'general');
    updateMetaTag('name', 'language', 'id');
    updateMetaTag('name', 'geo.region', 'ID');
    updateMetaTag('name', 'geo.placename', 'Indonesia');
    updateMetaTag('name', 'geo.position', '-6.2088;106.8456');
    updateMetaTag('name', 'ICBM', '-6.2088, 106.8456');

    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:url', metaData.url);
    updateMetaTag('property', 'og:title', metaData.title);
    updateMetaTag('property', 'og:description', metaData.description);
    updateMetaTag('property', 'og:image', metaData.imageUrl);
    updateMetaTag('property', 'og:image:width', '1200');
    updateMetaTag('property', 'og:image:height', '630');
    updateMetaTag('property', 'og:image:type', 'image/png');
    updateMetaTag('property', 'og:site_name', metaData.siteName);
    updateMetaTag('property', 'og:locale', 'id_ID');
    updateMetaTag('property', 'og:locale:alternate', 'en_US');
    updateMetaTag('property', 'og:phone_number', metaData.phone);

    updateLinkTag('canonical', metaData.url);
    updateLinkTag('alternate', metaData.url, { hrefLang: 'x-default' });
    updateLinkTag('alternate', `${metaData.url}/id`, { hrefLang: 'id' });
    updateLinkTag('alternate', `${metaData.url}/en`, { hrefLang: 'en' });
    updateLinkTag('manifest', '/site.webmanifest');
    updateLinkTag('preconnect', 'https://fonts.googleapis.com');
    updateLinkTag('preconnect', 'https://fonts.gstatic.com', { crossOrigin: 'anonymous' });
    updateLinkTag('dns-prefetch', 'https://fonts.googleapis.com');

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": metaData.siteName,
      "url": metaData.url,
      "logo": metaData.imageUrl,
      "image": metaData.imageUrl,
      "description": metaData.description,
      "telephone": metaData.phone,
      "sameAs": [
        "https://instagram.com/bingkaidigital.id",
        "https://www.facebook.com/people/Bingkai-Digital/61574308463362",
        "https://lynk.id/bingkaidigital.id"
      ],
      "foundingDate": "2020",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": metaData.phone,
        "contactType": "customer service",
        "availableLanguage": ["Indonesian", "English"]
      }
    }, 'organization-schema');

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": metaData.siteName,
      "url": metaData.url,
      "description": metaData.description,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${metaData.url}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    }, 'website-schema');

    const breadcrumbItems = navLinks.map((link, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": link.name,
      "item": link.url
    }));

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    }, 'breadcrumb-schema');

    console.log('All meta tags and structured data updated successfully');
  }, []);

  return null;
}