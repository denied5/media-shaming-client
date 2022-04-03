import {
  createContext,
  useState,
  useEffect
} from "react";
import Airtable from "airtable";

export const RecordContext = createContext([])

export const base = new Airtable({ apiKey: 'keyPyOgHCLHxxHwae'}).base('appuRF8EsJqiqYYR0')

export const RecordContextProvider = ({children}) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    try {
      base('Grid view')
        .select({
          // maxRecords: 3,
          // view: 'Grid view'
        })
        .eachPage((records) => {
          setState(records);
        })
    } catch (err) {
      console.log(err)
    }
  },[])


  const getRecordById = async (id) => {
    return await base('Grid view').find(id);
  }

  const contextValues = {
    state,
    getRecordById,
  }

  return(
    <RecordContext.Provider value={contextValues}>
      {children}
    </RecordContext.Provider>
  )
}
