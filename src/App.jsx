// YAHA PER HUMNE EK LIBRARY INSTALL KI HAIN AXIOS JO KI HUMHARA API FETCH KERNE KE LIYE USE KI HAIN MAINE YAHA PER
import React from "react";
import { apikey } from "./constants";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages import
import Home from "./pages/Home";
import SingleMovieDetail from "./pages/SingleMovieDetail";
import Root from "./pages/Root";
import Error from "./pages/Error";
import { loader as MovieLoader } from "./pages/Home";
import { loader as SingleMovieLoader } from "./pages/SingleMovieDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} loader={MovieLoader} />
      <Route
        path="/detail/:imdbId"
        element={<SingleMovieDetail />}
        loader={SingleMovieLoader}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// Loader() will be triggered when a page is mounted in the DOM

// Agar error mera Home route se aaraha hai toh phele wo errorElement apne pass dkhyege hai aya nahi agar wo nahi hua toh wo apne parent ke pass dkhyebe jo ki yaha hain root aur wo execute ker deyega
