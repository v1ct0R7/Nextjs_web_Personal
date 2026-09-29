export default async function ProductDetaild({
    params,
}: {
    params: Promise<{ productID: string }>;
    }) {
    const productID = (await params).productID;
    return <h1>Details about product {productID}</h1>
}