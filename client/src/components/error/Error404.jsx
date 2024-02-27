import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Error404() {
    const navigate = useNavigate()
    
    useEffect(() => {
        setTimeout(() => navigate('/home'), 3000)
    },[])

  return (
    <div>
      <img
        src="https://fotografias.antena3.com/clipping/cmsimages02/2022/07/03/031CCBA1-6196-458E-9571-407F86CF485D/uno-accidentes-mas-espeluznantes-historia-halo-salvo-vida-zhou-silverstone_98.jpg?crop=2080,1170,x0,y217&width=1900&height=1069&optimize=low&format=webply"
        alt="error"
      />
    </div>
  );
}

export default Error404;
