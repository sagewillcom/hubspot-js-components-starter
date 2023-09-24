import {
  ModuleFields,
  NumberField,
  RepeatedFieldGroup,
  TextField
} from '@hubspot/cms-components/fields'
// Import your own CTA button
// import { CustomButton } from '../elements/CustomButton.jsx'
import { SimpleCheckMarkIcon } from '../elements/icons/index.jsx'
import { pricingWithSingleFocusItemDefault } from '../../mocks/defaults/modules.js'

import '../../styles/tailwind.css'

export const meta = {
  label: 'Pricing with single focus item',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/credit-card.svg'
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading (left)"
      default="Lifetime membership"
      required
    />
    <TextField
      name="sub_heading"
      label="Sub-heading (left)"
      default="Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet
          indis perferendis blanditiis repellendus etur quidem assumenda."
      required
    />
    <RepeatedFieldGroup
      name="features"
      label="Features (left)"
      occurrence={{ min: 2, max: 6 }}
      default={pricingWithSingleFocusItemDefault}
      required
    >
      <TextField
        name="check_label"
        label="Feature label"
        default="Private forum access"
        required
      />
    </RepeatedFieldGroup>
    <TextField
      name="prefix"
      label="Price prefix (right)"
      default="Pay once, own it forever"
    />
    <NumberField name="value" label="Price (right)" default={349} required />
    <TextField
      name="suffix"
      label="Price suffix (right)"
      default="Invoices and receipts available for easy company reimbursement"
    />
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <div>
        <h3>
          {props.fieldValues.heading}
        </h3>
        <p>
          {props.fieldValues.sub_heading}
        </p>
        <div>
          <h4>
            What&apos;s included
          </h4>
          <div></div>
        </div>
        <ul
          role="list"

        >
          {props.fieldValues.features.map((feature, featureIndex) => (
            <li
              key={`${featureIndex}-${feature.check_label}`}

            >
              <SimpleCheckMarkIcon />
              {feature.check_label}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <div>
            <p>
              {props.fieldValues.prefix}
            </p>
            <p>
              <span>
                +
              </span>
              <span>
                ${props.fieldValues.value}
              </span>
              <span>
                USD / month
              </span>
            </p>
            {/* <CustomButton /> */}
            <p>
              {props.fieldValues.suffix}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
