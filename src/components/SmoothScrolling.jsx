// // components/Scrollbar.js
// import { useEffect } from "react";
// import Scrollbar from "smooth-scrollbar";

// const ScrollbarComponent = () => {
//   useEffect(() => {
//     // Initialize smooth scrollbar when the component is mounted
//     const scrollbar = Scrollbar.init(document.querySelector("#scroll-container"));

//     // Clean up when the component is unmounted
//     return () => {
//       scrollbar.destroy();
//     };
//   }, []);

//   return (
//     <div id="scroll-container" style={{ height: "100vh", overflow: "hidden" }}>
//       <div style={{ height: "200vh" }}>
//         {/* Your scrollable content */}
//         <h1>Welcome to Smooth Scrolling!</h1>
//         <p>
//           Scroll down to see the smooth scrolling effect in action. This is
//           achieved using the smooth-scrollbar library.
//         </p>
//         {/* More content */}
//       </div>
//     </div>
//   );
// };

// export default ScrollbarComponent;
