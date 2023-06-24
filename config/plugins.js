module.exports = ({ env }) => ({
  "users-permissions": {
    enabled: true,
    config: {
      jwt: {
        expiresIn: "15m",
      },
      ratelimit: { interval: 60000, max: 5000 },
    },
  },

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
        read: {
          fetch_format: "auto",
          quality: "auto",
          secure: true,
          width: 800,
          height: 800,
          crop: "fill",
        },
      },
    },
  },
  // ...
});
