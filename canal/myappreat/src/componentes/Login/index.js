import React, { useState } from "react";
import firebase from "firebase";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { loginn } from "../../features/userSlice";
import "./styles.css";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [logins, setLogins] = useState(false);

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (!name) return alert("Por favor ingrese un nombre!");
    if (!email) return alert("Por favor ingrese un correo!");
    if (!password) return alert("Por favor ingrese una contraseña");

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          dispatch(
            loginn({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              name: userAuth.user.displayName,
            })
          );
        });
    });
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          loginn({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            name: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => alert(error));
    setEmail("");
    setPassword("");
  };

  const loginGooogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
  } 

  return (
    <div className="login">
      {!logins ? (
        <>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmitLogin}>
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Ingresar</button>
            <button type="button" className="google" onClick={loginGooogle}>Ingresar con Google</button>
          </form>
            
          <p>
            ¿Eres nuevo?{" "}
            <span onClick={() => setLogins(!logins)}>Registrate ahora</span>
          </p>
        </>
      ) : (
        <>
          <h2>Registrar</h2>
          <form onSubmit={handleSubmitRegister}>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Registrar</button>
          </form>
          <p>
            ¿Ya eres usuario?{" "}
            <span onClick={() => setLogins(!logins)}>Iniciar Sesión</span>
          </p>
        </>
      )}
    </div>
  );
};
