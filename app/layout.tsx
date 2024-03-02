import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly/ClientOnly";
import Header from "./Components/Header/Header";
import "./globals.css";
import RegisterModal from "./Modal/RegisterModal";


export const metadata: Metadata = {
  title: "Aribnb",
  description: "Airbnb clone",
};
const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/* <Modal isOpen title="Hello World" actionLabel="Submit"></Modal> */}
          <RegisterModal></RegisterModal>
          <Header></Header>
          </ClientOnly>
        {children}
        </body>
    </html>
  );
}
