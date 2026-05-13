import type { ReactNode } from 'react'

// Root layout is intentionally minimal.
// html/body/lang/dir are owned by app/[locale]/layout.tsx so the
// lang attribute and RTL direction are set correctly per locale.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children as React.ReactElement
}
