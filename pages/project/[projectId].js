import { useRouter } from 'next/router'
import React from 'react'

export default function Project() {
  const router = useRouter()
  const { projectId } = router.query

  return (
    <div>
      Project : {projectId}
    </div>
  )
}
