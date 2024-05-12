import React from "react"

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg">Page Not Found!</p>
      </div>
    </div>
  )
}

export default NotFoundPage
