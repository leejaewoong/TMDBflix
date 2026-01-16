'use server'

import { createServerSupabaseClient } from "@/utils/supabase/server"

function handleError(error) {
    if (error) {
        console.error(error);
        throw error;
    }
}

export async function SearchMovies(search : string | "", page: number, pageSize) {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase
        .from('movie')
        .select('*')
        .like('title', `%${search}%`)       
        .range((page - 1) * pageSize, page * pageSize - 1);

    const hasNextPage = data.length === pageSize;

    handleError(error);

    return {
        data,
        page,
        pageSize,
        hasNextPage        
    };
}

export async function GetMovieDetails(movieId: number) {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase
        .from('movie')
        .select('*')
        .eq('id', movieId)
        .single();

    handleError(error);

    return data;
}