import  { useEffect } from 'react'
import '../footer/footer.css'

const Footer = () => {

useEffect(() =>{
  
window.gtranslateSettings = {"default_language":"en","detect_browser_language":true,"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"inline","flag_style":"3d","switcher_text_color":"#f7f7f7","switcher_arrow_color":"#f2f2f2","switcher_border_color":"#161616","switcher_background_color":"#303030","switcher_background_shadow_color":"#474747","switcher_background_hover_color":"#3a3a3a","dropdown_text_color":"#eaeaea","dropdown_hover_color":"#748393","dropdown_background_color":"#474747"}

const existingScript = document.getElementById("gtranslate-script");
 if (!existingScript){
  const script = document.createElement("script");
  script.id = "gtranslate-script";
  script.src = "https://cdn.gtranslate.net/widgets/latest/dwf.js";
  script.defer = true;
  document.body.appendChild(script);
 }
},[]);

  return (
    
    <div className='footer-container'>
        <h3 className='footer-container-h3'><a href="">Questions? Contact us.</a></h3>
        <div className='footer-nav-wrapper'>
              <nav>
               <ul>
                <li><a href="">FAQ</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Speed Test</a></li>
               </ul>
        </nav>

          <nav>
               <ul>
                <li><a href="">Help Center</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Cookies Preferences</a></li>
                <li><a href="">Legal Notices</a></li>
               </ul>
        </nav>

          <nav>
               <ul>
                <li><a href="">Account</a></li>
                <li><a href="">Ways to Watch</a></li>
                <li><a href="">Corporate Information</a></li>
                <li><a href="">Only on Netflix</a></li>
               </ul>
        </nav>

          <nav>
               <ul>
                <li><a href="">Media Center</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Contact Us</a></li>
                
               </ul>
        </nav>

        </div>
       <section className='footer-last-section'>
              
               <div className="gtranslate_wrapper"></div>

        <h3>Netflix Nigeria</h3>
        <h4>This page is protected by  Google reCAPTCHA to ensure you're not a bot.</h4>
       </section>

       <div className='footer-wrapper-lst-btn'>
        <button>Get Started</button>
       </div>
      
    </div>
    
  )
}

export default Footer
