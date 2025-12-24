// module.exports = () => ({});
module.exports = ({ env }) => ({
    'cloudinary-media-library': {
        enabled: true,
        config: {
            cloudName: env('CLOUDINARY_NAME'),
            apiKey: env('CLOUDINARY_API_KEY'),
            encryptionKey: env('CLOUDINARY_API_SECRET'),
        },
    },
});
