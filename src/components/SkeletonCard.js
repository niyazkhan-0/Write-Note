import Skeleton from "react-loading-skeleton"

export const SkeletonCard = () => {
    return (
        <div className='card'>
            <p className="title"> <Skeleton/> </p>
            <p className="description"> <Skeleton count={2} /> </p>
            <p className='control'>
                <Skeleton width="50px" />
            </p>
        </div>
    )
}
