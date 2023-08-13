import Topic from "./topic";

function Navbar(prop: {topics: string[]}) {
    const topics = prop.topics;
    
    return (
        <div className="h-32">
        <div className="relative w-screen" /*bg-blue-400*/>
            <nav className="text-4xl text-emerald-50 flex flex-wrap space-x-2 backdrop-filter backdrop-blur-lg bg-blue-400 bg-opacity-10 border-blue-950">
                {topics.map((topicName) => (
                    <Topic topicName={topicName} />
                )
                )}
            </nav>
        </div>
        </div>
    )
}

export default Navbar;