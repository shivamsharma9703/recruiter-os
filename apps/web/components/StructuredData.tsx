export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Recruiter OS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "The all-in-one operating system for professional recruiters. Pipeline management, CRM, AI resume scoring, and revenue tracking.",
    offers: [
      {
        "@type": "Offer",
        name: "Solo",
        price: "0",
        priceCurrency: "USD",
        description: "Free plan for independent recruiters",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "49",
        priceCurrency: "USD",
        description: "Full platform for serious recruiters and small teams",
      },
      {
        "@type": "Offer",
        name: "Agency",
        price: "149",
        priceCurrency: "USD",
        description: "Advanced plan for recruitment agencies",
      },
    ],
    creator: {
      "@type": "Organization",
      name: "Recruiter OS",
      url: "https://recruiteros.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}