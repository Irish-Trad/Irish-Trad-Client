import Link from "next/link"

import { Button } from "@/components/ui/button"
import PageLayout from "@/components/PageLayout"

const ContactPage = () => (
  <PageLayout>
    <section className="container grid items-center max-w-4xl gap-6 pt-6 pb-8 rounded-3xl bg-background md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Contact
      </h1>

      <p>A contact form is still in development</p>

      <p>
        In the meantime, please reach out using the following email address:
      </p>

      <p>contact@markodowd.dev</p>

      <p>Or click the following button to open your mail client directly:</p>

      <Button>
        <Link href="mailto:contact@markodowd.dev?subject=Enquiry: irishtrad.net&body=Hello,">
          Open Mail Client
        </Link>
      </Button>
    </section>
  </PageLayout>
)

export default ContactPage
