/* eslint-disable prettier/prettier */

import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET (request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')

  if(code != null){
    const cookieStore = cookies()
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            getAll() {
              return cookieStore.getAll()
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value }) => cookieStore.set(name, value))
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              )
            },
          },
        }
      )

      await supabase.auth.exchangeCodeForSession(code)

      return NextResponse.redirect(origin)
  }else {
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
  }
}