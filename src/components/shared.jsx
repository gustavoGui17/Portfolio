import styled, { keyframes } from 'styled-components'

export const Section = styled.section`
  padding: 96px 0 88px;
  scroll-margin-top: 90px;
  border-bottom: 3px dashed rgba(255, 255, 255, 0.08);

  &:last-child {
    border-bottom: none;
  }

  h1,
  h2 {
    display: inline-block;
    position: relative;
    margin-bottom: 12px;
    padding: 0 4px 10px;
    letter-spacing: 2px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background: currentColor;
      box-shadow: 0 7px 0 var(--pixel-black);
    }
  }

  h1 + p,
  h2 + p {
    margin-top: 24px;
    margin-bottom: 40px;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--pixel-grey);
  }

  @media (max-width: 720px) {
    padding: 72px 0 64px;
  }
`

const coinSpin = keyframes`
  0% {
    transform: scaleY(0.3);
  }
  25% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.3);
  }
  75% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0.3);
  }
`

export const MarioCoin = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 10px;
  vertical-align: -2px;
  background: linear-gradient(90deg, var(--pixel-orange) 25%, var(--pixel-yellow) 50%, var(--pixel-orange) 75%);
  border: 2px solid var(--pixel-black);
  border-radius: 50%;
  box-shadow: 2px 2px 0 var(--pixel-black);
  animation: ${coinSpin} 1.2s steps(2) infinite;
  transform-origin: center;
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
  gap: 28px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const PixelCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  background: var(--pixel-panel);
  border: 3px solid var(--pixel-black);
  box-shadow: 4px 4px 0 var(--pixel-black);
  transition: transform 0.15s steps(2), box-shadow 0.15s steps(2);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0 var(--pixel-black);
  }
`

export const QuestCard = styled(PixelCard)`
  &::before {
    content: '?';
    position: absolute;
    top: -12px;
    left: -12px;
    z-index: 2;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--pixel-yellow);
    border: 3px solid var(--pixel-black);
    box-shadow: 3px 3px 0 var(--pixel-black);
    font-family: var(--font-pixel);
    font-size: 12px;
    color: var(--pixel-black);
  }
`

export const CardActions = styled.div`
  margin-top: auto;
  padding-top: 18px;
  border-top: 3px solid var(--pixel-black);
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent 0 10px,
      rgba(231, 149, 44, 0.12) 10px 11px
    );
  background-position: 0 0;
  background-size: 100% 22px;
  background-repeat: no-repeat;
`

export const PixelButton = styled.a`
  display: inline-block;
  padding: 13px 18px;
  font-family: var(--font-pixel);
  font-size: 10px;
  color: var(--pixel-black);
  background: var(--pixel-yellow);
  border: 3px solid var(--pixel-black);
  box-shadow: 3px 3px 0 var(--pixel-black);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: transform 0.12s steps(2), box-shadow 0.12s steps(2),
    background 0.12s steps(2);

  &:hover {
    background: var(--pixel-orange);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--pixel-black);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 var(--pixel-black);
  }
`

export const PixelTag = styled.span`
  display: inline-block;
  padding: 6px 9px;
  margin: 0 4px 4px 0;
  font-family: var(--font-pixel);
  font-size: 8px;
  color: var(--pixel-black);
  background: var(--pixel-highlight);
  border: 2px solid var(--pixel-black);
  box-shadow: 2px 2px 0 var(--pixel-black);
  text-transform: uppercase;
`