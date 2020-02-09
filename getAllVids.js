var vids = [];
vids = document.getElementsByClassName("style-scope ytd-grid-video-renderer");

vids[22].dispatchEvent(new MouseEvent('mouseenter', { 'bubbles': true }));  // idk what bubbles is
t = vids[22].getElementsByTagName("ytd-thumbnail-overlay-toggle-button-renderer");  // contains the "watch later" and "add to queue" buttons




// keepsake
mouseover = vids[0].getElementsByClassName("style-scope ytd-thumbnail");

if (el.length > 0) { el[el.length-1].click(); setTimeout(d,500); };
var mouseover = [];

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


*/

// scroll first

var vids = [];
vids = document.getElementsByClassName("style-scope ytd-grid-video-renderer");

for(i = 0; i < vids.length; i+=23) {
    // check stuff and click 
    //possibly need var
    data = vids[i].__dataHost.__data.bylineText.runs[0].text;
    if(data === "Trap Nation" || data === "Cloud Kid"){
        //click add to watch later
    vids[i].dispatchEvent(new MouseEvent('mouseenter', { 'bubbles': true }));  // idk what bubbles is
    t = vids[i].getElementsByTagName("ytd-thumbnail-overlay-toggle-button-renderer");  // contains the "watch later" and "add to queue" buttons
    
    }

    // filter by channel name
    data.getElementsByTagName("")
}

