import mongoose  from "mongoose"

const connectDb = async ()=>{
    return await mongoose
      .connect(process.env.DB_local)
      .then((result) => {
        console.log(`DB connect successfully......`);
      })
      .catch((err) => {
       console.log(`fail to connect on Db ${err}`);;
      });
}
export default connectDb 