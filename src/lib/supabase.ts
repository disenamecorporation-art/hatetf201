/// <reference types="vite/client" />
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let client: SupabaseClient | null = null;

export const supabase = new Proxy({} as SupabaseClient, {
  get: (_target, prop) => {
    if (!client) {
      const url = import.meta.env.VITE_SUPABASE_URL;
      const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!url || !key) {
        throw new Error('Supabase configuration missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in the Secrets panel.');
      }
      client = createClient(url, key);
    }
    return (client as any)[prop];
  }
});
