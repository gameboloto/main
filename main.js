    const API_BASE_URL = "https://api.mcsrvstat.us/bedrock/3/";
    const SERVER_URL = "gameboloto.mcbe.in:15817";
 
    const FETCH_URL = API_BASE_URL + SERVER_URL;
 
    // Just a cleaner way to store the HTML IDs
    const HTML_IDS = {
        status: "status",
        players: "players",
        motd: "motd",
        icon: "icon",
    };
 
    // Same as above
    const HTML_ELEMENT_ENABLED = {
        status: true,
        players: true,
        motd: true,
        icon: true,
    };
 
    const ONLINE_TEXT = "Online!";
    const OFFLINE_TEXT = "Offline!";
    const IN_GAME_MOTD_COLORS = true;
 
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    fetch(FETCH_URL)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                console.error("Something went wrong with the request");
            }
        })
        .then((res) => {
            setServerStatusDisplay(res);
        });
 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    function setServerStatusDisplay(data) {
        let statusEl, playerEl, motdEl, iconEl;
 
        statusEl = HTML_ELEMENT_ENABLED.status ? document.getElementById(HTML_IDS.status) : null;
 
        // Note: This is the same as the above line:
        // if (HTML_ELEMENT_ENABLED.status) {
        //     statusEl = document.getElementById(HTML_IDS.status);
        // } else {
        //     statusEl = null;
        // }
        
        playerEl = HTML_ELEMENT_ENABLED.players ? document.getElementById(HTML_IDS.players) : null;
        
        //motdEl = HTML_ELEMENT_ENABLED.motd ? document.getElementById(HTML_IDS.motd) : null;
        
        //iconEl = HTML_ELEMENT_ENABLED.icon ? document.getElementById(HTML_IDS.icon) : null;
 
        if (data.online) {
            
            statusEl.innerText = statusEl ? ONLINE_TEXT : null;
            
            playerEl.innerText = playerEl ? `${data.players.online}/${data.players.max}` : null;
            
            //iconEl.innerHTML = iconEl ? `<img src="${data.icon}">` : null;
            
            //motdEl.innerText = motdEl
            //            ? IN_GAME_MOTD_COLORS
            //                ? data.motd.html
            //                : data.motd.clean
            //    : null;
            
            // Simpler way to do it
            // if (IN_GAME_MOTD_COLORS) {
            //     motdEl.innerText = motdEl ? data.motd.html : null;
            // } else {
            //     motdEl.innerText = motdEl ? data.motd.clean : null;
            // }
 
        } else {
            statusEl.innerHTML = OFFLINE_TEXT;
        }
    }