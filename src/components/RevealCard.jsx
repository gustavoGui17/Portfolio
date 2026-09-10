import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const RevealItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0;
  transform: translateY(32px);
  will-change: opacity, transform;
  transition: opacity 0.45s ease-out, transform 0.45s ease-out;

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`

export function RevealCard({ children, delay = 0, ...props }) {
  const [ref, isVisible] = useScrollReveal()
  return (
    <RevealItem
      ref={ref}
      className={isVisible ? 'revealed' : ''}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </RevealItem>
  )
}

export function RevealSection({ children }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 })
  return (
    <RevealItem
      ref={ref}
      className={isVisible ? 'revealed' : ''}
    >
      {children}
    </RevealItem>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
  grid-auto-rows: ${({ $rowHeight }) => $rowHeight ? `${$rowHeight}px` : 'auto'};
  gap: 28px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export function CardsGrid({ children }) {
  const ref = useRef(null)
  const [rowHeight, setRowHeight] = useState(0)

  useEffect(() => {
    const grid = ref.current
    if (!grid) return

    const measure = () => {
      const cards = grid.children
      if (!cards.length) return
      let max = 0
      for (const card of cards) {
        if (card.scrollHeight > max) max = card.scrollHeight
      }
      setRowHeight(max)
    }

    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(grid)
    for (const child of grid.children) ro.observe(child)

    if (document.fonts) {
      document.fonts.ready.then(measure).catch(() => {})
    }

    return () => ro.disconnect()
  }, [children])

  return (
    <Grid ref={ref} $rowHeight={rowHeight}>
      {children}
    </Grid>
  )
}
