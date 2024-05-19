"use client";
import { client } from "@/@apollo/client/main";
import Header from "@/layouts/Header";
import Web3Provider from "@/libs/web3/Web3Provider";
import { ApolloProvider } from "@apollo/client";
import { Alex_Brush, Montserrat } from "next/font/google";
import "../styles/global.scss";
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from "react-query";
import { useState } from "react";
import Footer from "@/layouts/Footer";
import { usePathname } from "next/navigation";
import { MAIN_ROUTE } from "@/constants/constanst";

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
const queryClientOption: QueryClientConfig = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: 1000 * 5 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(new QueryClient(queryClientOption));
  const pathname = usePathname();
  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <Web3Provider>
            <body
              className={`${alex_Brush.variable} ${montserrat.variable} overflow-x-hidden relative`}
            >
              {MAIN_ROUTE.find((name) => pathname == name) && <Header />}
              {children}
              {MAIN_ROUTE.find((name) => pathname == name) && <Footer />}
            </body>
          </Web3Provider>
        </QueryClientProvider>
      </ApolloProvider>
    </html>
  );
}
