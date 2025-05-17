import path from "path";
import {defineConfig} from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import {sync as globSync} from "glob";
import handlebars from "vite-plugin-handlebars";
import {
    resolveFromRoot,
    getLanguageFromUrl,
    removeLanguageFromUrl,
    eachUpto,
    inc,
    eq,
    isNotDefaultHomeUrl,
    notCurrentUrl,
    isEven,
    isOdd,
    getSocialShareUrl
} from "./helpers.js";
import pages from "./content/pages.json" assert {type: "json"};
import languages from "./content/languages.json" assert {type: "json"};
import commonContext from "./content/common.json" assert {type: "json"};

const siteContext = {
    siteUrl:
        process.env.NODE_ENV === "production"
            ? "https://ships3d.net"
            : "http://localhost:5173",
    shareUrl:
        process.env.NODE_ENV === "production"
            ? "https://ships3d.net"
            : "http://localhost:5173",
    cloudflareUrl: ".pages.dev",
    isMultiLingual: false,
};

export default defineConfig({
    root: path.join(__dirname, "src"),
    build: {
        outDir: path.join(__dirname, "dist"),
        emptyOutDir: true,
        rollupOptions: {
            input: Object.fromEntries(
                globSync("src/**/*.html", {windowsPathsNoEscape: true}).map(
                    (file) => [
                        file.slice(4, -5).replace(/\\/g, "/"),
                        path.resolve(__dirname, file),
                    ]
                )
            ),
            output: {
                assetFileNames: "assets/[name].[hash].[ext]",
                entryFileNames: "assets/[name].[hash].js",
                chunkFileNames: "assets/[name].[hash].js",
            },
        },
    },
    plugins: [
        handlebars({
            context(pagePath) {
                let urlLanguageCode = getLanguageFromUrl(pagePath);
                let currentUrlPath = removeLanguageFromUrl(pagePath);

                if (!urlLanguageCode) {
                    urlLanguageCode = "en";
                }

                const fullUrl = `${siteContext.siteUrl}${pagePath.replace(
                    /\/index\.html$/,
                    "/"
                )}`;

                return {
                    pagePath,
                    currentUrl: fullUrl,
                    commonUrlPath: `${currentUrlPath.replace(/\/index\.html$/, "/")}`,
                    currentLanguage: languages[urlLanguageCode],
                    urlLanguageCode,
                    currentUrlPath,
                    languages,
                    ...siteContext,
                    ...commonContext[urlLanguageCode],
                    ...pages[urlLanguageCode][currentUrlPath],
                };
            },
            helpers: {
                resolveFromRoot,
                eachUpto,
                inc,
                eq,
                isNotDefaultHomeUrl,
                notCurrentUrl,
                isEven,
                isOdd,
                getSocialShareUrl,
            },
            partialDirectory: path.resolve(__dirname, "./partials"),
        }),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer],
        },
    },
});
