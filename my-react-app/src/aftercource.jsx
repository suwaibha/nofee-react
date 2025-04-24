const Aftercource = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-150 border-1 h-90">
                <p className="text-xl font-bold text-center mb-6">
                 <h1>Congratulations! 🎉 </h1>
                </p>
                <p className="text-xl font-normal text-center mb-6">
                You have successfully completed the course on C language by Apna College. 
                </p>
               
                <p className="text-xl font-normal mb-6 text-center">
                Continue to take the assessment.
                </p>
                <div className="items-center text-center"> 
                We also value continuous growth! Provide your feedback to help us improve and enhance the experience for future candidates. 😊
                </div>
                <div className="items-center text-center space-x-2.5">

                <button onClick={()=>alert("Your Feedback Has Been Submitted Successfully") }
                className="font-light text-white bg-blue-500 hover:bg-blue-900 border-1 rounded-2xl p-2 border-black py-1 mt-4">
                Feedback
                </button>

                <button 
                className="font-light text-white bg-blue-500 hover:bg-blue-900 border-1 rounded-2xl p-2 border-black py-1 mt-4">
                Continue
                </button>
                

                </div>
            
            </div>
            
            
        </div>
    )
}
export default Aftercource;
