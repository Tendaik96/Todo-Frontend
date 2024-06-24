import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jjaqscufwvmkbdyerbzm.supabase.co";
const supabaseKey = String(process.env.SUPABASE_KEY);
export const supabase = createClient(supabaseUrl, supabaseKey);
