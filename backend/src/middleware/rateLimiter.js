import ratelimit from "../config/upstash.js"



const rateLimiter = async (req, res, next) => {
    // done per user => jhon jane
    try {
        const {success} = await ratelimit.limit("my-limit-key") // usually insted of my-limit-key there is a user id so that that particulat user is RateLimited due to the requests.
        if(!success){
            return res.status(429).json({message:"Too many request please try again later"})
        }
        next()
    } catch (error) {
        console.log("Rate limit error", error);
        next("error");
    }
}

export default rateLimiter;