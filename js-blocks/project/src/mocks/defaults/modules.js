// Here you will find most of the defaults required for module fields.
// We put them here because they would take up a lot of space in the module code.
// We can also repeat them with Array(int).fill() to fulfill the RepeatedFieldGroup min occurrence.

export const logoCloudWithExplainerDefault = Array(3).fill({
  image: {
    src: 'https://hubspot.com/img/logos/tuple-logo-gray-900.svg',
    alt: 'default logo alt',
    loading: 'lazy'
  }
})

export const timelineWithDatesDefault = Array(4).fill({
  title: 'Founded company',
  description:
    'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
  date: 1693890423
})

export const sbsWithStatsDefault = Array(2).fill({
  suffix: 'Transactions every 24 hours',
  value: '44 million'
})

export const contentAreaDefault = `<h1>HTML Ipsum Presents</h1>

<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

<h2>Header Level 2</h2>

<ol>
   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ol>

<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

<h3>Header Level 3</h3>

<ul>
   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ul>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, delectus sunt alias a ipsa tenetur quia sapiente dolor.</p>
<p>Nobis sequi ipsum aliquam, praesentium iusto distinctio tempore, veritatis harum cupiditate voluptatibus!</p>
<div style="display: relative; overflow-x: auto; border-radius: 6px;">
<table>
            <thead>
              <tr>
                <th>Hello world</th>
                <th>This is a test</th>
                <th>Another heading</th>
                <th>Just in case</th>
                <th>Another heading</th>
                <th>Just in case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
              </tr>
            </tbody>
          </table></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nostrum vero reiciendis voluptates vel, voluptatem debitis natus corporis nisi maxime at libero veritatis hic nemo laboriosam ex ducimus perferendis inventore.</p>
          <img src="https://hubspot.com/hubfs/Brand/hubspot%20official%20logo%20vector.svg"></img>`

export const faqBottomSectionDefault = Array(4).fill({
  question: "What's the best thing about Switzerland?",
  answer:
    "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
})

export const pricingWithSingleFocusItemDefault = Array(4).fill({
  check_label: 'Private forum access'
})

export const pricingWithAdditiveFeaturesDefault = Array(3).fill({
  denomination: 'Free',
  description: 'Lorem ipsum dolor',
  is_featured: false,
  monthly_price: 0,
  quarterly_price: 0,
  features: [
    {
      check_label: 'Lorem ipsum dolor',
      tooltip_text:
        'Lorem ipsum dolor.'
    },
    {
      check_label: 'Lorem ipsum dolor',
      tooltip_text:
        'Lorem ipsum dolor.'
    }
  ]
})

export const logoCloudWithBottomCtaDefault = Array(3).fill({
  image: {
    src: 'https://hubspot.com/img/logos/158x48/transistor-logo-gray-900.svg',
    alt: 'transistor logo',
    loading: 'lazy'
  }
})

export const sbsTeamMembersDefault = Array(2).fill({
  portrait: {
    src: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    alt: 'hubspot team member',
    loading: 'lazy'
  },
  full_name: 'Jane Cooper',
  job_title: 'Sales Director',
  biography:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.'
})

export const featureGridWithIconsAndLinksDefault = Array(3).fill({
  icon: {
    src: 'https://hubspot.com/hubfs/Brand/_icons/sagewil%20roi%20reports%20feature%20icon.svg',
    alt: 'hubspot team member',
    loading: 'lazy'
  },
  denomination: 'Brand stories',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.'
})

export const pricingComparisonGridDefault = Array(3).fill({
  title: 'Monthly usage',
  features: [
    {
      row_label: 'Lorem ipsum dolor',
      tooltip_text:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro molestiae, pariatur expedita praesentium autem minus vel, minima, totam corporis.',
      tier_values: {
        tier_1_value: '0',
        tier_2_value: 'Hello world',
        tier_3_value: '0'
      }
    },
    {
      row_label: 'Lorem ipsum dolor',
      tooltip_text:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque porro molestiae, pariatur expedita praesentium autem minus vel, minima, totam corporis.',
      tier_values: {
        tier_1_value: '0',
        tier_2_value: '0',
        tier_3_value: '0'
      }
    }
  ]
})
