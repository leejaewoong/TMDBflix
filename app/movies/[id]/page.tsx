import { Metadata, ResolvingMetadata } from 'next';
import UI from "./ui";
import { GetMovieDetails } from "@/actions/movieActions";

export default  async function MovieDetailPage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const movie = await GetMovieDetails(id);

    return (
        <div className="absolute top-12 bottom-12 left-0 right-0 overflow-y-auto">     
            <UI movie={movie} />            
        </div>
    )
}

export async function generateMetadata(
    { params }: { params: Promise<{ id: number }> },
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const { id } = await params;
    const movie = await GetMovieDetails(id);

    return {
        title: movie?.title,
        description: movie?.overview,
        openGraph: {
            images: movie?.image_url
        }
    }
}