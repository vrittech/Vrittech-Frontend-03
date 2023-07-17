//button*

const Button = (props) => {

   const dynamicClassName = `btn btn-outline-${props.abc}`
   return (
      <div>
         <button className={dynamicClassName}>{props.abc}</button>
      </div>
   )
}

export default Button;