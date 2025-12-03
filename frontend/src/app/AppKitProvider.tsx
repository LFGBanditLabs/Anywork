"use client";

import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { base, optimism } from "@reown/appkit/networks";

const queryClient = new QueryClient();

// Get projectId from Reown dashboard
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

// Basic metadata for the modal
const metadata = {
  name: "ANYWORK",
  description: "Connect verified artisans with clients across Africa",
  url: "https://anywork.africa",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Networks to support (Base + Optimism as in your original config)
const networks = [base, optimism];

// Create Wagmi adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// Initialize AppKit modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
  },
});

export function AppKitProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
