import {
  BooleanField,
  FieldGroup,
  ModuleFields,
  RepeatedFieldGroup,
  TextField
} from '@hubspot/cms-components/fields'
import { Island } from '@hubspot/cms-components'
import classNames from '../../utils/classNames.js'
import {
  CheckIcon,
  XMarkIcon as XMarkIconMini
} from '@heroicons/react/20/solid'
import { pricingComparisonGridDefault } from '../../mocks/defaults/modules.js'
import '../../styles/tailwind.css'
import ExplanatoryTooltip from '../islands/ExplanatoryTooltip.jsx?island'

export const meta = {
  label: 'Pricing comparison grid',
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
      default={[
        {
          denomination: 'Free',
          description: 'All your essential business finances, taken care of.',
          is_featured: false
        },
        {
          denomination: 'Professional',
          description: 'All your essential business finances, taken care of.',
          is_featured: true
        },
        {
          denomination: 'Business',
          description: 'All your essential business finances, taken care of.',
          is_featured: false
        }
      ]}
      required
    >
      <TextField
        name="denomination"
        label="Tier name"
        default="Starter"
        required
      />
      <TextField
        name="description"
        label="Tier description"
        default="All your essential business finances, taken care of."
        required
      />
      <BooleanField
        name="is_featured"
        label="Is tier featured?"
        default={false}
        required
      />
    </RepeatedFieldGroup>
    <RepeatedFieldGroup
      name="sections"
      label="Grid sections"
      occurrence={{ min: 2, max: 4 }}
      default={pricingComparisonGridDefault}
      required
    >
      <TextField
        name="title"
        label="Section title"
        default="Monthly usage"
        required
      />
      <RepeatedFieldGroup
        name="features"
        label="Feature rows"
        occurrence={{ min: 1, max: 10 }}
        default={[
          {
            row_label: 'Content activities',
            tooltip_text:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro molestiae, pariatur expedita praesentium autem minus vel, minima, totam corporis.'
          }
        ]}
        required
      >
        <TextField
          name="row_label"
          label="Feature label"
          default="Content activities"
          required
        />
        <TextField
          name="tooltip_text"
          label="Tooltip text"
          default="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro molestiae, pariatur expedita praesentium autem minus vel, minima, totam corporis."
          required
        />
        <FieldGroup
          name="tier_values"
          label="Grid values (can be 0, 1, or anything)"
          default={{
            tier_1_value: '0',
            tier_2_value: '0',
            tier_3_value: '0'
          }}
        >
          <TextField
            name="tier_1_value"
            label="Value of tier 1 feature field"
            default="0"
            required
          />
          <TextField
            name="tier_2_value"
            label="Value of tier 2 feature field"
            default="0"
            required
          />
          <TextField
            name="tier_3_value"
            label="Value of tier 3 feature field"
            default="0"
            required
          />
        </FieldGroup>
      </RepeatedFieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      {/* Feature comparison (up to lg) */}
      <section
        aria-labelledby="mobile-comparison-heading"

      >
        <h2 id="mobile-comparison-heading">
          hubspot feature comparison
        </h2>

        <div>
          {props.fieldValues.tiers.map((tier, tierIndex) => (
            <div
              key={`${tierIndex}-${tier.denomination}`}

            >
              <div
                className={classNames(
                  'your classes'
                )}
              >
                <h3
                  className={classNames(
                    'your classes'
                  )}
                >
                  {tier.denomination}
                </h3>
                <p>
                  {tier.description}
                </p>
              </div>

              <div>
                {props.fieldValues.sections.map((section, sectionIndex) => (
                  <div key={`${sectionIndex}-${section.title}`}>
                    <h4>
                      {section.title}
                    </h4>
                    <div>
                      <div
                        aria-hidden="true"

                      />

                      <div
                        className={classNames(
                          'your classes'
                        )}
                      >
                        <dl>
                          {section.features.map((feature, featureIndex) => (
                            <div
                              key={`${featureIndex}-${feature.row_label}`}

                            >
                              <dt>
                                <div>
                                  <span>{feature.row_label}</span>
                                  <Island
                                    module={ExplanatoryTooltip}
                                    tooltipText={feature.tooltip_text}
                                    clientOnly
                                  />
                                </div>
                              </dt>
                              <dd>
                                {feature.tier_values[
                                  `tier_${tierIndex + 1}_value`
                                ] !== '0' &&
                                  feature.tier_values[
                                  `tier_${tierIndex + 1}_value`
                                  ] !== '1' ? (
                                  <span
                                    className={
                                      'your classes'
                                    }
                                  >
                                    {
                                      feature.tier_values[
                                      `tier_${tierIndex + 1}_value`
                                      ]
                                    }
                                  </span>
                                ) : (
                                  <>
                                    {feature.tier_values[
                                      `tier_${tierIndex + 1}_value`
                                    ] === '1' ? (
                                      <CheckIcon

                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <XMarkIconMini

                                        aria-hidden="true"
                                      />
                                    )}

                                    <span>
                                      {feature.tier_values[
                                        `tier_${tierIndex + 1}_value`
                                      ] === '1'
                                        ? 'Yes'
                                        : 'No'}
                                    </span>
                                  </>
                                )}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      <div
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature comparison (lg+) */}
      <section aria-labelledby="comparison-heading">
        <h2 id="comparison-heading">
          Feature comparison
        </h2>

        <div>
          {props.fieldValues.tiers.map((tier, tierIndex) => (
            <div
              key={`${tierIndex}-${tier.denomination}`}
              aria-hidden="true"

            >
              <div
                className={classNames(
                  'your classes'
                )}
              >
                <h3
                  className={classNames(
                    'your classes'
                  )}
                >
                  {tier.denomination}
                </h3>
                <p>
                  {tier.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          {props.fieldValues.sections.map((section, sectionIndex) => (
            <div key={`${sectionIndex}-${section.title}`}>
              <h3>
                {section.title}
              </h3>
              <div>
                <div

                  aria-hidden="true"
                >
                  <div />
                  <div />
                  <div />
                </div>

                <table>
                  <thead>
                    <tr>
                      <th scope="col">
                        <span>Feature</span>
                      </th>
                      {props.fieldValues.tiers.map((tier, tierIndex) => (
                        <th
                          key={`${tierIndex}-${tier.denomination}`}
                          scope="col"
                        >
                          <span>
                            {tier.denomination} tier
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.features.map((feature, featureIndex) => (
                      <tr key={`${featureIndex}-${feature.row_label}`}>
                        <th
                          scope="row"

                        >
                          <div>
                            <span>{feature.row_label}</span>
                            <Island
                              module={ExplanatoryTooltip}
                              tooltipText={feature.tooltip_text}
                              clientOnly
                            />
                          </div>
                          {featureIndex !== section.features.length - 1 ? (
                            <div />
                          ) : null}
                        </th>

                        {props.fieldValues.tiers.map((tier, tierIndex) => (
                          <td
                            key={`${tierIndex}-${tier.denomination}`}

                          >
                            <span>
                              {feature.tier_values[
                                `tier_${tierIndex + 1}_value`
                              ] !== '0' &&
                                feature.tier_values[
                                `tier_${tierIndex + 1}_value`
                                ] !== '1' ? (
                                <span>
                                  {
                                    feature.tier_values[
                                    `tier_${tierIndex + 1}_value`
                                    ]
                                  }
                                </span>
                              ) : (
                                <>
                                  {feature.tier_values[
                                    `tier_${tierIndex + 1}_value`
                                  ] === '1' ? (
                                    <CheckIcon

                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <XMarkIconMini

                                      aria-hidden="true"
                                    />
                                  )}

                                  <span>
                                    {feature.tier_values[
                                      `tier_${tierIndex + 1}_value`
                                    ] === '1'
                                      ? 'Yes'
                                      : 'No'}
                                  </span>
                                </>
                              )}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div
                  aria-hidden="true"
                >
                  {props.fieldValues.tiers.map((tier, tierIndex) => (
                    <div
                      key={`${tierIndex}-${tier.denomination}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
