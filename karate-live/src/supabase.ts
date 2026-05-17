/*import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'TU_SUPABASE_URL'
const supabaseAnonKey = 'TU_SUPABASE_ANON_KEY'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltan variables de Supabase')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)*/

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uiiexlvjdrcvjvhaqtub.supabase.co";
const supabaseAnonKey = "KarateNomae-123";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);