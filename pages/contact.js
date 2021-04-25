import Head from 'next/head'

import ContactForm from "../components/contact/contact-form"

function ContactPage() {
    return <>
        <Head>
            <title>Contact Austin</title>
            <meta name='description' content='Contact Austin Here' />
        </Head>
        <ContactForm />
    </>
}

export default ContactPage