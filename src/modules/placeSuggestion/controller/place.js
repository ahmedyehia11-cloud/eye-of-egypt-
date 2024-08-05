import { asyncHandler } from "../../../utils/errorHandling.js"
import placeSuggestionModel from '../../../../DB/models/placeSuggesion.model.js'


export const addPlace = asyncHandler(async(req,res,next)=>{
    const { id,title,description,category } = req.body;
    const addP = await placeSuggestionModel.create({
       title,
       description,
       category,
       id
     });
    return res.json({ message: "done", addP});
})

// export const addPic =asyncHandler(async(req,res,next)=>{
//   const {id} = req.body
//   const match = await placeSuggestionModel.findOne({id})
//   if (!id) {
//     return res.json({message:"in_valid  id place"})
//   }
//     const coverPic = [];
//     for (const file of req.files) {
//       coverPic.push(`uploads/${file.filename}`);
//     }
//     const user = await placeSuggestionModel.findByIdAndUpdate(
//       id,
//       { coverPic },
//       { new: true }
//     );
//     return res.json({ message: "done", user });
// })