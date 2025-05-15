export function resolveFromRoot(filePath) {
    return '/' + filePath.replace(/\\/g, '/');
}

export function getLanguageFromUrl(url) {
    const match = url.match(/^\/([a-z]{2})(\/|$)/i);
    return match ? match[1].toLowerCase() : null;
}
export function removeLanguageFromUrl(url) {
    const parts = url.split('/');
    if (parts[1] && /^[a-z]{2}$/i.test(parts[1])) {
        parts.splice(1, 1);
        return parts.join('/') || '/';
    }
    return url;
}

export function eachUpto(ary, max, options) {
    if (!ary || ary.length === 0)
        return options.inverse(this);

    let result = [];
    for (let i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
}

export function inc(value) {
    return parseInt(value) + 1;
}

export function eq(a, b) {
    return a === b;
}

export function isNotDefaultHomeUrl(commonUrlPath, languagePath, options) {
    if (languagePath !== "" || commonUrlPath !== "/") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
}

export function notCurrentUrl(url, options) {
    const currentUrl = options.data.root.pagePath.replace(/\/index\.html$/, '/');

    if (url !== currentUrl) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
}

export function isEven(conditional) {
    return conditional % 2 === 0;
}

export function isOdd(conditional) {
    return conditional % 2 !== 0;
}

export function getSocialShareUrl(platform, options) {
    const currentUrl = options.data.root.currentUrl;
    const currentTitle = options.data.root.title;
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(currentTitle);

    switch (platform) {
        case 'linkedin':
            return `https://www.linkedin.com/sharing/share-offsite?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedTitle}`;
        case 'facebook':
            return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        case 'x':
            return `https://x.com/intent/post?text=${encodedTitle}&url=${encodedUrl}`;
        case 'whatsapp':
            return `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        case 'telegram':
            return `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
        case 'reddit':
            return `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
        case 'pinterest':
            return `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`;
        case 'tumblr':
            return `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodedUrl}&title=${encodedTitle}`;
        case 'email':
            return `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;
        default:
            return '#';
    }
}