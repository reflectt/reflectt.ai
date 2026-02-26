'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, type ReactNode } from 'react'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

/** Anchor that forwards UTM query params from the current page to the destination. */
function UtmLinkInner({
  href,
  children,
  className,
  ...rest
}: { href: string; children: ReactNode; className?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const searchParams = useSearchParams()

  const url = new URL(href)
  for (const key of UTM_KEYS) {
    const val = searchParams.get(key)
    if (val && !url.searchParams.has(key)) {
      url.searchParams.set(key, val)
    }
  }

  return (
    <a href={url.toString()} className={className} {...rest}>
      {children}
    </a>
  )
}

/** Wrapper with Suspense boundary (useSearchParams requires it). */
export function UtmLink(props: { href: string; children: ReactNode; className?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Suspense fallback={<a href={props.href} className={props.className}>{props.children}</a>}>
      <UtmLinkInner {...props} />
    </Suspense>
  )
}
