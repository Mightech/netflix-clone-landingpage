import React, {useState} from 'react'
import '../hero/faq.css'
import Footer from '../footer/Footer';

const Faq = () => {
const faqData = [
    {
        id: 1,
        question:"How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,500 to ₦8,500/month."
    },
       {
        id: 2,
       question:"Where can i watch?",
        answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.       
        You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
    },
       {
        id: 3,
      question:"How do i cancel?",
        answer: "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
        
];

const FAQItem =({question, answer}) =>{
    const [isOpen, setIsOpen] = useState(true);
    return(
        <div className ={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className='faq-toggle' onClick={() => setIsOpen(!isOpen)}>
               <span>{question}</span>
               <svg className='arrow-icon' viewBox='0 0 24 24'>
                  <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
               </svg>
            </button>
            <div className='faq-content'>
                <div className='faq-content-inner'>
                    <p>{answer}</p>
                </div>
            </div>

        </div>
    );
};
const leftColumnItems = faqData.filter((_, index) => index % 2 === 0);
const rightColumnItems = faqData.filter((_, index) => index % 2 !== 0);
  return (
    <div className='faq-container'>
        <div className='faq-wrapper'>
      
        <h1>Frequently Asked Questions</h1>
        <div className='faq-grid-layout'>
            <div className='faq-column'>
                {leftColumnItems.map((item)=> (
                    <FAQItem key = {item.id} question = {item.question} answer ={item.answer} />
                ))}
            </div>
             <div className='faq-column'>
                {rightColumnItems.map((item)=> (
                    <FAQItem key = {item.id} question = {item.question} answer ={item.answer} />
                ))}
            </div>
            </div>

            <div className='for-enquire-wrapper'>
                      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                      <div className='for-enquires-input-field'>
                        <input type="text" placeholder='Email Address'/>
                        <button>Get Started <span>▶</span></button>
                      </div>
            </div>

            <div className='footer'>
                <Footer/>
            </div>
        
      </div>
    </div>
  )
}

export default Faq
