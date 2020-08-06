import { firebaseAuth } from '../../firebaseUtils';

const Logout = () => {

  return (
    firebaseAuth
    .signOut()
    .then(() => {
    alert('Volte Sempre')
  })
  )
};

export default Logout;
