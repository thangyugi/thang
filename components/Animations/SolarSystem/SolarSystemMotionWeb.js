import { useEffect, useRef, useState } from 'react'
import { SolarWeb } from '@/components/Animations/SolarSystem/SolarWeb'

const SolarSystemMotionWeb = () => {
  // lottieインスタンスを定義する
  const [lottie, setLottie] = useState(null)
  // lottieを表示する要素を定義する
  const globeLoop = useRef(null)

  // マウント時にlottieインスタンスを作成し、stateに格納する
  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default))
  }, [])
  // lottieインスタンスの作成時にパラメータを引数に入れてアニメーションを読み込む
  useEffect(() => {
    if (lottie) {
      SolarWeb.container = globeLoop.current
      const animationLoop = lottie.loadAnimation(SolarWeb)

      return () => {
        animationLoop.destroy()
      }
    }
  }, [lottie])
  return <div ref={globeLoop} style={{ width: '100%', paddingTop: '10px' }} />
}
export default SolarSystemMotionWeb
