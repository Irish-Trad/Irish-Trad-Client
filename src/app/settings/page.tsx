import PageLayout from "@/components/PageLayout"
import ThemeToggle from "@/components/ThemeToggle"

const SettingsPage = () => (
  <PageLayout>
    <section className="container grid max-w-4xl items-center gap-6 rounded-3xl bg-background pb-8 pt-6 md:py-10">
      <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Settings
      </h1>

      <div className="flex items-center gap-2">
        <p>Toggle Light/Dark Mode:</p>
        <ThemeToggle />
      </div>
    </section>
  </PageLayout>
)

export default SettingsPage
