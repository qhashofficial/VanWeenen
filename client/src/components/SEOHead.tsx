/* ==========================================================
   SEO Head Component – Van Weenen Dakdekkers
   Injects per-page meta tags using document.title + meta manipulation
   ========================================================== */

import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

export default function SEOHead({ title, description, keywords, canonical }: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create description meta
    let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.name = "description";
      document.head.appendChild(descMeta);
    }
    descMeta.content = description;

    // Update or create keywords meta
    if (keywords) {
      let kwMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
      if (!kwMeta) {
        kwMeta = document.createElement("meta");
        kwMeta.name = "keywords";
        document.head.appendChild(kwMeta);
      }
      kwMeta.content = keywords;
    }

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;

    let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description;

    // Canonical
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }
  }, [title, description, keywords, canonical]);

  return null;
}
