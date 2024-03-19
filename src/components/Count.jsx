import React, {useState, useEffect} from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log("useEffectが実行されました");
    }, [count])

    const countUp = () => {
        setCount(count + 1);
    }

    const countDown = () => {
        setCount(count - 1);
    }

  return (
    <>
     <h1>カウントの機能</h1>
     <p>現在のカウント：{count}</p>
     <button onClick={() => countUp()}>+</button>
     <button onClick={() => countDown()}>-</button>
     <p>現在のカウント：{count2}</p>
     <button onClick={() => setCount2(count2 + 1)}>+</button>
     <button onClick={() => countDown(count2 - 1)}>-</button>
    </>
  )
}

export default Count