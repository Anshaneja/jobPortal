
import Skeleton from 'react-loading-skeleton';
export default function JobSkeleton(){
    return [...Array(10)].map( () => 
            <div className=" flex p-6 flex-col gap-1 justify-center rounded-lg shadow-lg hover:shadow-xl">
                <h3 className="text-xl font-bold text-primary"> <Skeleton width={140}/></h3>
                <h4 className="text-md text-gray-800"> <Skeleton width={80}/> </h4>
                <div className="flex justify-between">
                    <span className="flex items-center text-sm">
                        <h5 className=""> <Skeleton width={70} /> </h5>
                    </span>
                    <span className="flex items-center text-sm">
                        <h5> <Skeleton width={100} /> </h5>
                    </span>  
                </div>
                <Skeleton /> 
                <Skeleton /> 
            </div> 
    )
}