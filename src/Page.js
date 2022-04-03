import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useRecordContext from "./hooks/useRecordContext";

const Page = () => {
  const {id} = useParams();
  const {getRecordById} = useRecordContext()
  const [record, setRecord] = useState({})

  useEffect(()=>{
    getRecordById(id).then((res)=>setRecord(res))
  },[id])

  return(
    <div className="page">
      <div className="page__logo">
        {record.fields?.Logo.map(logo => (
          <img key={logo.id} src={logo.url} alt=""/>
        ))}
      </div>
      <div className="page__title">{record.fields?.Action}</div>

    </div>
  )
}

export default Page;
