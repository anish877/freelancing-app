import express, { Request, Response } from "express"

const router = express.Router()

//Send otp 
router.post('/sendOTP', async (req: Request, res: Response) => {
    await sendOTP(req, res)
})
//verify otp and login the admin
router.post('/login', async (req: Request, res: Response) => {
    await verifyOTPAndLogin(req, res)
})

//register admin for testing
router.post('/registerAdmin', async (req: Request, res: Response) => {
    await registerAdmin(req, res)
})

export default router