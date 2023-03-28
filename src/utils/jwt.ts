// import jwt from 'jsonwebtoken';
//
// export const generateAccessToken = (userName: string, email: string) => {
//   return jwt.sign({ user: userName, email }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
// };
//
// export const generateRefreshToken = (userName: string, email: string) => {
//   return jwt.sign({ user: userName, email }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
// };
//
// export async function addToList(user, refresher) {
//   try {
//     await redis.hset('refresh:' + user, { refresh: refresher });
//   } catch (error) {
//     console.log(error);
//   }
// }
//
// export const tokenRefresh = async (refreshtoken: string, res) => {
//   let decoded: jwt.JwtPayload | string = '';
//   try {
//     decoded = jwt.verify(refreshtoken, process.env.SECRET_TOKEN);
//   } catch (error) {
//     return res.status(401).send("Can't refresh. Invalid Token");
//   }
//   if (decoded) {
//     try {
//       const rtoken = await redis.hget('refresh:' + decoded.user, 'refresh');
//       console.log(rtoken);
//       if (rtoken !== refreshtoken) {
//         return res.status(401).send("Can't refresh. Invalid Token");
//       } else {
//         const user = await redis.hgetall(`user:${decoded.user}`);
//         console.log(user);
//         const token = generateAccessToken(decoded.user, user.level);
//         const refreshToken = generateRefreshToken(decoded.user, user.level);
//
//         const refresh = await addToList(decoded.user, refreshToken);
//
//         const content = {
//           user: decoded.user,
//           level: user.level
//         };
//         return {
//           message: 'Token Refreshed',
//           content: content,
//           JWT: token,
//           refresh: refreshToken
//         };
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };
// @ts-ignore

export {};
