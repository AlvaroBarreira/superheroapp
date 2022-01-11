import React, { useContext } from 'react';
import { HeroeContext } from '../../Contexts/HeroesContext';
import Alert from 'react-bootstrap/Alert';

function AlertDismissibleExample() {

    const {show, setShow, text} = useContext(HeroeContext);

    if (show) {
      return (
        <Alert 
          transition= "Fade"
          className="container" 
          style={{border: "none !important"}}
          variant="danger" 
          onClose={() => setShow(false)} 
          dismissible>
          <Alert.Heading>Warning!</Alert.Heading>
          <p>
            {text}
          </p>
        </Alert>
        
      );

      
    }
   
}
  

export default AlertDismissibleExample;