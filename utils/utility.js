export function excerpt(content) {
    let str = null;
    if (content.length > 10) {
        str = content.substring(0,200) + "...";
    }
    return str;
}