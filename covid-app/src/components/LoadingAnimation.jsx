import React from 'react'
import '../css/loadingAnimation.css'
const LoadingAnimation= () => {
      return (
    <div className="loader bg-trasparent p-2 rounded-full flex space-x-3">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
    <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
    <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
  </div> 
      )
}

export default LoadingAnimation
