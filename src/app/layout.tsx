"use client";
import { client } from "@/@apollo/client/main";
import { MAIN_ROUTE } from "@/constants/constanst";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Web3Provider from "@/libs/web3/Web3Provider";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Alex_Brush, Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
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
  const queryClient = new QueryClient();
  const pathname = usePathname();
  return (
    <html lang="en" suppressHydrationWarning>
      <ApolloProvider client={client}>
        <Web3Provider>
          <QueryClientProvider client={queryClient}>
            <body
              className={`${alex_Brush.variable} ${montserrat.variable} overflow-x-hidden relative`}
            >
              {MAIN_ROUTE.find((name) => pathname == name) && <Header />}
              {children}
              {MAIN_ROUTE.find((name) => pathname == name) && <Footer />}
            </body>
          </QueryClientProvider>
        </Web3Provider>
      </ApolloProvider>
    </html>
  );
}
