'use client';

import { useBackgroundPrefetch } from '@/hooks/useBackgroundPrefetch';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Background Prefetching Hook aktivieren
  useBackgroundPrefetch();

  return <>{children}</>;
}
