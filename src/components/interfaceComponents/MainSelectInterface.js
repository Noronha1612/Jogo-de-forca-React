import React from "react";


export default function MainSelectInterface(props) {
    return (
        <section>
    
          <div className="header"> Selecione sua opção</div>
    
          <div className="button-box">
    
            <button onClick={() => { props.transitionSelectOp(1) } }>Selecionar uma categoria</button>
    
            <button onClick={() => { props.transitionSelectOp(2) } }>Digitar uma palavra</button>
            
          </div>
        </section>
    )
}
