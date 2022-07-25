export function toTenThousand(num) {
    return num < 10000 ?
        num : Math.floor(num / 10000) + "万";
}