# Next.js with MongoDB

A simple learning project built with **Next.js (App Router)** and **MongoDB Atlas**.  
The goal was to practice server components, client components, database queries, and deployment to Vercel.


##  Live Deployment (Vercel)

https://m5g2-nextmongo-two.vercel.app/

##  GitHub Repository

https://github.com/TanjaSav/m5g2-nextmongo



---

## The project includes

- **Client Component** (`app/front/page.tsx`)  
  Uses `useEffect` and logs to the browser console.

- **Server Component** (`app/back/page.tsx`)  
  Renders on the server and logs to the server console.

- **Database Component** (`app/database/page.tsx`)  
  Connects directly to MongoDB, queries a collection, and renders the results.

- **Shared Layout** (`app/layout.tsx`)  
  Includes fonts and global styles.

- **MongoDB connection**  
  Implemented using `MongoClient` and environment variables.
