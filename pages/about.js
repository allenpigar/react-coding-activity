
import InnerHtml from '../components/InnerHtml'

export default function About({ data }) {

    return (
        <>
            <div className="text-center w-[80%] m-auto text-lg mt-8">
                <InnerHtml data={data} />
            </div>
        </>
    )

}

export async function getStaticProps() {

    const response = await fetch('https://www.zesty.io/-/instant/7-e93178-vqvclg.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const result = await response.json()

    return {
        props: {
            data: result.data[0].content.page_content
        }
    }

}