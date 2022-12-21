import React from "react"
import { useParams } from 'react-router-dom';


const withParams = (Component) => {
  const TakeParams = (props) => {
    return <Component {...props} params={useParams()}/>
  }
  return TakeParams
}

export default withParams;