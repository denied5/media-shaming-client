import { useContext } from "react";
import { RecordContext } from "../contexts/RecordContext";

const useRecordContext = () => {
  const {
    state,
    getRecordById,
  } = useContext(RecordContext);

  return {
    state,
    getRecordById,
  }
}

export default useRecordContext;
