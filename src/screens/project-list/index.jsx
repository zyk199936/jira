import React from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useEffect, useState } from "react"
import { cleanObject } from "utils"
import * as qs from "qs"

const apiUrl=process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [param, setparam] = useState({
    name: '',
    personId:''
  })
  const [list, setList] = useState([])

  // 当param变化时请求工程列表
  useEffect(() => {  
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])
  
  useEffect(() => {  
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  },[])
  return <div>
    <SearchPanel users={users} param={param} setparam={setparam} />
    <List users={users} list={list} />
  </div>
}