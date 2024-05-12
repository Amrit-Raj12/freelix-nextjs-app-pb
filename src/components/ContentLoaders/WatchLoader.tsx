import React from "react"
import ContentLoader from "react-content-loader"

const WatchLoader = () => (
  <div className="flex items-center justify-center">
    <ContentLoader
      speed={2}
      width={1360}
      height={700}
      viewBox="0 0 1360 700"
      backgroundColor="#434242"
      foregroundColor="#676565"
    >
      <rect x="12" y="35" rx="0" ry="0" width="6" height="600" />
      <rect x="14" y="34" rx="0" ry="0" width="1260" height="6" />
      <rect x="1268" y="40" rx="0" ry="0" width="6" height="600" />
      <rect x="12" y="632" rx="0" ry="0" width="1262" height="600" />
      <rect x="150" y="52" rx="12" ry="12" width="960" height="33" />
      <rect x="56" y="97" rx="14" ry="14" width="1170" height="349" />
      <rect x="88" y="469" rx="0" ry="0" width="1090" height="33" />
      <rect x="88" y="554" rx="0" ry="0" width="1090" height="33" />
      <rect x="126" y="512" rx="0" ry="0" width="1000" height="33" />
    </ContentLoader>
  </div>
)

export default WatchLoader
