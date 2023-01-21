const loadMasterPlaylist = async (src:string) => {
    const result = await fetch(src);
    return result.text();
}


const parseMasterPlaylist = () => {
    //todo:
}



export {
    loadMasterPlaylist,
    parseMasterPlaylist
}