import type { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="card-surface rounded-3xl p-8 lg:p-10">
      {children}
    </div>
  );
}
