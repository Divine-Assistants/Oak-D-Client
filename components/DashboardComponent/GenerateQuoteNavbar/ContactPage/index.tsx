import { useContext } from 'react';
import { ContactPageContext } from '@/context/UserDashboardGenerateQuote';
import { QuoteContactInfo } from './QuoteContactInfo';
import { QuoteLocationInfo } from './QuoteLocationInfo';

export function ContactPage(){
    const {showContactPage, setShowContactPage} = useContext(ContactPageContext);

    return(
        <section style={{display: showContactPage ? 'block' : 'none'}} className='py-[20px] px-[50px] ' >
            <QuoteContactInfo />
            <QuoteLocationInfo />
        </section>
    )
}