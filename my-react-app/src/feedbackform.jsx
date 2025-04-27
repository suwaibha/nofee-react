import { useState } from "react";

const Feed = () => {
    const [showPopup, setShowPopup] = useState(true);

    if (!showPopup) return null;

    return (
        <div className="feedbackform min-h-screen flex items-center justify-center bg-white">
            <div className="relative bg-white p-8 rounded-xl shadow-md w-full max-w-100 h-100 border px-0 py-0">
                
                <button
                    type="button"
                    className="absolute top-2 right-2 p-1 text-white bg-indigo-500 rounded-full hover:bg-indigo-600"
                    onClick={() => setShowPopup(false)}
                    aria-label="Close"
                >
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

               
                <div className="bg-indigo-500 text-white px-6 py-3 text-xl font-light rounded-t-xl ">
                    Please help us improve
                </div>
                <div className="text-black text-start mt-4 py-0 px-5">
                 How satisfied are you with out product ?
                </div>

                <div className="text-black text-start mt-4 px-1 py-0">
               
                        <div class="text-start py-1 px-5" >
                          <button className=" hover:opacity-50 active:scale-97 transition">
                            <img src="/components/angry face.png" alt="angry" className="w-12 h-10" />
                          </button>

                          <button className="hover:opacity-50 active:scale-97 transition">
                            <img src="/components/confused.png" alt="sad" className="w-12 h-10" />
                          </button>
  
                          <button className="hover:opacity-50 active:scale-97 transition">
                            <img src="/components/p.png" alt="neutral" className="w-12 h-10" />
                          </button>

                          <button className="hover:opacity-50 active:scale-97 transition">
                          <img src="/components/h.png" alt="happy" className="w-12 h-10" />
                          </button>

                          <button className="hover:opacity-50 active:scale-97 transition">
                            <img src="/components/hh.png" alt=" very happy" className="w-12 h-10" />
                          </button>
                          
                </div>
                              <div className="p-4 ">
                              What do you like/not like about our product ?
                              </div>

                              <div className="px-8">
                              <textarea className="w-full h-20 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your feedback here...">

                              </textarea>


                                </div>
                              <div className="p-4 text-end">
                                <button 
                                type="submit"
                                className="bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-900 transition duration-200  ">
                                    
                                  Submit
                                  </button>
                                </div>

                 </div>

                
            </div>
            
        </div>
    );
};

export default Feed