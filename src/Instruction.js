//**
// # Client side

// 1. create a file with react router —> npm create vite@latest name-of-your-project -- --template react
// 2. npm install  react-router-dom localforage match-sorter sort-by
// 3. install tailwind css code by —> npm install -D tailwindcss  —> npx tailwindcss init
// 4. Open the code & go tailwind file and write —>content: ["./src/**/*.{html,js}"],
// 5. go index.css file and type —> @tailwind base;
// @tailwind components;
// @tailwind utilities;
// 6. add daisy ui —> 

// `npm i -D daisyui@latest`
// 7. SetUp Router —> go to main jsx  —> 

// ```
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";

// import { RouterProvider } from "react-router-dom";
// import { router } from "./Router/Router";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
// ```

// 8. Create a folder in router and type the code —> 

// ```
// import { createBrowserRouter } from "react-router-dom";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

// ```

// 9. Now make Router Properly
//  */