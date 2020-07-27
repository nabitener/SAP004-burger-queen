import { firebaseAuth } from '../../firebaseUtils';

const Logout = () => {

  return (
    firebaseAuth
    .signOut()
    .then(() => {
    console.log('saiu')
  })
  )
};

export default Logout;
