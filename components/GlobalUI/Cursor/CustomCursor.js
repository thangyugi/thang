import React, { useEffect, useState, useRef } from 'react'

// Context
import {
    useGlobalDispatchContext,
    useGlobalStateContext,
} from '../../../context/global-context'

const CustomCursor = () => {
    const { cursorType } = useGlobalStateContext()
    // const [mousePosition, setMousePosition] = useState({
    //   x: 400,
    //   y: 400,
    // })

    const cursor = useRef(null)
    const onMouseMove = (event) => {
        const { clientX, clientY } = event
        cursor.current.style.left = `${clientX}px`
        cursor.current.style.top = `${clientY}px`
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <>
            <div
                className={`custom-cursor ${
                    !!cursorType ? 'hovered' : ''
                } ${cursorType}`}
                // style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
                ref={cursor}
            >
                {' '}
            </div>
            {/* <div
        className={`cursor-small ${
          !!cursorType ? 'hovered' : ''
        } ${cursorType}`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      >
        {' '}
      </div> */}
        </>
    )
}

export default CustomCursor
