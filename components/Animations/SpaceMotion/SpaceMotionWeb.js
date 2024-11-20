import { useEffect, useRef, useState } from 'react'
import { SpaceMotion } from '@/components/Animations/SpaceMotion/SpaceMotion'

const SpaceMotionWeb = () => {
  // lottieインスタンスを定義する
  const [lottie, setLottie] = useState(null)
  // lottieを表示する要素を定義する
  const globeLoop2 = useRef(null)

  // マウント時にlottieインスタンスを作成し、stateに格納する
  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default))
  }, [])
  // lottieインスタンスの作成時にパラメータを引数に入れてアニメーションを読み込む
  useEffect(() => {
    if (lottie) {
      SpaceMotion.container = globeLoop2.current
      const animationLoop = lottie.loadAnimation(SpaceMotion)

      return () => {
        animationLoop.destroy()
      }
    }
  }, [lottie])
  return <div ref={globeLoop2} style={{ width: '100%' }} />
}
export default SpaceMotionWeb
