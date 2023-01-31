import React from 'react'
import Table from '../Components/Table/Table'

export const MainPage = () => {
    const columns=[{heading:"name"},{heading:"id"},{heading:"university"}]
    const data=[
        {name:"quena",id:1,university:"dxfcgvhb"},
        {name:"quena",id:2,university:"dxfcgvhb"},
        {name:"quena",id:3,university:"dxfcgvhb"}
    ]
  return (
    <div>
        <Table columns={columns} data={data}/>
    </div>
  )
}
