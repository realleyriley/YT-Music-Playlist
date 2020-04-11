/*
Author: Riley Tallman, Chris Harsh
Date: 2/17/2020
Description:    
This file contains one function that will add a bunch of videos to YouTube's "watch later" playlist.
It will take in a list of channel names to filter by and then 
Every 23 indexes in the vids array you will get a new video and the information you need
    this stuff below and the last index in that 23 range will be the index we want to use our click function on:
    call to get data and channel name : vids[22].__dataHost.__data
    and then in there:
    ByLine for channel
    isWatched for watched or not

    if we encounter 5 music videos in a row that have been viewed, then stop scrolling and adding videos
*/

window.addEventListener("DOMContentLoaded", function() {
    // do stuff
    document.getElementById("addNewMusicToWatchLaterButton").addEventListener("click", addNewMusicToWatchLater);
    
    // chrome.tabs.getCurrent(function(tab) {
    //     alert(tab.title);
    // });

}, false);


async function addNewMusicToWatchLater() {
    // console.log('commencing...');
    channelList = ["Trap Nation", "House Nation", "Cloud Kid", "Proximity"];
    alert(document.title);
    var vids = [];
    vids = document.getElementsByClassName("style-scope ytd-grid-video-renderer");  // get a list html elements
    var vidsLength = vids.length;

    if(vidsLength == 0) {
        alert("No YouTube videos were found on this page. Try again at https://www.youtube.com/feed/subscriptions")
    }

    var watchedCounter = 0;
    var i = 0;

    while(watchedCounter < 5) {
        // console.log('[-] scrolling');
        window.scrollBy(0,50000);   // scroll down to load in more videos

        vidsLength = vids.length;

        while(vidsLength == vids.length) {      // loop until the new videos are loaded when we scroll down
            console.log('[-] waiting .2 seconds');
            await new Promise(r => setTimeout(r, 200));    // sleep for .2 seconds
            
            vids = document.getElementsByClassName("style-scope ytd-grid-video-renderer");
        }
        
        // console.log('[-] vids.length: ', vids.length);
        
        // loop over all new vidoes 
        for(i; i < vids.length; i+=23) {
            
            channelName = vids[i].__dataHost.__data.bylineText.runs[0].text;       // possibly need var
            // console.log('i: ', i, 'ChannelName: ', channelName);


            if(channelList.includes(channelName)) {
                if(!vids[46].__dataHost.__data.data.isWatched) {  // check if it is 'watched' or not (indicated by a red bar across the thumbnail)
                    // click add to watch later
                    // console.log('[-] adding ', channelName, ' to watch later');
                    
                    // vids[i].dispatchEvent(new MouseEvent('mouseenter', { 'bubbles': true }));  // make the 'watch later' button show up. idk what bubbles is
                    // buttons = vids[i].getElementsByClassName("style-scope ytd-thumbnail-overlay-toggle-button-renderer");
                    
                    // buttons[2].click()      // add to watch later!
                    watchedCounter = 0;     // reset the counter
                }
                else {
                    // console.log('[-] ', channelName, ' has been watched');
                    watchedCounter += 1;
                    // console.log('[-] watched counter: ', watchedCounter);
                }
            }

        } // end for

    } // end while

} // end function
