import "./Button.scss";

// Componente de boton reutilizable, recibe texto y funcion onClick como props
export const Button = ({ text, onClick, className }) => {
  return (
    <button className={`btn-global ${className || ""}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;