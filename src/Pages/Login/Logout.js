import { firebaseAuth } from '../../firebaseUtils';
import Swal from 'sweetalert2';
const Logout = () => {

  return (
    firebaseAuth
    .signOut()
    .then(() => {
      Swal.fire('Volte Sempre')
  })
  )
};

export default Logout;
