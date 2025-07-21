'use client'

import { useEffect } from 'react'

export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = `${title} | Team C.R.E.W.`
  }, [title])

  return null
}