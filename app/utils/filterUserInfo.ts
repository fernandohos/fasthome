import { User } from "../types/User";
import { User as SupabaseUser } from "@supabase/supabase-js";


export function filterUserInfo(signedUser: SupabaseUser | null): User | null {
    if (signedUser) {
        const { id, created_at, email = null, user_metadata } = signedUser;
        const { mobile_number_2, photo_url, province, telephone, mobile_number, display_name, address, district } = user_metadata;
        return {
            id,
            created_at,
            email,
            mobile_number_2,
            photo_url,
            province,
            telephone,
            mobile_number,
            display_name,
            address,
            district
        }
    }
    return null;
}