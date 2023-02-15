import React, { FormEvent } from 'react'
const apiUrl=process.env.REACT_APP_API_URL

export const LoginScreen = () => {
  /* interface Base{
    id:number
  }
  interface Advance extends Base{
    name:string
  }
  const text = (p: Base) => {
  }
  const a = { id: 1, name: 'jack' }
  // a和Advance没有关系，但是和Ad
  const b:Advance = { id: 1, name: 'jack' }
  text(a)
  text(b)
  // 接口
  // 鸭子类型（duck typing）:面向接口编程，而不是面向对象编程 
  */
  const login = (param: { username: string, password: string })=>{
    fetch(`${apiUrl}/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify(param)
      }
    ).then(
      async (response: Response) => {
        if (response.ok) {
          
        }
      }
    )
  }
  //HTMLFormElement extends Elements
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault() 
    // evt.currentTarget.elements[0]默认的类型会把这当作Element类型，Element上没有value,所以as HTMLInputElement
    const username=(evt.currentTarget.elements[0] as HTMLInputElement).value
    const password = (evt.currentTarget.elements[0] as HTMLInputElement).value
    login({username,password})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id={'username'} />
        </div>
        <div>
          <label htmlFor="password">密码</label>
          <input type="password" id={'password'} />
        </div>
        <button type={'submit'}>登录</button>
      </form>
    </div>
  )
}
