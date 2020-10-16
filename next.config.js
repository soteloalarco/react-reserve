// must restart server whenever you make changes in next.config
module.exports = {

  env: {
    MONGO_SRV: "mongodb+srv://soteloalarco:soteloalarco@verdevida.hf97m.mongodb.net/<sample_verdevida>?retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
