"use client";
import { client } from "@/@apollo/client/main";
import Header from "@/layouts/Header";
import Web3Provider from "@/libs/web3/Web3Provider";
import { ApolloProvider } from "@apollo/client";
import { Alex_Brush, Montserrat } from "next/font/google";
import "../styles/global.scss";

const alex_Brush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alexBrush",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <Web3Provider>
          <body
            className={`${alex_Brush.variable} ${montserrat.variable} overflow-x-hidden relative`}
          >
            <Header />
            {children}
          </body>
        </Web3Provider>
      </ApolloProvider>
    </html>
  );
}
