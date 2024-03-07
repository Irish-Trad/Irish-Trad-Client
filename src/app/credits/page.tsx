import CreditList from "@/components/CreditList/CreditList"
import PageLayout from "@/components/PageLayout"

const CreditsPage = () => (
  <PageLayout>
    <section className="container grid max-w-4xl items-center gap-6 rounded-3xl bg-background pb-8 pt-6 md:py-10">
      <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Credits
      </h1>

      <CreditList />
    </section>
  </PageLayout>
)

export default CreditsPage
