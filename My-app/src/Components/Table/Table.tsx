import React from "react"
// add props to complete this table component
// pagination
// paginate: boolean
// onPageSizeChange
// onPrev/NextPage
const Table = ({columns,data}:any) => {
    console.log(data)
    console.log(columns)
    return (
        
        <table>
            
            <thead>
                <tr>
                    {
                        columns.map((c: any) => {
                            return <th key={c.id}>{c.displayName}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((s: any) => {
                        return (
                            <tr key={s.id}>
                                {
                                    columns.map((c: any) => {
                                        return <td>{s[c.id]}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;
