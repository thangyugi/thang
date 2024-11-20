import { MouseParallax, ScrollParallax } from 'react-just-parallax'

export const MouseMove = () => (
  <>
    <MouseParallax>
      <p>Im reacting to mouse move</p>
    </MouseParallax>

    <ScrollParallax>
      <p>Im reacting to scroll</p>
    </ScrollParallax>
  </>
)
