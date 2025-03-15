import { Theme } from "@radix-ui/themes";

export function Layout({ children }: { children: React.ReactNode }) {
  return <Theme>{children}</Theme>;
}
