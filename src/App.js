import {Link} from "react-router-dom";

import useRecordContext from "./hooks/useRecordContext";

import './App.css';

function App() {
  const {state} = useRecordContext()
  return (
    <div className="wrapper">
      {state.map(record => {
        return (
          <div key={record.id} className="item">
            <Link to={`record/${record.id}`} className="link">
              <div className="page">
                <div className="page__logo">
                  {record.fields.Logo.map(logo => (
                    <img key={logo.id} src={logo.url} alt=""/>
                  ))}
                </div>
                <div className="page__title">{record.fields.Action}</div>
              </div>

            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default App;
