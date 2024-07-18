import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { myProtectedPaths } from "./app/utils/myProtectedPaths";

// export default clerkMiddleware();

const isProtectedRoute = createRouteMatcher([...myProtectedPaths]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
