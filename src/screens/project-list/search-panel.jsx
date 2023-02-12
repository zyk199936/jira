import React from "react"
import { useEffect, useState } from "react"

export const SearchPanel = ({users,param,setparam}) => {
  
  return <form action="">
    <div>
      {/* setparam(Object.assign({},param,{name:evt.target,value})) */}
      <input type="text" value={param.name} onChange={evt => setparam({
        ...param,
        name: evt.target.value
      })} />
      <select value={param.personId} onChange={evt => setparam({
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