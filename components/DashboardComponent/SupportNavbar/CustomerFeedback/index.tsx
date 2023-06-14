import { useState } from "react";
import emailjs from 'emailjs-com';
import { initialUserDataType } from "@/pages/dashboard/settings";

type inputChangeEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
type userFeedback = {
        title: string;
        message: string;
    }
interface CustomerFeedbackDataType {
    userInfo: initialUserDataType;
}

export function CustomerFeedback({userInfo}: CustomerFeedbackDataType){
    const [feedback, setFeedback] = useState<userFeedback>({
        title: '',
        message: ''
    });
    function handleInputChange(event: inputChangeEvent){
        const {name, value} = event.target;

        setFeedback(prevFeedback => {
            return {
                ...prevFeedback,
                [name]: value
            }
        })
    }
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        if(feedback.title !== '' && feedback.message !== ''){
            try {
                const emailParams = {
                    to_name: 'Chosen',
                    subject: feedback.title,
                    from_name: userInfo.firstName,
                    from_email: userInfo.email,
                    message: feedback.message
                }
                await emailjs.send('service_i0gog9a', 'template_6h5lfvj', emailParams, 'uzQe2u-m8xPgpc0xW');
                console.log('Email sent successfully');

            } catch (error) {
                console.log(error)
            }
        }
        setFeedback({
            title: '',
            message: '',
        });
        window.scrollTo(0,0);
    }

    return(
        <section className="lg:flex lg:gap-x-[200px]">
            <h1 className="uppercase text-[#1E1E1E] text-[32px] font-[600] mb-[30px] ">Customer <br /> Feedback</h1>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-y-[20px] lg:w-[500px] ">
                <input 
                    type="text" 
                    placeholder="Title"
                    name="title"
                    value={feedback.title}
                    onChange={handleInputChange}
                    className="p-[20px] bg-[#FEFEFE] text-[16px] rounded-[3px] " />

                <textarea 
                    placeholder="Write Here"
                    name="message"
                    value={feedback.message}
                    onChange={handleInputChange}
                    className="bg-[#FEFEFE] text-[16px] p-[20px] h-[200px] rounded-[3px] "></textarea>

                <button type="submit" className="p-[20px] bg-[#AC0108] text-[#FAFAFA] text-[18px] rounded-[3px] ">Send</button>
            </form>
        </section>
    )
}