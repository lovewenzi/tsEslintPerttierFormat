import React from 'react'

const head = () => {
  const log = () => {
    let aa = 'aaaa'

    console.log('say hi' + aa)
  }
  return <div onClick={() => log()}>2222</div>
}

export default head
