import { ReactComponent as GetStartedSvg  } from "../../assets/illustration-empty.svg";

const GetStarted = () => {

    return (
        <div className="my-8 mx-auto lg:w-6/12 text-center">
            <div className="mx-auto w-fit"> {/* Center the content */}
                <GetStartedSvg />
            </div>
            
            <h2 className="text-2xl font-bold">Let's get you started</h2>
            <p className="text-slate-500 mt-4  ">Use the “Add new link” button to get started. Once you have more than one link, 
            you can reorder and edit them. 
            We’re here to help you share your profiles with everyone!</p>
        </div>
    )
}

export default GetStarted;