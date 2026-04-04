import "./Button.scss";

// Componente de boton reutilizable, recibe texto y funcion onClick como props
export const Button = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;