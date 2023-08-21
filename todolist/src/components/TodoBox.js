import React from 'react'

const TodoBox = ({children}) => {
    const style = {
        boxStyle : {
            width: '512px',
            height: '768px',
            background : 'white',
            position: 'relative',
            borderRadius : '16px',
            margin : '96px auto 32px auto',
            display : 'flex',
            flexDirection : 'column'
        }
    };

  return (
    <>
    <div style={style.boxStyle}>{children}</div>
    </>
  )
}

export default TodoBox
