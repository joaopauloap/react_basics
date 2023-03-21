import React from 'react'

export default props =>
<div>
    <h1>Marca: {props.nomeMarca}</h1>
    <h2>Produtos</h2>
    <ul>
        {/* {props.children} */}
        {
            React.Children.map(props.children, child=>{
                return React.cloneElement(child,{...props})
            })
        }
    </ul>
</div>