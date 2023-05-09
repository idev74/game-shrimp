
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const apiURL = process.env.REACT_APP_API_URL
// const apiKey = process.env.REACT_APP_API_KEY


// export default function Sidebar() {
//   const [genres, setGenres] = useState([]);
//   const [platforms, setPlatforms] = useState([]);

//   useEffect(() => {
//     fetch(`${apiURL}/genres?key=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         setGenres(data.results);
//       })
//       .catch(error => {
//         console.error("Error fetching genres:", error);
//       });

//     fetch(`${apiURL}/platforms?key=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         setPlatforms(data.results);
//       })
//       .catch(error => {
//         console.error("Error fetching platforms:", error);
//       });
//   }, []);

//   return (
//     <div className="bg-gray-800 text-white w-64 flex-shrink-0 p-6">
//       <h2 className="text-lg font-medium mb-4">Search by:</h2>
//       <div className="mb-4">
//         <h3 className="text-sm font-medium mb-2">Genre</h3>
//         <select name="genre" id="genre" className="w-full py-2 px-3 rounded-lg bg-gray-700">
//           <option value="">All Genres</option>
//           <option value="action">Action</option>
//           {/* {genres.map(genre => (
//             <option value={genre.slug} key={genre.id}>
//               {genre.name}
//             </option>
//           ))} */}
//         </select>
//       </div>
//       <div>
//         <h3 className="text-sm font-medium mb-2">Platform</h3>
//         <select name="platform" id="platform" className="w-full py-2 px-3 rounded-lg bg-gray-700">
//           <option value="">All Platforms</option>
//           {platforms.map(platform => (
//             <option value={platform.slug} key={platform.id}>
//               {platform.name}
//             </option>
//           ))}
//           <option value="pc">PC</option>
//         </select>
//       </div>
//       <div className="mt-6">
//         <Link to="/search" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
//           Search
//         </Link>
//       </div>
//     </div>
//   );
// }