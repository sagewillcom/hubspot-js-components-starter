import '../../styles/tailwind.css'

export default function _404() {
  return (
    <main>
      <p>404</p>
      <h1>
        Page not found
      </h1>
      <p>
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div>
        <a href="/">
          <span aria-hidden="true">&larr;</span> Back to home
        </a>
      </div>
    </main>
  )
}
