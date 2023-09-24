import { Tooltip } from '@mui/material'
import { useState, useEffect } from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

export default function ExplanatoryTooltip({ tooltipText }) {
  const [openTooltip, setOpenTooltip] = useState(false)
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1024px)').matches
  )
  useEffect(() => {
    window
      .matchMedia('(min-width: 1024px)')
      .addEventListener('change', (e) => setMatches(e.matches))
    console.log(window.matchMedia('(min-width: 1024px)').matches)
  }, [])

  return (
    <Tooltip
      title={tooltipText}
      placement="top"
      arrow
      open={openTooltip}
      onClick={matches ? null : () => setOpenTooltip(true)}
      onClose={matches ? null : () => setOpenTooltip(false)}
      onMouseEnter={matches ? () => setOpenTooltip(true) : null}
      onMouseLeave={matches ? () => setOpenTooltip(false) : null}
    >
      <QuestionMarkCircleIcon />
    </Tooltip>
  )
}
