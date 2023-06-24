export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Provide email && password ");
    }
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
  hospital
) => {
  e.preventDefault();
  try {
    console.log(
      email,
      password,
      phone,
      website,
      name,
      role,
      organisationName,
      address,
      hospital,
      "register"
    );
  } catch (error) {
    console.log();
  }
};
