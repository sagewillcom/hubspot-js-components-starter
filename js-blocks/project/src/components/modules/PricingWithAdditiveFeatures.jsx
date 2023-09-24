import {
  BooleanField,
  ModuleFields,
  NumberField,
  RepeatedFieldGroup,
  TextField
} from '@hubspot/cms-components/fields'
import { Island } from '@hubspot/cms-components'
import PricingTiersWithBillingToggle from '../islands/PricingTiersWithBillingToggle.jsx?island'
import { pricingWithAdditiveFeaturesDefault } from '../../mocks/defaults/modules.js'
import '../../styles/tailwind.css'

export const meta = {
  label: 'Pricing with additive features',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/credit-card.svg',
  global: true
}

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      name="tiers"
      label="Pricing tiers"
      occurrence={{ min: 3, max: 3 }}
      default={pricingWithAdditiveFeaturesDefault}
      required
    >
      <TextField
        name="denomination"
        label="Tier name"
        default="Free"
        required
      />
      <TextField
        name="description"
        label="Tier description"
        default="For small-scale content strategies as a hobbyist"
        required
      />
      <BooleanField
        name="is_featured"
        label="Is the tier featured?"
        default={false}
      />
      <NumberField
        name="monthly_price"
        label="Monthly price"
        default={0}
        required
      />
      <NumberField
        name="quarterly_price"
        label="Quarterly price"
        default={0}
        required
      />
      <RepeatedFieldGroup
        name="features"
        label="Features"
        default={[
          {
            check_label: 'Production queues'
          },
          {
            check_label: 'Brand stories'
          }
        ]}
        occurrence={{ min: 2, max: 10 }}
        required
      >
        <TextField
          name="check_label"
          label="Feature label"
          default="Brand stories"
          required
        />
        <TextField
          name="tooltip_text"
          label="Tooltip text"
          default="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro molestiae, pariatur expedita praesentium autem minus vel, minima, totam corporis."
        />
      </RepeatedFieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return <Island module={PricingTiersWithBillingToggle} props={props} clientOnly />
}
