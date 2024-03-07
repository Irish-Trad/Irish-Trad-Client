import credits from "@/config/credits"
import CreditListItem from "@/components/CreditList/CreditListItem"

const CreditList = () => (
  <>
    <CreditListItem category="Media" credits={credits.media} />
    <CreditListItem category="Development" credits={credits.development} />
  </>
)

export default CreditList
