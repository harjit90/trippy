import "./ContactFormStyles.css"

const ContactForm =() => {
    return(
        <div className="formWrapper">
            <h1>Send a Message to Us</h1>
            <form> 
                <input placeholder="Your First Name" type="text" tabindex="1" required autofocus />
                <input placeholder="Your Last Name" type="email" tabindex="2" required />
                <input placeholder="Your Email Address" type="tel" tabindex="3" required />
                <input placeholder="Subject" type="url" tabindex="4" required />
                <textarea placeholder="Type your Message Here...." tabindex="5" required />
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;