# Next.js with MongoDB

A simple learning project built with **Next.js** and **MongoDB Atlas**.  
## Project Description

In this project, I followed the tutorial [The MongoDB and Next.js Stack for Beginners](https://blog.stackademic.com/the-mongodb-and-next-js-stack-for-beginners-b4394872f5bb) to make a working Next.js with MongoDB stack

I practiced working with server components, client components, MongoDB database queries, and environment variables.

In addition to the tutorial, I also added another MongoDB collection called `user` and displayed its data on the `/database` page.

##  Live Deployment (Vercel)
https://m5g2-nextmongo-two.vercel.app

https://m5g2-nextmongo-two.vercel.app/database

https://m5g2-nextmongo-two.vercel.app/front

https://m5g2-nextmongo-two.vercel.app/back


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
