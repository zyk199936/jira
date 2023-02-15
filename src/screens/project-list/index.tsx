import React from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useEffect, useState } from "react"
import { cleanObject,useMount,useDebounce} from "utils"
import * as qs from "qs"

const apiUrl=process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId:''
  })
  const [list, setList] = useState([])
const debounceParam=useDebounce(param,200)
  // 当param变化时请求工程列表
  useEffect(() => {  
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
    console.log(debounceParam)
  }, [debounceParam])
  
  useMount(() => {  
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })
  return <div>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List users={users} list={list} />
  </div>
}