//pop up
const Feed=()=>{
    return(
        <div className="feedbackform min-h-screen flex items-center justify-center bg-white ">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-80 border-1 h-80 py-0 px-0">  
                <div className="bg-indigo-500 text-white px-10 py-3 text-xl font-light rounded-t-xl ">
                    Please help us improve 
                    <span id="badge-dismiss-dark" class="relative inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-sm dark:bg-gray-700 dark:text-gray-300">
 
            <button type="button" class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 p-1 text-sm text-gray-400 bg-transparent rounded-full hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
            </button>
                    </span>

                </div>     

                
         </div>  
                
        </div> 
    )
}
export default Feed;