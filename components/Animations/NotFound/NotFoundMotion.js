import { useEffect, useRef, useState } from 'react'
import { NotFoundWeb } from '@/components/Animations/NotFound/NotFoundWeb'

const NotFoundMotion = () => {
  // lottieインスタンスを定義する
  const [lottie, setLottie] = useState(null)
  // lottieを表示する要素を定義する
  const NotFoundFile = useRef(null)

  // マウント時にlottieインスタンスを作成し、stateに格納する
  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default))
  }, [])
  // lottieインスタンスの作成時にパラメータを引数に入れてアニメーションを読み込む
  useEffect(() => {
    if (lottie) {
      NotFoundWeb.container = NotFoundFile.current
      const animationLoop = lottie.loadAnimation(NotFoundWeb)

      return () => {
        animationLoop.destroy()
      }
    }
  }, [lottie])
  return (
    <div ref={NotFoundFile} style={{ width: '100%', paddingTop: '10px' }} />
  )
}
export default NotFoundMotion
