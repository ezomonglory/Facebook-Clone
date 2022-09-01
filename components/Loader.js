export default function Loader() {
    return (
        <>
            <div className="absolute top-0 left-0 right-0 bottom-0 items-center flex flex-col justify-center"
            >
                <div className="spinner relative  w-[40px] h-[40px] rounded-full">
                    <div className="bar1 absolute"></div>
                    <div className="bar2 absolute"></div>
                    <div className="bar3 absolute"></div>
                    <div className="bar4 absolute"></div>
                    <div className="bar5 absolute"></div>
                    <div className="bar6 absolute"></div>
                    <div className="bar7 absolute"></div>
                    <div className="bar8 absolute"></div>
                    <div className="bar9 absolute"></div>
                    <div className="bar10 absolute"></div>
                    <div className="bar11 absolute"></div>
                    <div className="bar12 absolute"></div>
                </div>
            </div>
        </>
    );
}

export const CardLoader = ({ height = 200, width, count = 4 }) => {
    return <>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-2'>
            {Array.from(Array(count).keys()).map((i) => <div key={i} className="flex flex-col items-center justify-center">
                <div className="photo shimmer" style={{
                    height: height,
                    width: width ?? '100%'
                }}></div>
                <div className="lines shimmer"></div>
                <div className="lines shimmer"></div>
                <div className="lines shimmer"></div>
            </div>)}
        </div>
    </>
}