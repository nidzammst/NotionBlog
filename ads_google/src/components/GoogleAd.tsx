"use client"

import { useEffect } from 'react'

export enum AdType {
  DEFAULT,
  ARTICLE,
  VERTICAL
}

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[]
  }
}

const adUnitProps: Record<AdType, any> = {
  [AdType.DEFAULT]: {
    'data-ad-slot': '6499625784',
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true'
  },
  [AdType.ARTICLE]: {
    'data-ad-slot': '1286827558',
    'data-ad-format': 'fluid',
    'data-ad-layout': 'in-article'
  },
  [AdType.VERTICAL]: {
    'data-ad-slot': '8076291715',
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true'
  }
}

interface GoogleAdProps {
  variant?: AdType
}


export function GoogleAd({ variant = AdType.DEFAULT }: GoogleAdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <div
      aria-hidden={true}
      style={{ overflow: 'hidden', minWidth: '300px', minHeight: '250px' }}
    >
      <ins
        className="adsbygoogle bg-slate-800"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5532061638278565"
        {...adUnitProps[variant]}
      />
    </div>
  )
}
