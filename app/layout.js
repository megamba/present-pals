import "./globals.css";
import './styles/RootLayout.css';
import NavBar from "./ui/NavBar";
import Header from "./ui/Header";
import PageWrapper from "./ui/PageWrapper";
import MarginWrapper from "./ui/MarginWrapper";

export const metadata = {
  title: "Present Pals",
  description: "An app to help friends exchange gifts",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="root-layout-body">
        <div className="layout-container">
          <NavBar />
          <main className="main-content">
            <MarginWrapper>
              <Header />
              <PageWrapper>{children}</PageWrapper>
            </MarginWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}

