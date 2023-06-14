import { useState } from "react";
import emailjs from 'emailjs-com';
import { initialUserDataType } from "@/pages/dashboard/settings";

interface SendQuestionDataType {
    userInfo: initialUserDataType;
}


export function SendQuestion({userInfo}: SendQuestionDataType){
    const [question, setQuestiion] = useState('');

    function handleFormChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        setQuestiion(event.target.value)
    }
    const submitQuestion = async (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        if(question !== ''){
            try {
                const emailParams = {
                    to_name: 'Chosen',
                    subject: `${userInfo.firstName} ${userInfo.lastName}`,
                    from_name: userInfo.firstName,
                    from_email: userInfo.email,
                    message: question
                };

                await emailjs.send('service_i0gog9a', 'template_6h5lfvj', emailParams, 'uzQe2u-m8xPgpc0xW');
                console.log('Email sent successfully')

            } catch (error) {
                console.log(error);
            }
        }
        setQuestiion('');
    }

    return(
        <section>
            <div className="mb-[30px]">
                <h1 className="uppercase text-[25px] lg:text-[32px] font-[600] ">Ask a Question</h1>
                <p className="text-[16px] lg:text-[20px] font-[500] ">Can’t find the answers you’re looking for?, ask us and we will get back to you</p>
            </div>
            
            <form onSubmit={submitQuestion} className="lg:w-[500px] ">
                <textarea 
                    value={question}
                    onChange={handleFormChange}
                    placeholder="Type your questions here"
                    className="p-[20px] h-[200px] bg-[#FEFEFE] w-[100%] mb-[20px] rounded-[3px] outline-none placeholder-[#CECECE] text-[16px] "
                    >
                </textarea>

                <button type="submit" className="bg-[#0A089A] p-[20px] rounded-[3px] w-[100%] text-[#FAFAFA] text-[16px] text-[20px] ">Send</button>
            </form>
        </section>
    )
}