import MainMenu from "./ui/MainMenu";

export const Left = function ({children}) {

  return (

    <div className="page">

      <MainMenu className="main-menu" />

      {chlidren}

    </div>

  );

}


export const Right = function ({children}) {

  return (

    <div className="page">

      {chlidren}

      <MainMenu className="main-menu" />

    </div>

  );

}


export const Whoops404 = ({ location }) =>
    <div>
        <h1>Whoops, resource not found</h1>
        <p>Could not find {location.pathname}</p>
    </div>
