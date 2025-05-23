
import React from 'react'

const A = ({node}) =>{ 
  
  
  return (
    
    <li>
        {node.name}
    
      {node.children && (
        <ul>
          {node.children.map(k=>(
            <A key={k.id} node={k}/>
          ))}
        </ul>
      )}

    </li>
    
  )
}






const App = () => {
  const data=[
      {id:1,name:'Chinna Venkaiah&Lasmavva',children:[
        {id:2,name:'Balavva&Balaiah',children:[
          {id:3,name:'Satyavva&Ramulu'},
          {id:4,name:'Balrajavva&Ramulu',children:[
            {id:5,name:'HanmanthReddy&RamaDevi',children:[
              {id:6,name:'KarthikReddy'}
            ]},
            {id:7,name:'BalReddy&Madhuri',children:[
              {id:8,name:'BhaveshReddy'},
              {id:9,name:'Mithuna'},
            ]},
             {id:10,name:'KrishnaReddy&SwarnaLatha',children:[
              {id:11,name:'RuthikeshReddy'},
              {id:12,name:'Ranvitha'},
            ]}

          ]},
          {id:13,name:'Sugunavva&Mallaiah',children:[
            {id:14,name:'KamalakarReddy'}
          ]},
          {id:15,name:'HanmanthReddy&Radhavva',children:[
            {id:16,name:'RajkumarReddy&VaraLaxmi',children:[
              {id:17,name:'Tanushree'},
              {id:18,name:'Pradyun'}

            ]},
              {id:19,name:'SwarnaLatha'}
           ]}

        ]}

      ]}
     ]
     const style={
    background:'black',
    color:'blue'
  }

  return (
    <div style={style}>
      <h1>Family Tree</h1>
    <ul>
      {data.map(i=>(
        <A key={i.id} node={i}/>
      ))}
    </ul>
    </div>
  )
}

export default App






