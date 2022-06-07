import Layout from '../components/Layout'
import InnerHtml from '../components/InnerHtml'

export default function Home({ data }) {
  return (
    <>
      <div>I add this</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {data.map((item, i) => (
          <div key={i} className="p-8">
            <h1 className="text-blue-500 text-lg font-semibold">{item.title}</h1>
            <div className="text-gray-500"> <InnerHtml data={item.text_content} /></div>
          </div>
        ))}
      </div>
    </>
  )
}


export async function getStaticProps() {

  const response = await fetch('https://www.zesty.io/-/gql/platform_section.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const result = await response.json()

  return {
    props: {
      data: result
    }
  }

}