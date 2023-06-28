import { userLogin, userRegister } from "../redux/features/auth/authAction";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Provide email && password ");
    }
    store.dispatch(userLogin({ email, password, role }));
    console.log(email, password, role, "login");
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  email,
  password,
  phone,
  website,
  name,
  role,
  organisationName,
  address,
  hospitalName
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        email,
        password,
        phone,
        website,
        name,
        role,
        organisationName,
        address,
        hospitalName,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
