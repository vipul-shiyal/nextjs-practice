import { NextResponse, NextRequest } from 'next/server'


//list of protected router
const protectedRoutes = ["/", "/profile", '/add-bill', '/settings'];

export default function middleware(request: NextRequest) {

  const currentUser = true;
  // const currentUser = request.cookies.get('currentUser')?.value

  // if user is not logged then redirect to login page
  if(!currentUser && protectedRoutes.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL("/login", request.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  } else if(currentUser && request.nextUrl.pathname === '/login') {
    // if user is already logged then redirect to home page
    const absoluteURL = new URL("/", request.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }
  return NextResponse.next()
}


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}