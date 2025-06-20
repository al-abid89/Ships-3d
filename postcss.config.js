import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
    plugins: [
        tailwindcss,
        autoprefixer,
        ...(process.env.NODE_ENV === 'production'
            ? [
                cssnano({
                    preset: ['advanced', {"discardComments": {"removeAll": true}}]
                }),
            ]
            : []),
    ],
};
