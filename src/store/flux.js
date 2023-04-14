const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      user: {
        name: "",
        last_Name: "",
        email: "",
        phone: "",
        password: "",
      },
      token: "",
      user_id: 0,
      email: "",
      loginUser: [],
    },
    actions: {
      handleChange: (e) => {
        let { user } = getStore();
        setStore({
          user: {
            ...user,
            [e.target.name]: e.target.value,
          },
        });
      },
      /* eslint-disable no-restricted-globals */
      handleUserRegister: (e, navigate) => {
        e.preventDefault();
        const { user } = getStore();
        fetch("http://localhost:8080/users", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({
              user: {
                name: "",
                last_Name: "",
                email: "",
                phone: "",
                password: ""
              },
            });
            console.log(data);
            alert(JSON.stringify(data));
            navigate("/login");
          })
          .catch((error) => {
            alert(error.message);
            console.log(error);
          });
      },
      fetchUserData: (user_id, token) => {
        fetch(`http://localhost:8080/users/${user_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({
              loginUser: data,
              user: {
                name: "",
                last_Name: "",
                email: "",
                phone: "",
                password: "",
              },
            });
          })
          .catch((error) => console.log(error));
      },
      handleUserLogin: (e, navigate) => {
        e.preventDefault();
        const { user } = getStore();
        fetch("http://localhost:8080/login", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(user),
        })
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            } else if (res.status === 400) {
              throw new Error("Usuario o contraseña incorrectos");
            }
          })
          .then((data) => {
            console.log(data);
            setStore({
              loginUser: data,
              token: data.token,
              user_id: data.user_id,
              email: data.email,
              user: {
                name: "",
                last_Name: "",
                email: "",
                phone: "",
                password: "",
              },
            });
            console.log(data);
            getActions().fetchUserData(data.user_id, data.token);
            navigate("/");
          })
          .catch((error) => {
            alert(error.message);
            console.log(error);
          });
      },
    },
  };
};

export default getState;
