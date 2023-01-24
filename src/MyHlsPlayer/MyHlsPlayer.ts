const loadMasterPlaylist = async (src:string) => {
    const result = await fetch(src);
    return result.text();
}


const MASTER_PLAYLIST_REGEX =
  /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g;
const MASTER_PLAYLIST_MEDIA_REGEX = /#EXT-X-MEDIA:(.*)/g;
const ATTR_LIST_REGEX = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g; // eslint-disable-line no-useless-escape
const quote = '"';

const parseMasterPlaylist = (masterPlaylist:string, baseUrl:string) => {
    let result = null;
    while ((result = MASTER_PLAYLIST_REGEX.exec(masterPlaylist)) != null) {
        console.log(result);
        let match = null;
        let attrs:any = [];
        while ((match = ATTR_LIST_REGEX.exec(result[1])) !== null) {
            let value = match[2];
      
            if (
              value.indexOf(quote) === 0 &&
              value.lastIndexOf(quote) === value.length - 1
            ) {
              value = value.slice(1, -1);
            }
      
            attrs[match[1]] = value;
          }
          const url = baseUrl + result[2]
          console.log(attrs)
          console.log(url)

    }
    
}



export {
    loadMasterPlaylist,
    parseMasterPlaylist
}