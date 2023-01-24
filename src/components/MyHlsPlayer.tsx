
import { useEffect, useRef, } from "react";
import { loadMasterPlaylist, parseMasterPlaylist } from "../MyHlsPlayer/MyHlsPlayer";


const VIDEO_ELEMENT_ID = 'MyHlsPlayer'
const VIDEO_SOURCE = 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8';


export const MyHlsPlayer = () => {

    const playerRef = useRef<HTMLVideoElement>(null);

    useEffect(()=> {
        const setupPlayer = async () => {
            const masterPlaylist = await loadMasterPlaylist(VIDEO_SOURCE);
            console.log(masterPlaylist);
            parseMasterPlaylist(masterPlaylist, 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/');
            
        }
        setupPlayer();
    
    }, [playerRef, ])

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