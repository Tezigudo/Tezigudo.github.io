import Topic from "./topic";

function Navbar(prop: {topics: string[]}) {
    const topics = prop.topics;
    
    return (
        <div className="relative h-32 w-screen inset-y-3 inset-x-3" /*bg-blue-400*/>
            <nav className="text-4xl text-emerald-50 flex flex-wrap space-x-2">
                {topics.map((topicName) => (
                    <Topic topicName={topicName} />
                )
                )}
            </nav>
        </div>
    )
}

export default Navbar;