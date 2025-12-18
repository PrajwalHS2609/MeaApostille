import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/style.css"
import NavBar from "./../components/NavBar/NavBar";
import Footer from "./../components/Footer/Footer";
import PopupForm from "./../components/PopupForm/PopupForm";
import Whatsapp from "./../components/Whatsapp/Whatsapp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/Favicon.ico" />
        <meta
          name="google-site-verification"
          content="WeWUvSv_gLtEq3ZkhPSMPuEiadEMoGpi3R3w2smGq1w"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is MEA Apostille and why is it required?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MEA Apostille is an official certification issued by the Ministry of External Affairs (MEA), Government of India, to make Indian documents legally valid for use in Hague Convention countries.",
                },
              },
              {
                "@type": "Question",
                name: "Which countries accept MEA Apostille?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MEA Apostille is accepted by all Hague Convention member countries including the USA, UK, Germany, France, Australia, Netherlands, Italy, Spain, and many others.",
                },
              },
              {
                "@type": "Question",
                name: "Which documents can be apostilled by MEA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Educational certificates, personal documents such as birth and marriage certificates, and commercial documents like power of attorney, MOA, and business agreements can be apostilled by MEA.",
                },
              },
              {
                "@type": "Question",
                name: "How long does MEA Apostille take in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MEA Apostille typically takes 3 to 5 working days, depending on the document type and state authentication requirements.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of MEA Apostille in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of MEA Apostille in Bangalore generally ranges from ₹3,000 to ₹12,000, based on the document type and processing requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Is embassy attestation required after MEA Apostille?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, embassy attestation is not required once a document is apostilled by MEA for use in Hague Convention countries.",
                },
              },
              {
                "@type": "Question",
                name: "Can MEA Apostille be done without visiting government offices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, government-approved agencies like Goodway Attestation offer complete doorstep services including document pickup, apostille processing, and delivery.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if documents are not apostilled correctly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Incorrect or incomplete apostille can lead to visa rejection, admission delays, immigration issues, or legal complications in the destination country.",
                },
              },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.goodwayattestation.com/#localbusiness",
            name: "Goodway Attestation",
            url: "https://www.goodwayattestation.com",
            logo: "https://meaapostilleservice.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6174c7ac.png&w=640&q=75",
            image:
              "https://meaapostilleservice.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndian%20Embassy.07a8d43b.png&w=1080&q=75",
            description:
              "Goodway Attestation is a government-approved attestation & apostille agency in Bangalore offering services for educational, personal, and commercial documents with guaranteed delivery.",
            telephone: "+91 9148889666",
            priceRange: "₹3000 - ₹12000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bangalore",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560003",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "12.9716",
              longitude: "77.5946",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "20:30",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Bangalore",
            },
            sameAs: [
              "https://www.facebook.com/goodwayattestation",
              "https://www.instagram.com/goodwayattestation.india/",
              "https://www.linkedin.com/company/goodway-attestation/",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Attestation Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "MEA Apostille in Bangalore",
                    description:
                      "Fast and government-approved MEA Apostille service for Indian-issued documents.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "MEA Attestation",
                    description:
                      "Ministry of External Affairs attestation for educational, personal, and commercial certificates.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Embassy & MOFA Attestation",
                    description:
                      "Complete embassy and apostille services for Hague countries.",
                  },
                },
              ],
            },
          })}
        </script>
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
        <PopupForm />
        <Whatsapp />
      </body>
    </html>
  );
}
