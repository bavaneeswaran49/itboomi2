import { motion } from "framer-motion";
import img from "../assets/Task prototype/ig1.png";

const Contrast = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 620,
      damping: 12,
    },
  },
};

// const Contrast1 = {
//   initial: { scale: 1 },
//   hover: {
//     scale: 1.02,
//     transition: {
//       type: "spring",
//       stiffness: 620,
//       damping: 15,
//     },
//   },
// };

const Contrast2 = {
  initial: {
    y: -160,
    height: "380px",
    width: "320px",
    borderRadius: "100%"
  },
  hover: {
    y: -190,
    height: "400px",
    width: "380px",
    borderRadius: "50%",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

function Work() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        variants={Contrast}
        style={{
          width: "470px",
          height: "470px",
          border: "2px dashed gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          opacity: 0.9,
          position: "relative",
        }}
      >
        <motion.img
          variants={Contrast2}
          src={img}
          alt="hover-img"
          style={{
            overflow: "hidden",
            borderRadius: "45%",
            position: "absolute",
            bottom: -80,
            zIndex: 10,
          }}
        />
        <motion.div
          // variants={Contrast1}
          style={{
            width: "400px",
            height: "400px",
            border: "50px solid #6941c6",
            borderRadius: "50%",
            backgroundColor: "#e9d7fe",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Work;




// import { motion } from "framer-motion";
// import img from "../assets/Task prototype/ig1.png";

// const Contrast = {
//   initial: { scale: 1 },
//   hover: { scale: 1.05 },
// };

// const Contrast2 = {
//   initial: { y: 100 },
//   hover: {
//     y: -150, 
//     transition: {
//       duration: 0.7,
//       ease: "linear",
//     },
//   },
// };

// function Work() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <motion.div
//         initial="initial"
//         whileHover="hover"
//         variants={Contrast}
//         style={{
//           width: "470px",
//           height: "470px",
//           border: "2px dashed gray",
//           borderRadius: "50%",
//           position: "relative",
//         }}
//       >
       
//         <div
//           style={{
//             width: "400px",
//             height: "400px",
//             backgroundColor: "#e9d7fe",
//             borderRadius: "50%",
//             overflow: "hidden",
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             zIndex: 1,
//           }}
//         >
//           <motion.img
//             variants={Contrast2}
//             src={img}
//             alt="hover-img"
//             style={{
//               width: "380px",
//               height: "500px",
//               objectFit: "cover",
//               position: "absolute",
//               bottom: -80,
//             }}
//           />
//         </div>

       
//         <div
//           style={{
//             width: "400px",
//             height: "400px",
//             border: "50px solid #6941c6",
//             borderRadius: "50%",
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             zIndex: 2,
//             pointerEvents: "none",
//           }}
//         />
//       </motion.div>
//     </div>
//   );
// }

// export default Work;
