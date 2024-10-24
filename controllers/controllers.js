import { newUser } from "../models/user.models.js";
import bcrypt from 'bcrypt'
export const resister = async (req, res) => {

    try {
        const { name, email, password, phoneNo, cnfPassword } = req.body;
        

        const validUser = await newUser.findOne({ email })
        if (validUser) {
            return res.status(404).json({
                success: false,
                message: "User already exist"
            })
        }

        if (password !== cnfPassword) {
            return res.status(404).json({
                success: false,
                message: "Password does not matched"
            })
        }

        const hashPassword = bcrypt.hashSync(password, 10);
        // console.log(hashPassword)

        try {
            await newUser.create({
                name, email, password: hashPassword, phoneNo,cnfPassword
            })
        } catch (error) {
            return res.status(404).json({
                success: false,
                message: "Error data entry time"
            })
        }
        return res.status(200).json({
            success: true,
            message: "resister successfully"
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "Error while resister the user"
        })
    }

}
export const login=async(req,res)=>{

    try {
        const {email,password}=req.body;
    const validUser=await newUser.findOne({email})

    if(!validUser){
        return res.status(404).json({
            success:false,
            message:"user is not exist"
        })
    }
    // console.log(validUser)
    const validPassword =await bcrypt.compare(password,validUser.password)
    if(!validPassword){
        return res.status(404).json({
            success:false,
            message:"password is not matched"
        })
    }
    // console.log(validPassword)
     res.status(200).json({
        success:true,
        message:"login successfully"
    })
    } catch (error) {
        return res.status(404).json({
            success:false,
            message:"error while user want to login"
        })
    }
    
}