import UI from "./ui";

export default  async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div className="absolute top-12 bottom-12 left-0 right-0 overflow-y-auto">     
            <UI id={id} />            
        </div>
    )
}