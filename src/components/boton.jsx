import PropTypes from "prop-types";


function BotonProyecto({ classes, title, onClick, active  }) {
    const clasesBoton = `${classes} ${active ? 'showBtn' : ''}`;
  
  
    return (
      <button type="button" className={clasesBoton} onClick={onClick}>
        {title}
      </button>
      
    );
  }
  
  BotonProyecto.propTypes = {
    classes: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool,
  };
  
  export default BotonProyecto;