import React from 'react'

export default function TableRow({date,views,article}) {
  return (
    <tr>
        <td>{date}</td>
        <td>{views}</td>
        <td>{article}</td>
    </tr>
  )
}
