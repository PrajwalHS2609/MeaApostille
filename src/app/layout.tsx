import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./../components/NavBar/NavBar";
import Footer from "./../components/Footer/Footer";
import PopupForm from './../components/PopupForm/PopupForm';
import Whatsapp from './../components/Whatsapp/Whatsapp';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/Favicon.ico" />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
        <PopupForm/>
        <Whatsapp/>
      </body>
    </html>
  );
}
