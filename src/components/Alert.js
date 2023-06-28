import React from 'react'

export default function Alert(props) {


  return (


    props.alert &&    // if prps.aleet is null then the next step will not run.
    <div>

      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">

       <strong>{props.alert.type}</strong> : {props.alert.msg}

      </div>

    </div>
  )
}
