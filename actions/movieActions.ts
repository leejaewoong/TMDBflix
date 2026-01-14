'use server'

import { createServerSupabaseClient } from "@/utils/supabase/server"

function handleError(error) {
    if (error) {
        console.error(error);
        throw error;
    }
}

export async function SearchMovies(search : string | "") {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase
        .from('movie')
        .select('*')
        .like('title', `%${search}%`)       

    handleError(error);
    return data;
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