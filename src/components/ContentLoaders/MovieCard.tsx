import React from "react"
import ContentLoader from "react-content-loader"

const MovieCardLoader = () => (
  <ContentLoader
    speed={4}
    width={320}
    height={400}
    viewBox="0 0 320 400"
    backgroundColor="#363535"
    foregroundColor="#757575"
  >
    <rect x="34" y="28" rx="10" ry="10" width="280" height="320" />
  </ContentLoader>
)

export default MovieCardLoader
