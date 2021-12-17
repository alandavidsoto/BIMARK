import React from 'react'
import Skeleton from 'react-loading-skeleton'
export const SkeletonCard = () => {
    return (
        <div className='contendor-skeletonCard' style={{height: "100%"}}>
            <Skeleton width={"100%"} height={"60%"} />
            <Skeleton width={"100%"} height={"20%"} />
            <Skeleton width={"45%"} height={"15%"} inline={true} style={{marginLeft: "7px" }}/>
            <Skeleton width={"45%"} height={"15%"} inline={true} style={{marginLeft: "6px" }}/>
        </div>
    )
}
