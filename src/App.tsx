import { myProxy } from "./states/sex";
import { useSnapshot } from "valtio";

export function App() {
    const { numberOfTimesADay } = useSnapshot(myProxy);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit">
                I want to have sex
                <span> {numberOfTimesADay} </span>times a day with you
            </div>
            <div className="py-3" />
            <button
                className="bg-lime-500 border rounded"
                onClick={() => {
                    myProxy.numberOfTimesADay++;
                }}
            >
                Increase count
            </button>
        </div>
    );
}
