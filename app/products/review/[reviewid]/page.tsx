export default async function RevieusForm({ params, }: {
    params: Promise<{ productID: string; reviewid: string }>;
}) {
    const { productID, reviewid } = await params;

    return (
        <h1>
            "This product {productID} are my reviews{reviewid}"
        </h1>);
}