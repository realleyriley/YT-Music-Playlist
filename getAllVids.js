/*
*the scope of this is from now going forward*
foreach scroll
get elements by object type
filter based on name of channel
filter based on WATCHED tag
remaining members - add to playlist WATCH_LATER

for every 23 indexes in the vids array you will get a new video and the information you need
this stuff below and the last index in that 23 range will be the index we want to use our click function on:
call to get data and channel name : vids[22].__dataHost.__data
and then in there:
ByLine for channel
isWatched for watched or not

    if we encounter 5 music videos in a row that have been viewed, then stop scrolling and adding videos
*/


async function addVidsToWatchLater() {
    channelList = ["Trap Nation", "Cloud Kid", "Proximity"];

    var vids = [];
    vids = document.getElementsByClassName("style-scope ytd-grid-video-renderer");
    var vidsLength = 0;

    var watchedCounter = 0;
    var i = 0;

    while(counter < 5) {
        window.scrollBy(0,50000);   // scroll down to load in more videos

        vidsLength = vids.length;

        while(vidsLength == vids.length) {      // loop until the new videos are loaded

            await new Promise(r => setTimeout(r, 200));    // sleep for .2 seconds
            
            vids = document.getElementsByClassName("style-scope ytd-grid-video-renderer");
        }
        

        // loop over all new vidoes 
        for(i; i < vids.length; i+=23) {
            
            channelName = vids[i].__dataHost.__data.bylineText.runs[0].text;       // possibly need var

            if(channelList.includes(channelName)){
                if(!vids[46].__dataHost.__data.data.isWatched) {  // check if it is 'watched' or not indicated by a red bar across the thumbnail
                    watchedCounter = 0;     // reset the counter
                    // click add to watch later
                    vids[i].dispatchEvent(new MouseEvent('mouseenter', { 'bubbles': true }));  // make the 'watch later' button show up. idk what bubbles is
                    buttons = vids[i].getElementsByClassName("style-scope ytd-thumbnail-overlay-toggle-button-renderer");
                    
                    buttons[2].click()      // add to watch later!
                }
                else {
                    watchedCounter += 1;
                }
            }
            
        }
    }

}