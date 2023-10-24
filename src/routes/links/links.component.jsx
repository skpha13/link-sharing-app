import Link from "../../components/link/link.component";
import GetStarted from "../../components/getStarted/getStarted.component"

const Links = () => {
    return(
        <div className="bg-white rounded-lg m-4 p-8">
            <h2 className="text-2xl font-bold">Customize your links</h2>
            <p className="text-slate-600 mt-2">Add/edit/remove links below and then share all your profiles with the world!</p>
            <button className=" border-2 border-solid border-violet-400 rounded-lg p-2 w-full mt-8 font-semibold text-indigo-600">+ Add new link</button>
            <GetStarted/>
        </div>
    )
}

export default Links;