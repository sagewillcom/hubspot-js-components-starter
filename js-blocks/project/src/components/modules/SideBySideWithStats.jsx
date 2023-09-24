import {
  ModuleFields,
  RepeatedFieldGroup,
  TextField
} from '@hubspot/cms-components/fields'
import { sbsWithStatsDefault } from '../../mocks/defaults/modules.js'

import '../../styles/tailwind.css'

export const meta = {
  label: 'Side by side with statistics',
  is_available_for_new_content: true,
  icon: 'https://hubspot.com/hubfs/Libraries/fontawesome%206/regular/object-ungroup.svg'
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading (left)"
      default="Our mission"
      required
    />
    <TextField
      name="sub_heading"
      label="Sub-heading (left)"
      default="Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien."
      required
    />
    <TextField
      name="description"
      label="Description (left)"
      default="Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id."
      required
    />
    <RepeatedFieldGroup
      name="statistics"
      label="Statistics (right)"
      occurrence={{ min: 2, max: 4 }}
      default={sbsWithStatsDefault}
      required
    >
      <TextField
        name="value"
        label="Statistic"
        helpText='e.g. "44 million"'
        default="44 million"
        required
      />
      <TextField
        name="suffix"
        label="Suffix"
        helpText='e.g. "Transactions every 24 hours"'
        default="Transactions every 24 hours"
        required
      />
    </RepeatedFieldGroup>
  </ModuleFields>
)

export function Component(props) {
  return (
    <div>
      <div>
        <h2>
          {props.fieldValues.heading}
        </h2>
        <div>
          <div>
            <p>
              {props.fieldValues.sub_heading}
            </p>
            <div>
              <p>{props.fieldValues.description}</p>
            </div>
          </div>
          <div>
            <dl>
              {props.fieldValues.statistics.map((statistic, statisticIndex) => (
                <div
                  key={`${statisticIndex}-${statistic.suffix}`}

                >
                  <dt>
                    {statistic.suffix}
                  </dt>
                  <dd>
                    {statistic.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
