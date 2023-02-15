import React from "react"
export interface User{
  id:string,
  name:string,
  email:string,
  title:string,
  organization:string,
}
interface SearchPanelProps{
  users: User[],
  param: {
    name: string,
    personId:string
  },
  setParam:(param:SearchPanelProps['param'])=>void
}
export const SearchPanel = ({users,param,setParam}:SearchPanelProps) => {
  
  return <form action="">
    <div>
      {/* setParam(Object.assign({},param,{name:evt.target,value})) */}
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value
      })} />
      <select value={param.personId} onChange={evt => setParam({
        ...param,
        personId: evt.target.value
      })}>
        <option value={''}>负责人</option>
        {users.map(users =>
          <option key={users.id} value={users.id}>{users.name}</option>
        )}
      </select>
    </div>
  </form>
}