// import React, {useEffect} from "react";
// import { useFormik } from "formik";
// import * as Yup from 'yup';
// import useSubmit from "../hooks/useSubmit";
// import {useAlertContext} from "../../context/AlertContext";

// const ContactMeSection = () => {
//   const { isLoading, response, submit } = useSubmit();
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       email: "",
//       type: "",
//       comment: "",
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string().required("Name is required"),
//       email: Yup.string().email("Invalid email").required("Email is required"),
//       type: Yup.string().required("Please select a type"),
//       comment: Yup.string().required("Message is required"),
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });


//   return (
//     <section className="bg-[#512DA8] py-16 text-white">
//       <div className="max-w-5xl mx-auto px-8">
//         <h1 id="contactme-section" className="text-4xl font-bold pl-5 mb-10">Contact me</h1>
//         <form onSubmit={formik.handleSubmit} className="bg-white text-black p-6 rounded-md shadow-md w-full">
//           <div className="flex flex-col gap-6">
//             {/* Name Field */}
//             <div>
//               <label htmlFor="firstName" className="block font-semibold mb-1">Name</label>
//               <input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 {...formik.getFieldProps("firstName")}
//               />
//               {formik.touched.firstName && formik.errors.firstName && (
//                 <p className="text-red-600 text-sm mt-1">{formik.errors.firstName}</p>
//               )}
//             </div>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block font-semibold mb-1">Email Address</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 {...formik.getFieldProps("email")}
//               />
//               {formik.touched.email && formik.errors.email && (
//                 <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
//               )}
//             </div>

//             {/* Type Field */}
//             <div>
//               <label htmlFor="type" className="block font-semibold mb-1">Type of enquiry</label>
//               <select
//                 id="type"
//                 name="type"
//                 className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 {...formik.getFieldProps("type")}
//               >
//                 <option value="">Select an option</option>
//                 <option value="hireMe">Freelance project proposal</option>
//                 <option value="openSource">Open source consultancy session</option>
//                 <option value="other">Other</option>
//               </select>
//               {formik.touched.type && formik.errors.type && (
//                 <p className="text-red-600 text-sm mt-1">{formik.errors.type}</p>
//               )}
//             </div>

//             {/* Comment Field */}
//             <div>
//               <label htmlFor="comment" className="block font-semibold mb-1">Your message</label>
//               <textarea
//                 id="comment"
//                 name="comment"
//                 rows={8}
//                 className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 {...formik.getFieldProps("comment")}
//               />
//               {formik.touched.comment && formik.errors.comment && (
//                 <p className="text-red-600 text-sm mt-1">{formik.errors.comment}</p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-purple-600 text-white px-6 py-3 rounded font-bold hover:bg-purple-700 transition"
//               disabled={isLoading}
//             >
//               {isLoading ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactMeSection;
