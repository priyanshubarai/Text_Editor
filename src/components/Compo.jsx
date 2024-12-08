import { useState } from "react";       //req for using useState hook

export default function TextAnalyse(props) {

    // const text_area = document.querySelector("#comment");
    
    const [text , setText] = useState('');      //initiating a state hook
    const [word , setWord] = useState(0);

    function handleChange(event) {
        setText(event.target.value);    //sets the text to a new value if text_area is changed
        setWord(()=>{
            if(text.trim() !== ""){
                return text.trim().split(/\s+/).length;
            }else{
                return 0;
            }
        })
    }

    function UpperCase(event) {
        event.preventDefault();
        setText(text.toUpperCase());       
    }
    
    function LowerCase(event) {
        event.preventDefault();
        setText(text.toLowerCase());
    }

    function removeSpace(event) {
        event.preventDefault();
        setText(()=>{
            setWord(1);
            return Array.from(text).filter((i) => i !== ' ').join("");
        });
    }

    function handleReset(event) {
        event.preventDefault();
        setText('');
        setWord(0);
    }


    


    return(
        <div className="box m-3 grid justify-items-center h-full">
        
        <form className="w-3/4">
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                {/* value is set as text , when text state is changed the value automatically gets updated */}
                <textarea onChange={handleChange} value={text} id="comment" rows="16" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write here..." required></textarea>
            </div>

            <div className="flex items-center justify-start gap-2 px-3 py-2 border-t dark:border-gray-600">
                <button onClick={handleReset} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Reset
                </button>
                <button  onClick={UpperCase} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    UpperCase
                </button>
                <button  onClick={LowerCase} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    LowerCase
                </button>
                <button  onClick={removeSpace} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    remove Space
                </button>
                
            </div>

        </div>
        </form>
        <div className="info border-4 p-2 w-60">

            {word} words , {text.length} characters <br/>
            {Math.floor((word * 0.008)*100)/100} minutes requied to read

        </div>
        <div className="preview w-3/4 ">
            <h1 className="text-3xl py-4 underline">Preview</h1>
            <pre>
            {text}
            </pre>
        </div>

        </div>
    );
}







