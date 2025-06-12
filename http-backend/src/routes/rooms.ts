// import { Router, Request, Response } from 'express';
// import prisma from '../lib/prisma';
// import { authenticate } from '../middlewares/auth';

// const router = Router();

// // Create a new chat room
// router.post('/', authenticate, async (req: Request & { user?: any }, res: Response): Promise<void> => {
//   try {
//     const { freelancerId, clientId } = req.body;
//     const currentUser = req.user;

//     // Validate inputs
//     if (!freelancerId || !clientId) {
//       res.status(400).json({ message: 'Both freelancerId and clientId are required' });
//       return 
//     }

//     // Verify that current user is either the freelancer or the client
//     if (currentUser.id !== freelancerId && currentUser.id !== clientId) {
//       res.status(403).json({ message: 'You can only create rooms where you are a participant' });
//       return 
//     }

//     // Verify both users exist and have correct roles
//     const [freelancer, client] = await Promise.all([
//       prisma.user.findUnique({ where: { id: freelancerId } }),
//       prisma.user.findUnique({ where: { id: clientId } })
//     ]);

//     if (!freelancer || !client) {
//       res.status(404).json({ message: 'One or both users not found' });
//       return 
//     }

//     if (freelancer.role !== 'FREELANCER') {
//       res.status(400).json({ message: 'Specified freelancerId does not belong to a freelancer' });
//       return 
//     }

//     if (client.role !== 'CLIENT') {
//       res.status(400).json({ message: 'Specified clientId does not belong to a client' });
//       return 
//     }

//     // Check if room already exists between these users
//     const existingRoom = await prisma.room.findFirst({
//       where: {
//         AND: [
//           { freelancerId },
//           { clientId }
//         ]
//       }
//     });

//     if (existingRoom) {
//       res.status(409).json({ 
//         message: 'A room already exists between these users',
//         roomId: existingRoom.id
//       });
//       return 
//     }

//     // Create room
//     const room = await prisma.room.create({
//       data: {
//         freelancerId,
//         clientId
//       }
//     });

//     res.status(201).json(room);
//     return 
//   } catch (error) {
//     console.error('Error creating room:', error);
//     res.status(500).json({ message: 'Failed to create room' });
//     return 
//   }
// });

// // Get rooms for current user
// router.get('/', authenticate, async (req: Request & { user?: any }, res: Response): Promise<void> => {
//   try {
//     const userId = req.user.id;
    
//     // Get rooms for user
//     const rooms = await prisma.room.findMany({
//       where: {
//         OR: [
//           { freelancerId: userId },
//           { clientId: userId }
//         ]
//       },
//       orderBy: {
//         updatedAt: 'desc'
//       }
//     });
    
//     // Enhance room data with participant information
//     const enhancedRooms = await Promise.all(rooms.map(async (room) => {
//       const [freelancer, client] = await Promise.all([
//         prisma.user.findUnique({ 
//           where: { id: room.freelancerId },
//           select: { id: true, name: true, email: true, company: true } 
//         }),
//         prisma.user.findUnique({ 
//           where: { id: room.clientId },
//           select: { id: true, name: true, email: true, company: true } 
//         })
//       ]);
      
//       // Get last message for preview
//       const lastMessage = await prisma.message.findFirst({
//         where: { roomId: room.id },
//         orderBy: { createdAt: 'desc' }
//       });
      
//       return {
//         ...room,
//         freelancer,
//         client,
//         lastMessage
//       };
//     }));
    
//     res.status(200).json(enhancedRooms);
//     return 
//   } catch (error) {
//     console.error('Error fetching rooms:', error);
//     res.status(500).json({ message: 'Failed to fetch rooms' });
//     return 
//   }
// });

// // Get a specific room by ID
// router.get('/:roomId', authenticate, async (req: Request & { user?: any }, res: Response): Promise<void> => {
//   try {
//     const { roomId } = req.params;
//     const userId = req.user.id;
    
//     // Fetch room
//     const room = await prisma.room.findUnique({
//       where: { id: roomId }
//     });
    
//     if (!room) {
//       res.status(404).json({ message: 'Room not found' });
//       return 
//     }
    
//     // Check if current user is a participant
//     if (room.freelancerId !== userId && room.clientId !== userId) {
//       res.status(403).json({ message: 'You do not have access to this room' });
//       return 
//     }
    
//     // Fetch participant details
//     const [freelancer, client] = await Promise.all([
//       prisma.user.findUnique({ 
//         where: { id: room.freelancerId },
//         select: { id: true, name: true, email: true, company: true } 
//       }),
//       prisma.user.findUnique({ 
//         where: { id: room.clientId },
//         select: { id: true, name: true, email: true, company: true } 
//       })
//     ]);
    
//     // Get messages for this room
//     const messages = await prisma.message.findMany({
//       where: { roomId },
//       orderBy: { createdAt: 'asc' }
//     });
    
//     res.status(200).json({
//       ...room,
//       freelancer,
//       client,
//       messages
//     });
//     return 
//   } catch (error) {
//     console.error('Error fetching room:', error);
//     res.status(500).json({ message: 'Failed to fetch room details' });
//     return 
//   }
// });

// export default router;