import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import classNames from '../../utils/classNames.js'
import ExplanatoryTooltip from './ExplanatoryTooltip.jsx'

export default function PricingTiersWithBillingToggle({ props }) {
  const [billingFrequency, setBillingFrequency] = useState('quarterly')
  return (
    <>
      <div>
        <RadioGroup
          value={billingFrequency}
          onChange={setBillingFrequency}

        >
          <RadioGroup.Label>
            Billing frequency
          </RadioGroup.Label>
          <RadioGroup.Option
            value="monthly"
            className={({ checked }) =>
              classNames('your classes')
            }
          >
            <span>Monthly</span>
          </RadioGroup.Option>
          <RadioGroup.Option
            value="quarterly"
            className={({ checked }) =>
              classNames('your classes')
            }
          >
            <span>Quarterly</span>
          </RadioGroup.Option>
        </RadioGroup>
        <ExplanatoryTooltip tooltipText="Text." />
      </div>
      <div>
        {props.fieldValues.tiers.map((tier, tierIndex) => (
          <div
            key={`${tierIndex}-${tier.denomination}`}
            className={classNames('your classes')}
          >
            <div>
              <h2>
                {tier.denomination}
              </h2>
              {tier.is_featured ? (
                <p>
                  Best value
                </p>
              ) : (
                tier.denomination === 'Business' && (
                  <p>
                    Coming soon
                  </p>
                )
              )}
            </div>
            <p>
              {tier.description}
            </p>
            <p>
              <span>
                $
                {billingFrequency === 'monthly'
                  ? tier.monthly_price
                  : tier.quarterly_price}
              </span>
              <span>
                / month{' '}
                {billingFrequency === 'quarterly' &&
                  tierIndex !== 0 &&
                  '(billed quarterly)'}
              </span>
            </p>
            {billingFrequency === 'quarterly' && tierIndex !== 0 && (
              <p>
                $ {tier.monthly_price} / month
              </p>
            )}
            <h3>
              {tierIndex === 0
                ? 'Features:'
                : `All features in ${props.fieldValues.tiers[tierIndex - 1].denomination
                } plan plus:`}
            </h3>
            <ul
              role="list"

            >
              {tier.features.map((feature, featureIndex) => (
                <li
                  key={`${featureIndex}-${feature.check_label}`}

                >
                  <CheckIcon

                    aria-hidden="true"
                  />
                  <span>{feature.check_label}</span>
                  {feature.tooltip_text && (
                    <ExplanatoryTooltip tooltipText={feature.tooltip_text} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
