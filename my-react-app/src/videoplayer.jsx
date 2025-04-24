const Video = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-start bg-white px-4 sm:px-6 lg:px-20 py-6 lg:space-x-25 space-y-8 lg:space-y-0">
            <div className="bg-white p-3 rounded-xl shadow-md w-full lg:max-w-3xl">
                <img
                    src="/components/cvideo.jpg"
                    alt="Video Thumbnail"
                    className="rounded-xl shadow-lg w-full h-auto"
                />
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 space-y-4 sm:space-y-0">
                    <div className="text-lg font-semibold">
                        1. Complete C language Tutorial - One Shot
                    </div>
                    <button onClick={()=>alert("Added to watch later") }
                        className="border border-gray-400 px-4 py-1 rounded-lg text-sm hover:bg-indigo-300">
                        Watch Later
                    </button>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mt-5">
                    Introduction, Installation (VS Code), Compiler + Setup, Variables, Data types + Input/Output, Instructions & Operators,
                    Conditional Statements, Loop Control Statements, Functions & Recursion, Pointers, Arrays, Strings, Structures, File I/O, Dynamic Memory Allocation
                </p>
            </div>
            

            <div className="bg-white p-3 rounded-xl shadow-md w-full lg:max-w-sm">
                <div className="bg-indigo-400 rounded-xl text-white p-4 mb-4 flex items-center space-x-4">
                    <img
                        src="/components/shradha.jpeg"
                        alt="Instructor"
                        className="w-16 h-16 rounded-sm object-cover"
                    />
                    <div>
                        <div className="text-lg font-semibold">Shraddha Khapra</div>
                        <div className="text-sm">Apna College</div>
                        <div className="mt-2 underline">My Notes</div>
                    </div>
                </div>

                <div className="text-sm font-semibold mb-2">1. Lesson 10hr 32min</div>

                <div className="bg-gray-300 rounded-xl text-black p-4 mb-4 flex items-center space-x-4">
                    <img
                        src="/components/cvideo.jpg"
                        alt="Instructor"
                        className="w-20 h-14 rounded-sm object-cover"
                    />
                    <div>
                        <div className="text-lg font-semibold">Complete C Language</div>
                        <div className="text-lg font-semibold">Tutorial - One Shot</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Video;
