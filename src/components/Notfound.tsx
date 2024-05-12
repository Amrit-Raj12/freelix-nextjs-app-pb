import React from "react"

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 text-gray-600">404</h1>
        <p className="text-lg text-gray-600">
          Movies/Series you are looking for are not found!
        </p>
      </div>
    </div>
  )
}

export default NotFound
