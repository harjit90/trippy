import Hero from "../components/Hero";
import ContactImg from "../assets/1.jpg"
import ContactForm from "../components/ContactForm";

function Contact (){
    return (
        <>
            <Hero
                cName="heroMid"
                heroImg={ ContactImg }
                title="Contact"
                btnClass="hide"
            />
            <ContactForm />
        </>
    )
}

export default Contact;