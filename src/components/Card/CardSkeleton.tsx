import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader: React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={255}
        height={300}
        viewBox="0 0 255 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="31" y="36" rx="8" ry="8" width="202" height="20" />
        <rect x="0" y="93" rx="8" ry="8" width="77" height="24" />
        <rect x="118" y="94" rx="8" ry="8" width="70" height="24" />
        <rect x="194" y="95" rx="8" ry="8" width="59" height="24" />
        <rect x="0" y="128" rx="12" ry="12" width="255" height="177" />
    </ContentLoader>
)

export default MyLoader