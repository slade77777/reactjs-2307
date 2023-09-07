import {ReactComponentElement, ReactNode, useEffect, useState} from "react";

const withLoadingLogic = (WrapComponent: any) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 5000)
    }, [])

    if (loading) {
      return <p>loading</p>
    } else {
      return <WrapComponent {...props} />
    }
  }
}

export default withLoadingLogic;
