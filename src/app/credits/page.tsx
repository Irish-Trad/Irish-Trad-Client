import Link from "next/link"

import PageLayout from "@/components/PageLayout"

const CreditsPage = () => (
  <PageLayout>
    <section className="container grid items-center max-w-4xl gap-6 pt-6 pb-8 rounded-3xl bg-background md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Credits
      </h1>

      <ul>
        <li>
          <h2>Morgan Lane</h2>
          <p>Background image of irish trad session on home page</p>
          <Link
            href="https://unsplash.com/@themorganlane"
            target="_blank"
            rel="noreferrer"
          >
            https://unsplash.com/@themorganlane
          </Link>
        </li>
      </ul>
    </section>
  </PageLayout>
)

export default CreditsPage
