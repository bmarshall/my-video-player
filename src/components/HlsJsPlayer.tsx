import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";


const VIDEO_ELEMENT_ID = 'HlsJsPlayer'
const VIDEO_SOURCE = 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8';

export const HlsJsPlayer = () => {

    const playerRef = useRef<HTMLVideoElement>(null);
    const [isHlsSupported] = useState(Hls.isSupported());

    useEffect(()=> {
        if(!isHlsSupported || playerRef.current === null) {
            return;
        }
        
        
        var hls = new Hls();
        
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            console.log('video and hls.js are now bound together !');
        });
        
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            console.log(
                'manifest loaded, found ' + data.levels.length + ' quality level'
            );
        });
       
        hls.loadSource(VIDEO_SOURCE);
        // bind them together
        hls.attachMedia(playerRef.current);
    
    }, [playerRef, isHlsSupported])


    if(!isHlsSupported) {
        return (<h1>HLS IS NOT SUPPORTED IN THIS BROWSER</h1>);
    }

    return (
        <div>
            <h1>HlsJsPlayer</h1>
            <video id={VIDEO_ELEMENT_ID} ref={playerRef}/>
            <div>
                <button 
                    onClick={() => {
                        if(playerRef.current === null) {
                            return;
                        }
                        playerRef.current.play()
                    }
                }>Play</button>
                <button 
                    onClick={() => {
                        if(playerRef.current === null) {
                            return;
                        }
                        playerRef.current.pause()
                    }
                }>Pause</button>
                <button 
                    onClick={() => {
                        if(playerRef.current === null) {
                            return;
                        }
                        playerRef.current.volume = Math.min(playerRef.current.volume +.1, 1);
                    }
                }>Vol Up</button>
                <button 
                    onClick={() => {
                        if(playerRef.current === null) {
                            return;
                        }
                        playerRef.current.volume = Math.min(playerRef.current.volume -.1, 1);
                    }
                }>Vol Down</button>
                
            </div>
        </div>
    );
}