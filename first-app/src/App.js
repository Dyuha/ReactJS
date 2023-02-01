import React, { Suspense, useEffect } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./common/Preloader/Preloader";
import Header from "./components/Header/Header";


const App = () => {

  const dispatch = useDispatch();
  const initialized = useSelector( state => state.app.initialized )

  useEffect(() => {
    dispatch(initializeApp()); // eslint-disable-next-line
  }, []);

  if (!initialized) {
    return <Preloader />;
  }
  return (
    <Suspense fallback={<Preloader />}>
     <div className="wrapper">
       <Header />
       <Content />
    </div> 
    </Suspense>
  );
};

export default App