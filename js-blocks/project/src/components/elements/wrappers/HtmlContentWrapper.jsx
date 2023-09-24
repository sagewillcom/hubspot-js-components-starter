import parse from 'html-react-parser'

const mapping = {
  // enter your own tailwind css classes for each element type
  p: null,
  h1: null,
  h2: null,
  h3: null,
  h4: null,
  a: null,
  ul: null,
  ol: null,
  li: null,
  table: null,
  th: null,
  thead: null,
  tbody: null,
  td: null,
  img: null,
}

const options = {
  replace: (node) => {
    const className = mapping[node.name]
    if (className) {
      node.attribs.className = className
      return node
    }
  },
  trim: true
}

export default function HtmlContentWrapper({ richText }) {
  return (
    <div>
      {parse(richText, options)}
    </div>
  )
}
