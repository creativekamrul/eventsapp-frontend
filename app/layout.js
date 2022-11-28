import Header from "./(RootComponents)/Header";
import '../styles/globals.css'
import Footer from "./(RootComponents)/Footer";
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body>
        <Header />
          {children}
        <Footer />
        </body>
      </html>
    );
  }