export function toTenThousand(num) {
    return num < 10000 ?
        num : Math.floor(num / 10000) + "万";
}

export function modMusicList(list) {
    const modList = list.map((item, index) => ({
        order: index + 1 < 10 ? '0' + (index + 1) : index + 1,
        name: item.name,
        artist: item.ar[0].name || '',
        album: item.al.name || '',
        isLike: false
    }));
    return modList
}
