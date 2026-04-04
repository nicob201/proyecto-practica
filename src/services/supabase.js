import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tmlaqreumycflyoyxnpa.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtbGFxcmV1bXljZmx5b3l4bnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzMTQyMzgsImV4cCI6MjA5MDg5MDIzOH0.a4RzWlcv8DfC3HnwR49yhP_CQx416q-FoGNXkfS8B-Y";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);