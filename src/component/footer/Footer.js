import './footer.css'
function Footer(){
return(
          <div className="footer">
            <div className="footer-container">
                <div className="footer-title">follow us on social media</div>
                <div className="footer-icons">
                    <div style={{color:"rgb(14 118 201)"}} className="footer-icon">
                        <i className="bi bi-facebook"></i>
                    </div>
                    <div style={{color:"#2196F3"}} className="footer-icon">
                    <i className="bi bi-twitter"></i>
                    </div>
                    <div style={{color:"red"}} className="footer-icon">
                    <i className="bi bi-youtube"></i>
                    </div>
                    <div style={{color:" #c13584"}} className="footer-icon">
                    <i className="bi bi-instagram"></i>
                    </div>
                </div>
             </div> 
             <div className='footer-wraber'>
                <div className='item footerlinks' style={{marginTop:"-22px"}}> 
                    <h2 className='footerhead'>usefull links</h2>
                    <ul>
                        <li>home</li>
                        <li>authers</li>
                        <li>about us</li>
                        <li>contact us</li>
                        <li>register</li>
                    </ul>
                </div>
                <div className='item footer-info'>
                
                   <div className='footer-info-location'>
                   <h2 className='footerhead' style={{marginTop:"-50px"}}>contact information</h2>
                   <div className='footer-location'>
                    
                    <i className="bi bi-geo-alt-fill"></i>
                        Cairo-Egypt-Egypt
                    </div>
                    <div className='footer-location'>
                    <i className="bi bi-telephone-fill"></i>
                        123-456-787
                    </div>
                    <div className='footer-location'>
                    <i className="bi bi-envelope"></i>
                    info2002@gmain.com
                    </div>
                   </div>
                </div>
                <div className='item footer-about'> 
                <h2 className='footerhead'>about us</h2>
                <p className='footerinfotitle'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Earum, doloremque officiis dicta aspernatur possimus aliquid quod
                 accusantium sit quos, unde et ipsa? Autem officiis omnis inventore,
                  maxime consectetur tenetur repellendus.

                </p>
                </div>
             </div>
         </div>
   
)
}
export default Footer