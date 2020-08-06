import { firebaseAuth } from '../../firebaseUtils';

const AuthProvider = () => {
  firebaseAuth.onAuthStateChanged((user) =>{
    if(user !== null){
      return true;
    }else{
      return false;
    }
  });
};

export default AuthProvider;